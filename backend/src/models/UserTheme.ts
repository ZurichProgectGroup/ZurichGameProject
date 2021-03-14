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
    tableName: 'user_theme',
    timestamps: false,
})
export default class UserTheme extends Model<UserThemeAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        field: 'user_id',
    })
    userId: number;

    @ForeignKey(() => Theme)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        field: 'theme_id',
    })
    themeId: number;

    @BelongsTo(() => Theme)
    theme: Theme;
}
