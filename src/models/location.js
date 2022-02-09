
import sequelize from "../db/dbConnection.js";
import { Model , DataTypes } from "sequelize";

class Location extends Model{

}
Location.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },


},{
    timestamps:false,
    sequelize,
    tableName:'locations'
})
export default Location;