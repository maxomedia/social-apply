/*
	Docs:
	https://developer.linkedin.com/docs/getting-started-js-sdk
	https://developer.linkedin.com/docs/signin-with-linkedin

	Other:
	Linkedin has limited the API Access r_fullprofile: http://stackoverflow.com/questions/29279057/accessing-r-fullprofile-after-new-linkedin-api-policy-changes
	Apply for Linkedin Program: https://developer.linkedin.com/partner-programs/apply
*/

function LIinit() { 
	console.log("linkedin initialized");
	
	IN.Event.on(IN, "auth", LIonAuthCallback);
}

function LIonAuthCallback() { 
	IN.API.Profile("me").result(LIshowUserData).error(LIonError);
}

function LIshowUserData(profiles) { 
	console.log(profiles);

	var member = profiles.values[0];

	$('#li-result').html(''
		+ ' <img src="' + member.pictureUrl + '" \/>'
		+ '<p>' + member.firstName + ' ' + member.lastName + '</p>'
		+ '<p>' + member.headline + ' (' + member.id + ')</p>'
	);
}

function LIonError(error) { 
	console.log(error);
}