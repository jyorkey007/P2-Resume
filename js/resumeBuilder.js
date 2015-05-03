        /*resume bio section*/
var bio = {
	"name": "Justin Yorkey",
	"role": "Web Developer",
	"contacts": {
		"mobile": "239-443-9887",
		"email": "jyorkey87@gmail.com",
		"github": "jyorkey",
		"location": "Cape Coral, Fl, USA"
	}, 
	"welcomeMessage": "Welcome to my resume!",
	"skills": [
		"awesome!","fun!","amazing!","cool!"
		],
	"bioPic": '<img src="images/yorkey.jpg">'
}
		/*resume work section*/
var work = { 
	"jobs":	[
		{
		"employer":"Cheesecakes of the world!",
		"title": "Cheesecake eating tester",
		"workLocation": "Ithaca, NY, USA",
		"dateWorked": "1920-1965",
		"workDescription": "Taste tests cheesecakes."
		},
		{
		"employer":"Maintenance",
		"title": "Worker",
		"workLocation": "Dallas, TX, USA",
		"dateWorked": "2000-2005",
		"workDescription": "Worked maintenance in a small community"
		}
	]
}
		/*resume education section*/
var education = {
	"schools": [ 
	  {  
		"name": "Cheesecake HS",
		"schoolLocation": "Cheesecake, IL",
		"degree": "Cheesecake Eating",
		"majors": ["none"],
		"datesAttended": 1995-2000,
		"url": "http://www.cheesecake.com/History-Of-Cheesecake.asp"
	  },
	],
	"onlineCourses": [
	   {
		"title": "Web Developer",
		"school": "Udacity",
		"datesAttended": 2015,
		"url": "http://www.udacity.com/"
	   }
	 ]
 }

 		/*resume project section*/
var projects = {
	"projects": [
	  {
		"title": "First-Project",
		"dates": "1985-1987",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provincias intellegerem nos caelo consistat, admissum initia aliqua amentur dicent quadam. Facimus sempiternum. Errore cursu quaeritur enim succumbere ex forensibus situm filio, contereret veriusque modice aristippus sententia perveniri animadvertat, constituto aptissimum stoici etiamsi nomine procedat ipsum alii fidelissimae docet. Refugiendi greges optabilem.",	
	  	"images": 'images/yorkey.jpg'	
	  },
	  {
	  	"title": "Second-Project",
        "dates": "1990-1995",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provincias intellegerem nos caelo consistat, admissum initia aliqua amentur dicent quadam. Facimus sempiternum. Errore cursu quaeritur enim succumbere/",   
        "images": 'images/yorkey.jpg'
	  }
	]
  }

        /*formatted html section*/    
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
                        
                        /*bio*/
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", "images/yorkey.jpg");
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Welcome to my resume!");

                        

/*appending/prepending to the DOM*/
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#topContacts').append(formattedMobile)
$('#topContacts').append(formattedEmail)
$('#topContacts').append(formattedGithub)
$('#topContacts').append(formattedLocation)
$('#header').append(formattedBioPic)
$('#header').append(formattedWelcomeMsg)

/*appending bio.skills section*/
 if (bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
   }
    /*displays my work section of the resume*/
var displayWork = function() {
    
    $('#workExperience').append(HTMLworkStart);
    for(job in work.jobs){
        

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dateWorked);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);

         $('.work-entry').append(formattedEmployer + formattedTitle);
         $('.work-entry').append(formattedWorkDates);
         $('.work-entry').append(formattedWorkDescription);

      }   
}
      displayWork();

      /*internationalizes my name*/
$('#main').prepend(internationalizeButton);

var myNonIntlizedName = "Justin Yorkey";
var nonIntlizedName = myNonIntlizedName;
function inName(myNonIntlizedName) {
    var finalName = nonIntlizedName;
    var name = nonIntlizedName.split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name.join(" ");
    return finalName;
};
inName(myNonIntlizedName);

/*display my project function*/
projects.display = function() {
    for (project in projects.projects){
        $('#projects').append(HTMLprojectStart);
        
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $('.project-entry:last').append(formattedDates);
        
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description); 
        $('.project-entry:last').append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for(var image in projects.projects){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[image].images);
                $('.project-entry:last').append(formattedImage)
            }
        };
        

    }
    
  }
  projects.display();

/*display my education function*/
education.display = function() {
    $('#education').append(HTMLschoolStart);
for(schools in education.schools){
    var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    $('.education-entry:last').append(formattedName);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    $('.education-entry:last').append(formattedDegree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].datesAttended);
    $('.education-entry:last').append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].schoolLocation);
    $('.education-entry:last').append(formattedLocation);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].majors);
    $('.education-entry:last').append(formattedMajor);
    
};

   $('#education').append(HTMLonlineClasses); 
   $('#education').append(HTMLschoolStart);
for(var courses in education.onlineCourses){
     
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courses].title);
    $('.education-entry:last').append(formattedOnlineTitle);

    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courses].school);
    $('.education-entry:last').append(formattedOnlineSchool);
    
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courses].datesAttended);
    $('.education-entry:last').append(formattedOnlineDates);
    
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courses].url);
    $('.education-entry:last').append(formattedOnlineURL);
}
    
    
}                
  
        education.display();
/*display map*/  
$('#mapDiv').append(googleMap);