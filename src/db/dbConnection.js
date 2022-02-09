import { Sequelize } from 'sequelize';

import config from 'config-json';
import * as dotenv from "dotenv";

class DataBaseConnector {

    constructor() {
        dotenv.config();
        config.baseDir = `${process.cwd()}\\config`;
        config.load('database_config.json');
        const db_config = config.get(process.env.NODE_ENV)
        this._db_host = db_config.host;
        this._db_port = db_config.db_port;
        this._dialect = db_config.dialect;
        this._password = db_config.password;
        this._username = db_config.username;
        this._db_name = db_config.database

    }

    connectDB = async () => {
        const optionsObj= { benchmark: true, logging:  console.log , host: this._db_host,
            dialect: this._dialect,
            port: this._db_port}
        this.sequelize = new Sequelize(this._db_name,this._username,this._password,optionsObj);
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully..');
        }catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        try {
            await this.sequelize.sync({force: true});
            console.log('Sync to database successfully..');
        }catch (error) {
            console.error('Unable to sync to the database:', error);
        }
        return  this.sequelize;
    }

}
const dbConnection = new DataBaseConnector()

export default await dbConnection.connectDB()

