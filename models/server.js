'use strict';
var db = require('../models/index');

module.exports = (sequelize, DataTypes) => {
    const Server = sequelize.define('Server', {
        hostname: DataTypes.STRING,
        ip: DataTypes.STRING,
        user: DataTypes.STRING,
        password: DataTypes.STRING,
        project: {
            type: DataTypes.INTEGER,

            references: {
                // This is a reference to another model
                model: db.Project,

                // This is the column name of the referenced model
                key: 'id',
            }
        },
        env: DataTypes.STRING

    }, {});


    Server.associate = function (models) {
        // associations can be defined here
    };
    return Server;
};