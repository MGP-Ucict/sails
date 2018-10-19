module.exports = {
friendlyName: "Delete role",
descripltion: "Delete role",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/delete-role'
	},
	notFound:{
		description: "No role with specified id was found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var role = await Role.findOne({id: inputs.id});
	if(!role) { return exits.notFound();}
    return exits.success({id: role.id, name: role.name});

  }

};