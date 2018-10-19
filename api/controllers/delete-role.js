module.exports = {


friendlyName: 'Delate role',
descripltion: "Delete role",
inputs:{
	id: {
			description: "id",
			type: "number",
			required: true
		},
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-roles'
	},
	notFound: {
        description: 'No role with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var name = inputs.name;
var id = inputs.id;
var checked = await Role.find({id: inputs.id }).populate('routes');
var p = JSON.parse(JSON.stringify(checked));
var r = p[0].routes;

var i = 0;
var del_ra=[];
for(let del of r){
   del_ra[i] = del.id;
	i++;
}

await Role.removeFromCollection(id, 'routes').members(del_ra);
var role = await Role.destroy({ id: id });

return exits.success();

}
};