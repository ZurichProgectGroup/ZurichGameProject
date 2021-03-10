import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    HasMany,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
// eslint-disable-next-line import/no-cycle
import Comment from './Comment';

interface TopicAttributes {
    id: number;
    title: string;
    content: string;
    authorId: number;
    comments?: Comment[];
}

export interface TopicCreationAttributes extends Optional<TopicAttributes, 'id'> {}

@Table({
    timestamps: true,
    paranoid: true,
    tableName: 'topics',
})
export default class Topic extends Model<TopicAttributes, TopicCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    title: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    content: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    authorId: number;

    @HasMany(() => Comment)
    comments: Comment[];
}
