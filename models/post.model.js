'use strict';


const createPostsTable = (sequelize, DataType) => sequelize.define('posts', {

    title: { type: DataType.STRING, allowNull: false },
    content: { type: DataType.STRING, defaultValue: 'Good Data' },

});



module.exports = { createPostsTable };