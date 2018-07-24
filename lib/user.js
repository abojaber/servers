const inquirer = require('inquirer');
var db = require('../models/index');
var template = require('../template/users');
var questions = [
    {
        type: 'input',
        name: 'first_name',
        message: 'Enter First Name ...'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter Last Name ...'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Email ...'
    },
    {
        type: 'input',
        name: 'account',
        message: 'Enter login account ...'
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter Password ...'
    },
    {
        type: 'list',
        name: 'level',
        choices: ['root', 'regular'],
        default: 2,
        message: 'Enter user level ...'
    }
];

///////////////////////////////
var add = function () {

    inquirer
        .prompt(
            questions
        )
        .then(answers => {
            db.User.create(answers).then(function () {
                console.log("adding new server success: %d", answers.first_name);
            });
        });
};

var list = function (option = {}) {
    if (option === undefined) {
        where = {}
    } else {
        where = {
            where: option
        }
    }
    console.log(option);
    db.User.findAll(where).then(user => {
        template.generateList(user);
    });

};
module.exports.add = add;
module.exports.list = list;
