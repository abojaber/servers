var colors = require('colors/safe');
var Table = require('cli-table');

generateList = function (data) {
    var table = new Table({
        chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '/' , 'top-right': '\\'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' },


        head: ['id', 'First Name', 'Las Name', 'password', 'created', 'updated'],
        colWidths: [4, 15,10,15,20,20]

    });

    data.forEach(function (user) {
        table.push(Object.values(user.dataValues));
    });

    console.log(table.toString());
};


module.exports.generateList = generateList;
