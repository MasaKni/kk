
import { Op } from 'sequelize';
import dbConnection from "../db/dbConnection.js";
import StadiumTimeSlot from '../models/stadiumTimeSlot.js';
import { QueryTypes } from 'sequelize'
import Stadium from '../models/stadiums.js';

import {formatDate} from '../utils/utils.js';


class StadiumsRepo {

    constructor( ) {  }


    getAvailableStadium(date){
        console.log(formatDate(date))
        const date1 = formatDate(date)
        let sql = `SELECT * from stadium_time_slots AS STS 
            INNER join stadiums as S on STS.stadium_id = S.id 
            INNER join users as U on U.id = S.owner_relation_id  
            INNER JOIN locations AS L ON s.location_id = L.id
            where STS.start_date <= ? and STS.end_date > ?`;

        return dbConnection.query(sql,
            {
                replacements:[date1,date1],
            type: QueryTypes.SELECT,
            raw:true
        });

        // return  StadiumTimeSlot.findAll({
        //     where: {
        //         [Op.and]:[
        //             {
        //                 start_date: {
        //                     [Op.lte]:formatDate(date)
        //                 }
        //             },
        //             {
        //                 end_date:{
        //                     [Op.gte]:formatDate(date)
        //                 }
        //             }
        //         ]
        //
        //     },
        //     include:[
        //         {
        //             model:Stadium,
        //             as:'stadium'
        //         }
        //
        //     ]
        // })

    }


}

export default new StadiumsRepo();