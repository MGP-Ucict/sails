module.exports = {
friendlyName: "List users",
description: "List users",
inputs: {
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-users'
	},
	notFound:{
		description: "No users found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var users = await User.find();
	var rights = await SeederService.hasAccessPerm(this.me);
sails.log.info(rights);
	if(!users) { return exits.notFound();}
    return exits.success({users: users, rights: rights});

  }

};
