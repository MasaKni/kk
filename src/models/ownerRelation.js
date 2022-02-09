
import sequelize from "../db/dbConnection.js";
import { Model , DataTypes } from "sequelize";
import StadiumTimeSlot from "./stadiumTimeSlot.js";
import User from "./user.js";

class OwnerRelation extends Model{

}
OwnerRelation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        references: {
            model: 'users',
            key: 'id'
        }
    }


},{
    timestamps:false,
    sequelize,
    tableName:'owner_relations'
})
// OwnerRelation.hasMany(User);

export default OwnerRelation;