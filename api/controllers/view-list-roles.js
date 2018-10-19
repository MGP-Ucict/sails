module.exports = {
friendlyName: "List roles",
description: "List roles",
inputs: {
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-roles'
	},
	notFound:{
		description: "No roles found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var roles = await Role.find();
        var rights = await SeederService.hasAccessPerm(this.me);
	if(!roles) { return exits.notFound();}
    return exits.success({roles: roles, rights: rights});

  }

};
