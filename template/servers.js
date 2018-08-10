var colors = require('colors/safe');
var Table = require('cli-table');


generateList = function (data) {
    var table = new Table({
        chars: {
            'top': '═', 'top-mid': '╤', 'top-left': '/', 'top-right': '\\'
            , 'bottom': '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝'
            , 'left': '║', 'left-mid': '╟', 'mid': '─', 'mid-mid': '┼'
            , 'right': '║', 'right-mid': '╢', 'middle': '│'
        },


        head: ['id', 'hostname', 'ip', 'env', 'created', 'updated'],
        colWidths: [4, 15, 10, 15, 20, 20]

    });

    data.forEach(function (server) {
        table.push(Object.values(server.dataValues));
    });

    console.log(table.toString());
};


module.exports.generateList = generateList;