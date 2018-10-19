module.exports = {


friendlyName: 'Update route',
descripltion: "Update route",
inputs:{
	id: {
			description: "id",
			type: "number",
			required: true
		},
	name:{
		description: "The name of the route",
		example:     "name",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-route'
	},
	notFound: {
        description: 'No route with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var name = inputs.name;
var id = inputs.id;//this.req.param('id');
var route = await Route.findOne({ id: id });
if (!route) { return exits.notFound(); }
await Route.update({id: route.id})
.set({
	name: name
	});
return exits.success({id: id, name: name});

}
};