
import sequelize from '../db/dbConnection.js';
import { Model , DataTypes } from 'sequelize';
import StadiumTimeSlot from "./stadiumTimeSlot.js";
import User from "./user.js";

class Stadium extends Model{

}
Stadium.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost_per_hour: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'locations',
            key: 'id'
        }
        
    }


},{
    timestamps:false,
    sequelize,
    tableName:'stadiums'
})

// Stadium.hasMany(OwnerRelation, { foreignKey: 'id', as: 'ownerRelation' });
// OwnerRelation.belongsTo(Stadium, { foreignKey: 'id', as: 'Stadium' });

export default Stadium;