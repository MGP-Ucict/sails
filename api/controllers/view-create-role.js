module.exports = {
friendlyName: "Create role",
descripltion: "Create role",
exits:{
	success:{
		viewTemplatePath: 'pages/create-role'
	}
},
fn: async function (inputs, exits) {
	var routes = await Route.find();
    return exits.success({routes: routes});

  }
};