/*
	Docs:
	https://developer.linkedin.com/docs/getting-started-js-sdk
	https://developer.linkedin.com/docs/signin-with-linkedin
*/

window.Linkedin = {
	init: function(){
		IN.Event.on(IN, "auth", Linkedin.onAuthCallback);
	},
	onAuthCallback: function(){
		IN.API.Profile("me").result(Linkedin.showUserData).error(Linkedin.onError);
	},
	showUserData: function(profiles){
		console.log(profiles);

		var member = profiles.values[0];
		var id = member.id;
		var firstName = member.firstName; 
		var lastName = member.lastName; 
		var photo = member.pictureUrl; 
		var headline = member.headline; 

		$('#result').html(''
			+ ' <img src="' + member.pictureUrl + '" \/>'
			+ '<p>' + member.firstName + ' ' + member.lastName + '</p>'
			+ '<p>' + member.headline + ' (' + member.id + ')</p>'
		);
	},
	onError: function(error) {
		console.log(error);
	}

};