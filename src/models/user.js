
import sequelize from "../db/dbConnection.js";
import { Model , DataTypes } from "sequelize";

class User extends Model{

}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }

},{
    timestamps:false,
    sequelize,
    tableName:'users'
})
export default User;