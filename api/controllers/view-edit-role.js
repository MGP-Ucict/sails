module.exports = {
friendlyName: "Edit role",
descripltion: "Edit role",
inputs: {
	id: {
		description: "id",
		type: "number",
		required: true
	}
},
exits:{
	success:{
		viewTemplatePath: 'pages/edit-role'
	},
	notFound:{
		description: "No role with specified id was found in the database",
		responseType: "notFound"
	}
},
fn: async function (inputs, exits) {
	var id = inputs.id;
	var role = await Role.findOne({id: inputs.id});
	var routes = await Route.find();
	var checked = await Role.find({id: inputs.id }).populate('routes');
	var p = JSON.parse(JSON.stringify(checked));
	if(p.length)	
		var r = p[0].routes;
	else 
		r = [p];
	var i = 0;
	var ra=[];
	for(let del of r){
		ra[i] = del.id;
		i++;
}

	if(!role) { return exits.notFound();}
    return exits.success({id: id, name: role.name, isActive: role.isActive, routes: routes, checked: ra});

  }
};