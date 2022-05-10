
import { StatusCodes } from 'http-status-codes';
import { apiErrorHandler } from '../handlers/errorHandler.js';
import stadiumsRepo from '../repositories/stadiumRepo.js'
import { formatDate , getDayCountBetweenDates } from '../utils/utils.js';
export default class StadiumsCtrl {

    constructor( ) { }
    // api/v0/stadiums?available-stadiums?date=2022-01-05
    getAvailableStadiums = async (req,res,next) => {
        try{
            let date;
            req.query.date? date= new Date(req.query.date) : date=new Date();
            const availableStadiums = await stadiumsRepo.getAvailableStadium(date);
            const result = [];
            for (let i =0;i < availableStadiums.length;i++){

                    result.push(
                        availableStadiums[i]
                        )


            }

            res.status(StatusCodes.OK).json({
                'result':result
            })
        }catch (e) {
            apiErrorHandler(e,req,res,e.message);
        }

    }



}