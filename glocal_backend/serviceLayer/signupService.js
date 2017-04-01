var knex=require('knex')(sails.config.connections.knexConnectionParameters);
var tableName="USER_LOGIN_DATA";

var util = require('util');
var md5 = require('md5');

// Err handling messages
var error={
	insert:{
		insertUnsuccessful:"The Insert was not successful",
		
	},
	where:{
		whereUnsuccessful:"The Where clause was unsucessful"
	},
	update:{
		updateUnsuccessful:"The Update clause was unsucessful"
	}
}

module.exports={

	create:function(req,callback){

	var ctoken

		ctoken = md5(req.body.username+req.body.password+req.body.time+'Glocal');

	var biggestAssQueryEva = 'INSERT INTO USER_LOGIN_DATA (USERNAME, TOKEN, TIME, PASSWORD, TOKENCHK)'+'\n'+' VALUES('+'\''+req.body.username+'\''+','+'\''+ctoken+'\''+','+'\''+req.body.time+'\''+','+'\''+req.body.password+'\''+','+'\''+ctoken+'\''+')';

	knex.raw(biggestAssQueryEva).asCallback(function(err,response){
			if(err){
				console.log(err);
				return callback({exception:error.insert.insertUnsuccessful})
			}else{
				return callback(null);
			}
		});

		
	}
}

