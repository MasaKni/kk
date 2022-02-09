
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
                let startDate = new Date(availableStadiums[i]['start_date']);
                let endDate = new Date(availableStadiums[i]['end_date']);
                const numSlot = getDayCountBetweenDates(startDate,endDate,availableStadiums[i]['day']);

                for (let j=0;j<numSlot;j++){

                    result.push({
                        'name_owner': availableStadiums[j]['first_name'] +" "+ availableStadiums[j]['last_name'],
                        'start_time': availableStadiums[j]['start_time'],
                        'end_time': availableStadiums[j]['end_time'],
                        'date':formatDate(date),
                        'const_per_hour': parseFloat(availableStadiums[j]['cost_per_hour']),
                        'location':{
                            'city':availableStadiums[j]['city'],
                            'street':availableStadiums[j]['street'],
                        }
                    })
                }

            }

            res.status(StatusCodes.OK).json({
                'available_stadiums':result
            })
        }catch (e) {
            apiErrorHandler(e,req,res,e.message);
        }

    }



}