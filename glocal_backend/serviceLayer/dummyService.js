var knex=require('knex')(sails.config.connections.knexConnectionParameters);
var tableName="LOGIN";

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

	create:function(params,callback){
		knex(tableName).insert(params).asCallback(function(err,response){
			if(err){
				console.log(err);
				return callback({exception:error.insert.insertUnsuccessful})
			}else{
				return callback(null);
			}
		});
	},

	retrieve:function(params,callback){

		var retrieveParams={};
		if(params.username){
			retrieveParams.USERNAME=params.username;
		}

		if(params.pwd){
			retrieveParams.PWD=params.pwd;
		}

		if(params.timesu){
			retrieveParams.TIMESU=params.timesu;
		}

		if(params.token){
			retrieveParams.TOKEN=params.token;
		}

		if(params.tokenchk){
			retrieveParams.TOKENCHK=params.tokenchk;
		}

		knex(tableName).where(retrieveParams.TOKENCHK).asCallback(function(err,response){
			if(err){
				console.log(err);
				return callback({exception:error.where.whereUnsuccessful})
			}else{
				console.log(response);
				return callback(null,response);
			}
		});
	},

	update:function(query,params,callback){

		var bodyParams={};
		var tableParams={};

		//Update Parameters 
		if(params.username && params.pwd){
			bodyParams.USERNAME=params.username;
			bodyParams.PWD=params.pwd;

			services.retrieve(query,function(err,response){
			if(err){
				console.log(err);
				return res.badRequest({
					exception:"badRequest"
				});
			}else{
				return res.ok({
					classes:response,
					message:"The record was retrieved"
				});
			}
		}); 		

		}

		if(params.pwd){
			bodyParams.PWD=params.pwd;
		}

		
		queryParams.TOKENCHK=query.tokenchk;		

		// Query Parameters 
		if(query.username){
			queryParams.USERNAME=query.username;
		}

		if(query.pwd){
			queryParams.PWD=query.pwd;
		}


		//update Operation
		knex(tableName).where(retrieveParams.USERNAME).update(retrieveParams.TOKENCHK).asCallback(function(err,response){
			if(err){
				console.log(err);
				return callback({exception:error.update.updateUnsuccessful})
			}else{
				console.log(response);
				return callback(null);
			}
		});

	},

	delete:function(params,callback){

		var retrieveParams={};
		if(params.username){
			retrieveParams.USERNAME=params.username;
		}

		if(params.pwd){
			retrieveParams.PWD=params.pwd;
		}

		if(params.timesu){
			retrieveParams.TIMESU=params.timesu;
		}

		if(params.token){
			retrieveParams.TOKEN=params.token;
		}

		if(params.tokenchk){
			retrieveParams.TOKENCHK=params.tokenchk;
		}


		knex(tableName).where(retrieveParams).del().asCallback(function(err,response){
			if(err){
				console.log(err);
				return callback({exception:error.where.whereUnsuccessful})
			}else{
				console.log(response);
				return callback(null);
			}
		});
	},
}
