

var knex=require('knex')(sails.config.connections.knexConnectionParameters);
var services=require("../../serviceLayer/signupService");


module.exports = {

create:function(req,res){

	
services.create(req,function(err,response){
			if(err){
				console.log(err);
				return res.badRequest({
					exception:"badRequest"
				});
			}else{
				return res.created({
					message: "Entry was created"
				});
			}
		}); 

}

}


