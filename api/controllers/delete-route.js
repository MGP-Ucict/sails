module.exports = {


friendlyName: 'Delate route',
descripltion: "Delete route",
inputs:{
	id: {
			description: "id",
			type: "number",
			required: true
		},
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-routes'
	},
	notFound: {
        description: 'No route with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var name = inputs.name;
var id = inputs.id;
var route = await Route.destroy({ id: id });

return exits.success();

}
};