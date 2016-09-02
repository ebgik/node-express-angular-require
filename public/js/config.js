require.config({
	paths:{
		"jquery":"../vendor/jquery/dist/jquery",
    "bootstrap":"../vendor/bootstrap/dist/js/bootstrap",
		"angular":"../vendor/angular/angular",
		"angular-route":"../vendor/angular-route/angular-route",
    "main":"module/index",
		"app":"app"
	},
	shim:{
		"bootstrap":{
			deps:["jquery"]
		},
    "angular-route":{
      deps:["angular"]
    },
    "main":{
      deps:["angular"]
    },
		"app":{
			deps:[
				"angular",
        "angular-route",
        "bootstrap",
        "main"
      ]
    }


	}
});


require(["app"],function(){
	angular.bootstrap(document,["app"])
});
