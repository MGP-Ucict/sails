/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},
  "createRoute":{"verb":"POST","url":"/api/v1/route/create-route","args":["name"]},
  "updateRoute":{"verb":"PUT","url":"/api/v1/update-route:id","args":["id","name"]},
  "deleteRoute":{"verb":"DELETE","url":"/api/v1/delete-route:id","args":["id"]},
  "createRole":{"verb":"POST","url":"/api/v1/create-role","args":["name", "isActive", "routes"]},
  "editRole":{"verb":"PUT","url":"/api/v1/update-role:id","args":["id","name", "isActive", "routes"]},
  "deleteRole":{"verb":"DELETE","url":"/api/v1/delete-role:id","args":["id"]},
  "createUser":{"verb":"POST","url":"/api/v1/create-user","args":["name", "isActive", "roles"]},
  "editUser":{"verb":"PUT","url":"/api/v1/update-user:id","args":["id","name", "isActive", "roles"]},
  "deleteUser":{"verb":"DELETE","url":"/api/v1/delete-user:id","args":["id"]},
  },
  /* eslint-enable */
});
