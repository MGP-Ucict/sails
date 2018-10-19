module.exports = {
friendlyName: "Edit user",
description: "Edit user",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-user'
	},
	notFound:{
		description: "No user with specified id was found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var id = inputs.id;
	var user = await User.findOne({id: inputs.id});
	var roles = await Role.find();
	var checked = await User.find({id: inputs.id }).populate('roles');
	var p = JSON.parse(JSON.stringify(checked));
		
	var r = p[0].roles;
	
	var i = 0;
	var ra=[];
	for(let del of r){
		ra[i] = del.id;
		i++;
}

	if(!user) { return exits.notFound();}
    return exits.success({id: id, name: user.name, isActive: user.isActive, roles: roles, checked: ra});

  }
};