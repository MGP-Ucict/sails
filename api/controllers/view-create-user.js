module.exports = {
friendlyName: "Create user",
descripltion: "Create user",
exits:{
	success:{
		viewTemplatePath: 'pages/create-user'
	}
},
fn: async function (inputs, exits) {
	var roles = await Role.find();
    return exits.success({roles: roles});

  }
};