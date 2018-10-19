module.exports={
hasAccessPerm:  async function (id) {
  //var user =await  User.findOne({id: id});
  var roles = await User.find({id: id }).populate('roles');
   var permissions = [];
   var i=0;
   var j= 1;
    var p =(JSON.parse(JSON.stringify(roles)));
    var roles1 = p[0].roles;
//sails.log.info(roles1);
        ///for(let r in roles1){
      
      	    //var role = await Role.find({id: r.id});
		//var rid = roles1.id;
	  //  sails.log.info("rid="+roles1[0].id);
		var checked =await  Role.find({id: roles1[0].id }).populate('routes');
		var pp= (JSON.parse(JSON.stringify(checked)));
		var routes = pp[0].routes;
	//sails.log.info(routes);
            	for(let rr in routes){
		 sails.log.info("rid="+routes[rr].name);
		// var route =await  Route.find({id: routes[rr].id});
		//if(route){
		 permissions[i] = routes[rr].name;
                 i++;	
			//}   
		j++;
		   }
		
	///	}
		
		return permissions;

	 //return ['/edit-user/:id'];
     
       

},
/*hasAcesss:  function (id, permissions) {
	var role = Role.findOne({id: id});
	    for(let p in permissions){
		if (this.hasPermission(id, p))
			return true;
		
		return false;

	     }
	   
	  },
hasPermission:  function (id, permission) {
	    var checked = await Role.find({id: id }).populate('routes');
		var p = JSON.parse(JSON.stringify(checked));
		var routes = p[0].routes;
            for(let r in routes){
		 if(r.name == permission){
			return true;	   
		   }
		}
	     return false;	
	  },
*/
}
