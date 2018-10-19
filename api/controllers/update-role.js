module.exports = {
friendlyName: 'Edit role',
descripltion: 'Edit role',
inputs:{
	id: {
		description: "id",
		type: "number",
		required: true
	},
	name:{
		description: "The name of the role",
		example:     "name",
		required: true
	},
	isActive:{
		description: "Is active",
		type: 'number'
	},
	routes:{
		description: "Routes",
		type: 'ref'
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-role'
	},
	notFound: {
        description: 'No role with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var id = inputs.id;
var name = inputs.name;
var isActive = inputs.isActive;

var ra = [];
var i=0;

for(let ro of inputs.routes){
	
		ra[i] = ro;
		i++;

}
var role1 = await Role.findOne({id: inputs.id })
var checked = await Role.find({id: inputs.id }).populate('routes');
	var p = JSON.parse(JSON.stringify(checked));
	var r = p[0].routes;
	
	var i = 0;
	var del_ra=[];
	for(let del of r){
       del_ra[i] = del.id;
		i++;
	}
if (!role1) { return exits.notFound(); }
await Role.removeFromCollection(id, 'routes').members( del_ra);
await Role.addToCollection(id, 'routes').members( ra);
await Role.update({id: id})
.set({
	name: name,
	isActive: isActive
	});
var routes = await Route.find();

return exits.success({id: id, name: role1.name, isActive: role1.isActive, routes: routes, checked: ra});

}
};