module.exports = {
friendlyName: "List routes",
description: "List routes",
inputs: {
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-routes'
	},
	notFound:{
		description: "No routes found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var routes = await Route.find();
	if(!routes) { return exits.notFound();}
    return exits.success({routes: routes});

  }

};