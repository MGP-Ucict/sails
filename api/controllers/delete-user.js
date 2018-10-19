module.exports = {


friendlyName: 'Delete user',
description: "Delete user",
inputs:{
	id: {
			description: "id",
			type: "number",
			required: true
		},
},
exits:{
	success:{
		viewTemplatePath: 'pages/list-users'
	},
	notFound: {
        description: 'No user with the specified ID was found in the database.',
        responseType: 'notFound'
      }

  },
fn: async function (inputs, exits){

var name = inputs.name;
var id = inputs.id;
var checked = await User.find({id: inputs.id }).populate('roles');
var p = JSON.parse(JSON.stringify(checked));
var r = p[0].roles;

var i = 0;
var del_ra=[];
for(let del of r){
   del_ra[i] = del.id;
	i++;
}

await User.removeFromCollection(id, 'roles').members(del_ra);
var user = await User.destroy({ id: id });

return exits.success();

}
};