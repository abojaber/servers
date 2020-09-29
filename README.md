#requirement

nodejs > 10.8

#installation

`node install`

generate DB
`node_modules/.bin/sequelize db:migrate`

`node_modules/.bin/sequelize db:migrate:reset`

`node_modules/.bin/sequelize db:migrate:undo:all`

#commands

`node index.js server add`

`node index.js server list `

`node index.js server list --env Test`

`node index.js server login <serversIP>`
`node index.js login <hostname>`
`node index.js  --help`