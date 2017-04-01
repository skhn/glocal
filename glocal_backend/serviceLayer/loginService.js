var knex=require('knex')(sails.config.connections.knexConnectionParameters);
var tableName="USER_LOGIN_DATA";


var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream('/home/s/Documents/sglocal/glocal_backend/serviceLayer/data.txt', {flags : 'w'});
var log_stdout = process.stdout;
var md5 = require('md5');


module.exports={

	retrieve:function(params,callback) {

		var retrieveParams={};
		var dbtoken; 
		var timeQuery = 'SELECT TIME,TOKEN FROM USER_LOGIN_DATA WHERE USERNAME = '+'\''+params.username+'\'';
		var crtoken;
		var ch = 0;
		var updateTokenChk;
				
                var tokenfind = 0;

		if((params.username == null || params.username == '') && (params.password == null || params.password == '')) {
			
			console.log("Please provide Information");
		}

		if(params.username && params.password){
			retrieveParams.USERNAME=params.username;
			
			
			knex.raw(timeQuery).asCallback(function(err,response) {
		

			var checker;

			checker = function(d) { //
  			log_file.write(util.format(d) + '\n');
  
			ch = 1;

			if (ch == 1) {

				searchString = crtoken;
				fs.readFile('/home/s/Documents/sglocal/glocal_backend/serviceLayer/data.txt', function(err, content) {

    					while (ch > 0) {

    						tokenfind = content.indexOf(searchString)>-1 ? 1 : 0;

    						if (tokenfind == 1) {

 							console.log("Found...,Logging you into Glocal Main Page");
							
							knex('USER_LOGIN_DATA').where({USERNAME: params.username}).update({TOKENCHK: searchString}).asCallback(function(err,response) {}); 							

						} else { 
							
							console.log("Password Incorrect...,Forget Password?"); 
						} 

   						 ch = 0;
					}

				});			// Dont know why this is there
			}

		}

		try {
			crtoken = md5(params.username+params.password+response[0].TIME+'Glocal');
			console.log('created token = '+crtoken);  
			dbtoken = response[0].TOKEN;
			console.log('database token = '+dbtoken);
			checker(dbtoken);

		} catch(e) {

			if (e instanceof TypeError) {
				console.log("Incorrect Parameters...Try again Or Sign Up");
			}
	  	}

	});


                                            // ascallback end
		return callback(null);

		} else {
			return callback(null);
		}
			
	}
}

