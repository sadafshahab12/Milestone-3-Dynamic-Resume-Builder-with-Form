let resumeForm = document.getElementById("resumeForm");
resumeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  let fNameElem = document.getElementById("fname") as HTMLImageElement;
  let contactElem = document.getElementById("contact") as HTMLImageElement;
  let emailElem = document.getElementById("email") as HTMLImageElement;
  let addressElem = document.getElementById("address") as HTMLImageElement;
  let yearElem = document.getElementById("year") as HTMLImageElement;
  let fieldElem = document.getElementById("field") as HTMLImageElement;
  let instituteElem = document.getElementById("institute") as HTMLImageElement;
  let jobElem = document.getElementById("job") as HTMLImageElement;
  let compElem = document.getElementById("comp") as HTMLImageElement;
  let sdateElem = document.getElementById("sdate") as HTMLImageElement;
  let edateElem = document.getElementById("edate") as HTMLImageElement;
  let skillElem = document.getElementById("skill") as HTMLImageElement;
  let objectiveElem = document.getElementById("objective") as HTMLImageElement;
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
    objectiveElem
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

    let resumeOutput = `
      <div class="left">
        <h1>Dynamic Resume</h1>

        <div class="objective">
          <h3>Objective</h3>
          <p> ${objective}</p>
        </div>
        <div class = "social">
        <div class="l-email">
          <i class="fa-solid fa-envelope"></i>
          <p>${email}</p>
        </div>
        <div class="l-contact">
          <i class="fa-solid fa-phone"></i>
          <p>${contact}</p>
        </div>
        <div class="l-address">
          <i class="fa-solid fa-location-dot"></i>
          <p>${address}</p>
        </div>
        </div>
      </div>
      <div class="right">
        <h1 class="name">${fName}</h1>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <p>${email}</p>
        </div>
        <div class="contact">
          <i class="fa-solid fa-phone"></i>
          <p>${contact}</p>
        </div>
        <div class="address">
          <i class="fa-solid fa-location-dot"></i>
          <p>${address}</p>
        </div>

        <hr />

        <div class="edu">
          <h3>Education</h3>
          <p>${year}</p>
          <p>${field}</p>
          <p>${institute}</p>
        </div>
        <div class="exp">
          <h3>Experience</h3>
          <p>${job}</p>
          <p>${comp}</p>
          <p>Start: ${sdate}</p>
          <p>End: ${edate}</p>
        </div>
        <div class="skill">
          <h3>Skill</h3>
          <p class="u-skill">${skill}</p>
        </div>
      </div>
    `;
    const resumeOutputElem = document.getElementById("resume");
    if (resumeOutputElem) {
      resumeOutputElem.innerHTML = resumeOutput;
    } else {
      alert(`Some Resume Output Element are missing`);
    }
  } else {
    alert(`one or more elements are missing.`);
  }
});
