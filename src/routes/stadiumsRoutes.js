
import { Router } from 'express';
import StadiumsCtrl from '../Controllers/stadiumsCtrl.js';

class StadiumRoutes{

    constructor() {
        this.router = Router();
        this.stadiumCtl = new StadiumsCtrl();
        this.config();
    }

    config(){

        this.router.get('/available-stadiums',this.stadiumCtl.getAvailableStadiums);

    }


}
export default new StadiumRoutes().router;