module.exports = {
    up: async (queryInterface) => queryInterface
        .bulkInsert('themes',
            [
                {
                    title: 'dark',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }, {
                    title: 'light',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ]),

    down: async () => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    },
};
