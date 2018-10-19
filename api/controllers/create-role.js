module.exports = {
friendlyName: 'Create role',
descripltion: 'Create role',
inputs:{
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
fn: async function (inputs, exits){

var name = inputs.name;
var isActive = inputs.isActive;

var ra = [];
var i=0;

sails.log.info(inputs.routes +"\n");
for(let ro of inputs.routes){
sails.log.info("i: ");
sails.log.info(i+" ,");

sails.log.info(ro+"\n");

	ra[i] = ro;
	i++;

}
var role = await Role.create(Object.assign({ name: name},{isActive: isActive})).fetch();
var rid = role.id;
//sails.log.info( rid );
//await Role.addToCollection(12, 'routes',1);
await Role.addToCollection(rid, 'routes').members( ra);
sails.log.info("r: ");
sails.log.info(ra);
return exits.success();

}
};
