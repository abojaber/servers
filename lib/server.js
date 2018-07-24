const inquirer = require('inquirer');
var db = require('../models/index');
var template = require('../template/servers');
var questions = [
    {
        type: 'input',
        name: 'hostname',
        message: 'Enter hostName ...'
    },
    {
        type: 'input',
        name: 'ip',
        message: 'Enter server IP ...'
    },
    {
        type: 'list',
        name: 'env',
        choices: ['Production', 'Development', 'Test', 'Stage'],
        default: 2,
        message: 'Enter envirement ...'

    }
];

///////////////////////////////
var add = function () {

    inquirer
        .prompt(
            questions
        )
        .then(answers => {
            db.Server.create(answers).then(function () {
                console.log("adding new server success: %d", answers.hostname);
            });
        });
};

var list = function (option = {}) {
    if (option === undefined) {
        where = {}
    }else
    {
        where = {
            where: option
        }
    }
    console.log(option);
    db.Server.findAll(where).then(servers => {
        template.generateList(servers);
    });

};
module.exports.add = add;
module.exports.list = list;
