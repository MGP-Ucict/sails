module.exports = async function (req, res, proceed) {

	var user_id = req.me.id;
	var route1 = req.path;
	var route_array = route1.split("/");
	var index = route_array.length - 1;
	if(!isNaN(route_array[ index])){
	  route_array.splice(index, 1);
	}
	var route = route_array.join('/');
	var user = await User.find({where: {id: user_id, isActive: 1}});
	if(!user.length){
		return res.forbidden();
	}
	var roles = await User.find({where: {id: user_id, isActive: 1}}).populate('roles');
	var p = JSON.parse(JSON.stringify(roles));
	var rr = p[0].roles;

	for(let r of rr){
		var role_id = r.id;
		var role = await Role.find({ where: {id: role_id, isActive: 1}});
		if(!role.length)
			continue;
		var routes =  await Role.find({ where: {id: role_id, isActive: 1}}).populate('routes');
		var p2 = JSON.parse(JSON.stringify(routes));
		var rr2 = p2[0].routes;
	
		for(let r2 of rr2){
			var name = r2.name;
			var route_array = name.split("/");
			var index = route_array.length -1;
			if(route_array[ index] == ":id"){
			  route_array.splice(index, 1);
			}
			var route_name = route_array.join('/');
			console.log("route name = "+ route_name);
			if(route_name == route){
				return proceed();
			
			}
		}
	}
    return res.forbidden();
};

  

