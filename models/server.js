'use strict';
module.exports = (sequelize, DataTypes) => {
    var Server = sequelize.define('Server', {
        hostname: DataTypes.STRING,
        ip: DataTypes.STRING,
        env: DataTypes.STRING

    }, {});
    Server.associate = function (models) {
        // associations can be defined here
    };
    return Server;
};