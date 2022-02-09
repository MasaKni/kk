
import sequelize from "../db/dbConnection.js";
import { Model , DataTypes } from "sequelize";
import Stadium from "./stadiums.js";
class StadiumTimeSlot extends Model{

}
StadiumTimeSlot.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stadium_id: {
        type:DataTypes.INTEGER,
        references: {
            model: 'stadiums',
            key: 'id'
        }
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    day:{
        type: DataTypes.ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY')
    }

},{
    timestamps:false,
    sequelize,
    tableName:'stadium_time_slots'
})

// StadiumTimeSlot.hasMany(Stadium, { foreignKey: 'id', as: 'stadium' });
// Stadium.belongsTo(StadiumTimeSlot, { foreignKey: 'id', as: 'stadiumTimeSlot' });

export default StadiumTimeSlot;