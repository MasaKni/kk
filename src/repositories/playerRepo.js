
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
        let sql = `SELECT * from players `;

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