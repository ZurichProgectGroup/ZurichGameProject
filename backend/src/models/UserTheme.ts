import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';
import Theme from './Theme';

interface UserThemeAttributes {
    userId: number;
    themeId: number;
}

@Table({
    tableName: 'userTheme',
    timestamps: false,
})
export default class UserTheme extends Model<UserThemeAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    userId: number;

    @ForeignKey(() => Theme)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    themeId: number;

    @BelongsTo(() => Theme)
    theme: Theme;
}
