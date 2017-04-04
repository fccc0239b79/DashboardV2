'use strict';

var express    = require('express');
var mysql      = require('mysql');
var config     = require('./sql_config.json');
var bodyParser = require('body-parser');
var sql        = mysql.createConnection(config.mysql);
var app        = express();


// ?
/*
app.use(bodyParser.urlencoded({
    extented: false
}));
app.use(bodyParser.json());
*/
var webpage = __dirname + '/dashboard/';

// logging
app.use('/', function(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
});

// static files - change to non static
app.use('/', express.static(webpage, {
    extensions: ['html']
}));

app.listen(8080);
console.log('Server running at 8080');

/* server functions
 *
 *
 *    ####  ###### #####  #    # ###### #####     ###### #    # #    #  ####  ##### #  ####  #    #  ####
 *   #      #      #    # #    # #      #    #    #      #    # ##   # #    #   #   # #    # ##   # #
 *    ####  #####  #    # #    # #####  #    #    #####  #    # # #  # #        #   # #    # # #  #  ####
 *        # #      #####  #    # #      #####     #      #    # #  # # #        #   # #    # #  # #      #
 *   #    # #      #   #   #  #  #      #   #     #      #    # #   ## #    #   #   # #    # #   ## #    #
 *    ####  ###### #    #   ##   ###### #    #    #       ####  #    #  ####    #   #  ####  #    #  ####
 *
 *
 */
