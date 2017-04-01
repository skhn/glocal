/**
 * DummyController
 *
 * @description :: Server-side logic for managing dummies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var services=require("../../serviceLayer/loginService");
 var knex=require('knex')(sails.config.connections.knexConnectionParameters);

 module.exports = {



	retrieve:function(req,res){

		var param=req.body;

		services.retrieve(param, function(err,response) { return res.ok({response}); }); 
	}

	
};

