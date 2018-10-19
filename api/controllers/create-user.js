module.exports = {
friendlyName: 'Create user',
description: 'Create user',
inputs:{
	name:{
		description: "The name of the user",
		example:     "name",
		required: true
	},
	isActive:{
		description: "Is active",
		type: 'number'
	},
	roles:{
		description: "Roles",
		type: 'ref'
	}
},
fn: async function (inputs, exits){

var name = inputs.name;
var isActive = inputs.isActive;

var ra = inputs.roles;

var user = await User.create(Object.assign({ name: name},{isActive: isActive})).fetch();
var uid = user.id;

await User.addToCollection(uid, 'roles').members( ra);

return exits.success();

}
};