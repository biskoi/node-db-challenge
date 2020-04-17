const knex = require('knex')
const knexfile = require('../knexfile');
const aaa = process.env.NODE_ENV || 'development';

module.exports = knex(knexfile[aaa])