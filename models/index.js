'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostsTable } = require('./post.model');

require('dotenv').config();



const POSTGRES_URL = process.env.DATABASE_URL;

let sequelizeOptions = {

    
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized: false
        }
    }

 
};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);




module.exports = {

    dataBase: sequelize, 

    posts: createPostsTable(sequelize, DataTypes),

    cars: createCarsTable(sequelize, DataTypes) 

}