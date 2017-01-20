/*
	Docs:
	https://dev.xing.com/plugins/login_with/new#
	https://dev.xing.com/plugins/login_with/docs
*/

var consumerkey = "e4a5cda633462237efde";

function onXingAuthLogin(response) {
	console.log("xing initialized");
	console.log(response);

	if (response.user) {
		var member = response.user;

		$('#xing-result').html(''
			+ ' <img src="' + member.photo_urls.maxi_thumb + '" \/>'
			+ '<p>' + member.display_name + '</p>'
			+ '<p>' + member.professional_experience.primary_company.title + ' (' + member.id + ')</p>'
		);

	} else if (response.error) {
		console.log(response.error);
	}
}