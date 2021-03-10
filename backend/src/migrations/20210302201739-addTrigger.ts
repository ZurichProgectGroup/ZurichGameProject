export const up = async (queryInterface) => {
    await queryInterface.sequelize.query(`
        CREATE OR REPLACE FUNCTION update_comments_parent_path() RETURNS TRIGGER AS $$
        DECLARE
            path ltree;
        BEGIN
            IF NEW."parentId" IS NULL THEN
                NEW."parentPath" = 'root'::ltree;
            ELSEIF TG_OP = 'INSERT' OR OLD."parentId" IS NULL OR OLD."parentId" != NEW."parentId" THEN
                SELECT "parentPath" || id::text FROM comments WHERE id = NEW."parentId" INTO path;
                IF path IS NULL THEN
                    RAISE EXCEPTION 'Invalid "parentId" %', NEW."parentId";
                END IF;
                NEW."parentPath" = path;
            END IF;
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;

        CREATE TRIGGER parent_path_tgr
            BEFORE INSERT OR UPDATE ON comments
                FOR EACH ROW EXECUTE PROCEDURE update_comments_parent_path();
    `);
};

export const down = async (queryInterface) => {
    await queryInterface.sequelize.query(`
        DROP TRIGGER parent_path_tgr ON "comments";
        DROP FUNCTION IF EXISTS update_comments_parent_path;
    `);
};
