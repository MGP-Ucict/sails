module.exports = {
friendlyName: "Delete route",
descripltion: "Delete route",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/delete-route'
	},
	notFound:{
		description: "No route with specified id was found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var route = await Route.findOne({id: inputs.id});
	if(!route) { return exits.notFound();}
    return exits.success({id: route.id, name: route.name});

  }

};