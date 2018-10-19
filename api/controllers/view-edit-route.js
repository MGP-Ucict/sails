module.exports = {
friendlyName: "Update route",
descripltion: "Update route",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-route'
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