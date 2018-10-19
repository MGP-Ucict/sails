 //api/helpers/seeder.js
module.exports = {

  friendlyName: 'Database seeder',


  description: 'Seeds in the database user, roles, permissions data. ',


  inputs: {

  },
exits: {

    success: {
      outputFriendlyName: 'Email delivery report',
      outputDescription: 'A dictionary of information about what went down.',
      outputType: {
        loggedInsteadOfSending: 'boolean'
      }
    }
},

  fn: async function (inputs, exits) {
  var role = await Role.create(Object.assign({name: 'admin', isActive: 1})).fetch();
  var roleId = role.id;
  

  var pass =  await sails.helpers.passwords.hashPassword("test");
  var user = await User.create(Object.assign({fullName: 'test', emailAddress: 'test@test.bg', password: pass, isActive: 1})).fetch();
  var userId = user.id;
        
  await  User.addToCollection(userId, 'roles').members(roleId);
sails.log.info(sails.config.routes);
  for(let r in sails.config.routes){
  
    var r_arr = r.split(" ");
    if(r_arr[0])//=="GET" || r_arr[0]=="PUT" || r_arr[0]=="POST" || r_arr[0]=="DELETE")
    {
	var name = "";
      if(r_arr[1]){
      name = r_arr[1];
	}
	else if(r_arr[0]!=="GET" && r_arr[0]!=="PUT" && r_arr[0]!=="POST" && r_arr[0]!=="DELETE"){
       name = r_arr[0];
	}
	else continue;
      var route = await Route.create(Object.assign({name: name})).fetch();
      var routeId = route.id;
       await Route.addToCollection(routeId, 'roles').members(roleId);
    }
    
  }

return exits.success();
  }

};
