
import sequelize from "../db/dbConnection.js";
import { Model , DataTypes } from "sequelize";

class Reservations extends Model{

}
Reservations.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_customer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'users',
            key: 'id'
        }
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stadium_time_slot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'stadium_time_slots',
            key: 'id'
        }
    }

},{
    timestamps:false,
    sequelize,
    tableName:'reservations'
})
export default Reservations;