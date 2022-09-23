'use strict';

const createCommentTable=(sequelize, DataType)=> sequelize.define('comment', {

        text: { type: DataType.STRING, allowNull: false },
        textId: { type: DataType.INTEGER, allowNull: false },
        userId: { type: DataType.INTEGER, allowNull: false },

    });



module.exports = {createCommentTable} ;