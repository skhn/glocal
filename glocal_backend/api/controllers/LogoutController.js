/**
 * DummyController
 *
 * @description :: Server-side logic for managing dummies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 var knex=require('knex')(sails.config.connections.knexConnectionParameters);

 module.exports = {



update:function(req,res){

		var params = req.body;

knex('USER_LOGIN_DATA').where({USERNAME: params.username}).update({TOKENCHK: null}).asCallback(function(err,response) {});
console.log("you are logged out");

		return res.ok({message:"token deleted... logged out"});


		}

	}
