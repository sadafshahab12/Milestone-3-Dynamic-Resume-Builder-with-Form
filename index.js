var resumeForm = document.getElementById("resumeForm");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var fNameElem = document.getElementById("fname");
    var contactElem = document.getElementById("contact");
    var emailElem = document.getElementById("email");
    var addressElem = document.getElementById("address");
    var yearElem = document.getElementById("year");
    var fieldElem = document.getElementById("field");
    var instituteElem = document.getElementById("institute");
    var jobElem = document.getElementById("job");
    var compElem = document.getElementById("comp");
    var sdateElem = document.getElementById("sdate");
    var edateElem = document.getElementById("edate");
    var skillElem = document.getElementById("skill");
    var objectiveElem = document.getElementById("objective");
    if (fNameElem &&
        contactElem &&
        emailElem &&
        addressElem &&
        yearElem &&
        fieldElem &&
        instituteElem &&
        jobElem &&
        compElem &&
        sdateElem &&
        edateElem &&
        skillElem &&
        objectiveElem) {
        var fName = fNameElem.value;
        var contact = contactElem.value;
        var email = emailElem.value;
        var address = addressElem.value;
        var year = yearElem.value;
        var field = fieldElem.value;
        var institute = instituteElem.value;
        var job = jobElem.value;
        var comp = compElem.value;
        var sdate = sdateElem.value;
        var edate = edateElem.value;
        var skill = skillElem.value;
        var objective = objectiveElem.value;
        var resumeOutput = "\n      <div class=\"left\">\n        <h1>Dynamic Resume</h1>\n\n        <div class=\"objective\">\n          <h3>Objective</h3>\n          <p> ".concat(objective, "</p>\n        </div>\n        <div class = \"social\">\n        <div class=\"l-email\">\n          <i class=\"fa-solid fa-envelope\"></i>\n          <p>").concat(email, "</p>\n        </div>\n        <div class=\"l-contact\">\n          <i class=\"fa-solid fa-phone\"></i>\n          <p>").concat(contact, "</p>\n        </div>\n        <div class=\"l-address\">\n          <i class=\"fa-solid fa-location-dot\"></i>\n          <p>").concat(address, "</p>\n        </div>\n        </div>\n      </div>\n      <div class=\"right\">\n        <h1 class=\"name\">").concat(fName, "</h1>\n        <div class=\"email\">\n          <i class=\"fa-solid fa-envelope\"></i>\n          <p>").concat(email, "</p>\n        </div>\n        <div class=\"contact\">\n          <i class=\"fa-solid fa-phone\"></i>\n          <p>").concat(contact, "</p>\n        </div>\n        <div class=\"address\">\n          <i class=\"fa-solid fa-location-dot\"></i>\n          <p>").concat(address, "</p>\n        </div>\n\n        <hr />\n\n        <div class=\"edu\">\n          <h3>Education</h3>\n          <p>").concat(year, "</p>\n          <p>").concat(field, "</p>\n          <p>").concat(institute, "</p>\n        </div>\n        <div class=\"exp\">\n          <h3>Experience</h3>\n          <p>").concat(job, "</p>\n          <p>").concat(comp, "</p>\n          <p>Start: ").concat(sdate, "</p>\n          <p>End: ").concat(edate, "</p>\n        </div>\n        <div class=\"skill\">\n          <h3>Skill</h3>\n          <p class=\"u-skill\">").concat(skill, "</p>\n        </div>\n      </div>\n    ");
        var resumeOutputElem = document.getElementById("resume");
        if (resumeOutputElem) {
            resumeOutputElem.innerHTML = resumeOutput;
        }
        else {
            alert("Some Resume Output Element are missing");
        }
    }
    else {
        alert("one or more elements are missing.");
    }
});
