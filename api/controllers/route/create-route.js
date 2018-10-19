module.exports = {
friendlyName: 'Create route',
descripltion: 'Create route',
inputs:{
	name:{
		description: "The name of the route",
		example:     "name",
		required: true
	}
},
fn: async function (inputs, exits){

var name = inputs.name;
await Route.create(Object.assign({ name: name},{}));
return exits.success();

}
};