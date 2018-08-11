const inquirer = require('inquirer');
const clipboardy = require('clipboardy');

var _ = require('lodash');

var db = require('../models/index');
var template = require('../template/servers');
var questions = [
    {
        type: 'input',
        name: 'hostname',
        message: 'Enter hostname:'
    },
    {
        type: 'input',
        name: 'ip',
        message: 'Enter server IP:'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter login password',
        mask: function (input) {
            return '█' + new Array(String(input).length).join('█');
        }
    },
    {
        type: 'input',
        name: 'user',
        message: 'Type user account'

    },
    {
        type: 'list',
        name: 'env',
        choices: ['Production', 'Development', 'Test', 'Stage'],
        default: 2,
        message: 'Select Environment:'

    }
];

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

var login = function (args, options, logger) {

    where = {
        where: _.pick(args, _.identity)
    };

    db.Server.findOne(where).then(server => {

        clipboardy.writeSync('ssh ' + server.password + "@" + server.ip);
        console.log("you can past: " + server.password + "@" + server.ip)
    });

};

var list = function (option = {}) {

    where = {
        where: _.pick(option, _.identity)
    };

    db.Server.findAll(where).then(servers => {
        template.generateList(servers);
    });

};
module.exports.login = login;
module.exports.add = add;
module.exports.list = list;
