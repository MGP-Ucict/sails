 //api/helpers/seeder.js
module.exports = {

  friendlyName: 'hasPermission',


  description: 'Check if user has permissions to access a route ',


  inputs: {
id:{
		description: "The name of the role",
		example:     "name",
		required: true
	},
name:{
		description: "The name of the role",
		example:     "name",
		required: true
	},
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
   var roles = await User.find({id: inputs.id }).populate('roles');
    var p = JSON.parse(JSON.stringify(roles));
    var roles1 = p[0].roles;
        for(let r in roles1){
      if (r.hasAccess(r.id, inputs.permissions))
        return true;
      
      return false;

       }
}
};
