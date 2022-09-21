'use strict';
const jwt = require("jsonwebtoken");

function createUsersTable(sequelize, dataTypes) {
    return (
        sequelize.define('users', {
            userName: { type: dataTypes.STRING, allowNull: false, unique: true },
            email: { type: dataTypes.STRING, allowNull: false, unique: true, isEmail: true },
            passWord: { type: dataTypes.STRING, allowNull: false },
            token: {
                type: dataTypes.VIRTUAL,
                get: function () {
                    return jwt.sign({
                        userName: this.userName
                    }, process.env.JWT)
                },
                set(tokenObj) {
                    return jwt.sign(tokenObj, process.env.JWT)
                }
            }
        })
    );
}



module.exports = { createUsersTable };