import {
    AllowNull,
    AutoIncrement, BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Index,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
// eslint-disable-next-line import/no-cycle
import Topic from './Topic';

interface CommentAttributes {
    id: number;
    text: string;
    topicId: number;
    authorId: number;
    parentId?: number | null;
}

export interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

@Table({
    timestamps: true,
    paranoid: true,
    tableName: 'comments',
})
export default class Comment extends Model<CommentAttributes, CommentCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    text: string;

    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topicId: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    authorId: number;

    @ForeignKey(() => Comment)
    @AllowNull(true)
    @Index
    @Column({
        type: DataType.INTEGER,
        references: {
            model: 'comments',
            key: 'id',
        },
    })
    parentId: number;

    @AllowNull(false)
    @Column('LTREE')
    @Index({
        using: 'GIST',
    })
    parentPath: string;

    @BelongsTo(() => Topic)
    topic: Topic;
}
