import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    Index,
    Model,
    PrimaryKey,
    Table,
    Unique,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface ThemeAttributes {
    id: number;
    title: string;
}

export interface ThemeCreationAttributes extends Optional<ThemeAttributes, 'id'> {}

@Table({
    timestamps: true,
    paranoid: true,
    tableName: 'themes',
})
export default class Theme extends Model<ThemeAttributes, ThemeCreationAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Index
    @AllowNull(false)
    @Unique
    @Column(DataType.STRING)
    title: string;
}
