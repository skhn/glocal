/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */

/*
var knex=require('knex')(sails.config.connections.knexConnectionParameters);
var UserAccessTokenService=require("../../serviceLayer/loginService");

module.exports = function(req, res, next) {

	if ( req.headers['token'] == req.headers['tokenchk'] )

	{ return next();
	
	} else {
		
		return.res.forbidden('you are logged out');
	}
  
};

*/
