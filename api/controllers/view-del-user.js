module.exports = {
friendlyName: "Delete user",
description: "Delete user",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/delete-user'
	},
	notFound:{
		description: "No user with specified id was found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var user = await User.findOne({id: inputs.id});
	if(!user) { return exits.notFound();}
    return exits.success({id: user.id, name: user.name});

  }

};