import Swal from 'sweetalert2';


// Function to change background color of left side
function changeBgColor() {
  const leftside = document.querySelector(".left") as HTMLElement;
  const bgcolorInput = document.querySelector("#bgcolor") as HTMLInputElement;
  const textcolorInput = document.querySelector(
    "#textcolor"
  ) as HTMLInputElement;

  if (leftside) {
    leftside.style.backgroundColor = bgcolorInput.value;
    leftside.style.color = textcolorInput.value;
  }
}

// Function to change background color of right side
function changeColor() {
  const rightside = document.querySelector(".right") as HTMLElement;
  const rightBgColorInput = document.querySelector(
    "#r-bgcolor"
  ) as HTMLInputElement;
  const rightTextColorInput = document.querySelector(
    "#r-textcolor"
  ) as HTMLInputElement;

  if (rightside) {
    rightside.style.backgroundColor = rightBgColorInput.value;
    rightside.style.color = rightTextColorInput.value;
  }
}

// Event listeners for color change
document.querySelector("#bgcolor")?.addEventListener("change", changeBgColor);
document.querySelector("#textcolor")?.addEventListener("change", changeBgColor);
document.querySelector("#r-bgcolor")?.addEventListener("change", changeColor);
document.querySelector("#r-textcolor")?.addEventListener("change", changeColor);

document.addEventListener("DOMContentLoaded", () => {
  let resumeForm = document.getElementById("resumeForm");

  resumeForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    // Collect input elements
    let fNameElem = document.getElementById("fname") as HTMLInputElement;
    let contactElem = document.getElementById("contact") as HTMLInputElement;
    let emailElem = document.getElementById("email") as HTMLInputElement;
    let addressElem = document.getElementById("address") as HTMLInputElement;
    let yearElem = document.getElementById("year") as HTMLInputElement;
    let fieldElem = document.getElementById("field") as HTMLInputElement;
    let instituteElem = document.getElementById(
      "institute"
    ) as HTMLInputElement;
    let jobElem = document.getElementById("job") as HTMLInputElement;
    let compElem = document.getElementById("comp") as HTMLInputElement;
    let sdateElem = document.getElementById("sdate") as HTMLInputElement;
    let edateElem = document.getElementById("edate") as HTMLInputElement;
    let skillElem = document.getElementById("skill") as HTMLInputElement;
    let objectiveElem = document.getElementById(
      "objective"
    ) as HTMLTextAreaElement;
    let picElem = document.getElementById("profile-pic") as HTMLInputElement;
    let languageElem = document.getElementById("language") as HTMLInputElement;
    let professionElem = document.getElementById(
      "profession"
    ) as HTMLInputElement;
    let gradeElem = document.getElementById("grade") as HTMLInputElement;
    let workElem = document.getElementById("work") as HTMLInputElement;

    // Check if all elements are present
    if (
      fNameElem &&
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
      objectiveElem &&
      picElem &&
      languageElem &&
      professionElem &&
      gradeElem &&
      workElem
    ) {
      const fName = fNameElem.value;
      const contact = contactElem.value;
      const email = emailElem.value;
      const address = addressElem.value;
      const year = yearElem.value;
      const field = fieldElem.value;
      const institute = instituteElem.value;
      const job = jobElem.value;
      const comp = compElem.value;
      const sdate = sdateElem.value;
      const edate = edateElem.value;
      const skill = skillElem.value;
      const objective = objectiveElem.value;
      const language = languageElem.value;
      const profession = professionElem.value;
      const grade = gradeElem.value;
      const work = workElem.value;
      const profPic = picElem.files?.[0];
      const profPicURL = profPic ? URL.createObjectURL(profPic) : "";

      let resumeOutput = `
        <div class="left">
        <p>Dynamic Resume Builder</p>
        <div class="resume-head smallScreen">
          <h1 class="name">${fName}</h1>
          <p class="designation">${profession}</p>
        </div>
        <div class="resume-logo">
          ${profPicURL ? `<img src="${profPicURL}" alt="logo">` : ""}
        </div>
        <div class="resume-left-info">
          <div class="contact-info mobScreen">
            <h1>Contact Me</h1>
            <div class="contact-me">
              <i class="fas fa-phone contact-icon"></i>
              <p>${contact}</p>
            </div>
            <div class="contact-me">
              <i class="fas fa-envelope contact-icon"></i>
              <p>${email}</p>
            </div>
            <div class="contact-me">
              <i class="fas fa-location-dot contact-icon"></i>
              <p>
                ${address}
              </p>
            </div>
          </div>
          <h1>Objective</h1>
          <p class="object-para">
          ${objective}
          </p>

          <div class="contact-info webScreen">
            <h1>Contact Me</h1>
            <div class="contact-me">
              <i class="fas fa-phone contact-icon"></i>
              <p>${contact}</p>
            </div>
            <div class="contact-me">
              <i class="fas fa-envelope contact-icon"></i>
              <p>${email}</p>
            </div>
            <div class="contact-me">
              <i class="fas fa-location-dot contact-icon"></i>
              <p>
              ${address}
              </p>
            </div>
          </div>
          <div class="language webScreen">
            <h1>Language</h1>
            <p>${language}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="resume-head webScreen">
          <h1 class="name">${fName}</h1>
          <p class="designation">${profession}</p>
        </div>
        <div class="professional-info">
          <div class="resume-education prof-info">
            <h1>Education</h1>
            <p>${year}</p>
            <h2>${institute}</h2>
            <h3>${field}</h3>
            <p>${grade}</p>
          </div>
          <div class="resume-experience prof-info">
            <h1>Experience</h1>
            <p>${sdate} - ${edate}</p>
            <h2>${job}</h2>
            <h3>${comp}</h3>
            <ul>
              <li class="work">
                ${work}
              </li>
            </ul>
          </div>
          <div class="resume-skill prof-info">
            <h1>Skills</h1>

            <h2>${skill}</h2>
          </div>
          <div class="language mobScreen">
            <h1>Language</h1>
            <p>${language}</p>
          </div>
        </div>
      </div>
          `;

      const resumeOutputElem = document.getElementById("resume");
      if (resumeOutputElem) {
        resumeOutputElem.innerHTML = resumeOutput;
        resumeOutputElem.style.border =  "5px double black"
      } else {
        alert("Resume output element is missing.");
      }
    } else {
      alert("One or more input elements are missing.");
    }
  });
});
