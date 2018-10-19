module.exports = {
friendlyName: 'Edit user',
descripltion: 'Edit user',
inputs:{
	id: {
		description: "id",
		type: "number",
		required: true
	},
	name:{
		description: "The name of the user",
		example:     "name",
		required: true
	},
	isActive:{
		description: "Is active",
		type: 'number'
	},
	routes:{
		description: "Roles",
		type: 'ref'
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-user'
	},
	notFound: {
        description: 'No user with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var id = inputs.id;
var name = inputs.name;
var isActive = inputs.isActive;

var ra = [];
var i=0;

for(let ro of inputs.roles){
	
		ra[i] = ro;
		i++;

}
var user1 = await User.findOne({id: inputs.id })
var checked = await User.find({id: inputs.id }).populate('roles');
	var p = JSON.parse(JSON.stringify(checked));
	var r = p[0].roles;
	
	var i = 0;
	var del_ra=[];
	for(let del of r){
       del_ra[i] = del.id;
		i++;
	}
if (!user1) { return exits.notFound(); }
await User.removeFromCollection(id, 'roles').members( del_ra);
await User.addToCollection(id, 'roles').members( ra);
await User.update({id: id})
.set({
	name: name,
	isActive: isActive
	});
var roles = await Role.find();

return exits.success({id: id, name: user1.name, isActive: user1.isActive, roles: roles, checked: ra});

}
};