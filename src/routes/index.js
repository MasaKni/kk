import Router from 'express';
import stadiumsRoutes from './stadiumsRoutes.js';

class IndexRoutes {

    constructor() {
        this.router = Router();
        this.config();
    }

    config(){
        this.router.use('/stadiums',stadiumsRoutes);
    }

}

export default new IndexRoutes().router;