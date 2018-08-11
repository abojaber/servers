#!/usr/bin/env node
require('dotenv').config();

const prog = require('caporal');
const inquirer = require('inquirer');

var server = require('./lib/server');
prog
    .version('0.1.0')
    .command('server', 'Manage Your Servers')
    .argument('server_action', 'list,add or edit', /^add|list$/)
    .option('--env <env>', 'which <env> you like to list', prog.STRING)
    .action(function (args, options, logger) {
        if (args.serverAction === 'add') {
            server.add();
        }
        if (args.serverAction === 'list') {
            server.list(options);
        }
    })
    .command('user', 'Manage Server Users')
    .argument('user_action', 'list, add,delete or edit', /^add|list$/)
    .action(function (args, options, logger) {
        user.add(args);
    })
    .command('login', 'show credential for a server')
    .argument('hostname', 'Server ip to show')
    .option('--env <env>', 'type server <env> to login to', prog.STRING)
    .option('--ip <ip>', 'type server <ip> to login to', prog.STRING)
    .action(function (args, options, logger) {
        server.login(args, options, logger);
    });

;

var user = require('./lib/user');

prog.parse(process.argv);