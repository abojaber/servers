'use strict';
module.exports = (sequelize, DataTypes) => {
    var Server = sequelize.define('Server', {
        hostname: DataTypes.STRING,
        ip: DataTypes.STRING,
        user: DataTypes.STRING,
        password: DataTypes.STRING,
        env: DataTypes.STRING

    }, {});
    Server.associate = function (models) {
        // associations can be defined here
    };
    return Server;
};