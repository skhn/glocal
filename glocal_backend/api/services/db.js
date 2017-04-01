

module.exports = {
	dbPath: function () {
		var knex = require('knex')({
			client: 'oracledb',
			connection: {
				user : 'khan',
				password : 'Oracledb',
				connectString:  'oracle.cise.ufl.edu:1521/orcl'
			}
		});
	}
}
