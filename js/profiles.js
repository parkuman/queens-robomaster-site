// Use ES6 template literal feature to dynamically include profile section

let profiles = [
  {
    name: "Griffin Logan",
    image_path: "images/profile_photos/GriffinLogan.JPG",
    team: "Executive",
    position: "Captain",
    email: "griffin.logan@queensu.ca",
    linkedin: "https://www.linkedin.com/in/griffinglogan/",
  },
  {
    name: "Parker Rowe",
    image_path: "images/profile_photos/ParkerRowe.JPG",
    team: "Executive",
    position: "Vice Captain",
    email: "parker.rowe@queensu.ca",
    linkedin: "https://www.linkedin.com/in/parker-a-rowe/",
  },
  {
    name: "Aiden Horan",
    image_path: "images/profile_photos/AidenHoran.jpg",
    team: "",
    position: "AI & Machine Vision Team Manager",
    email: "aiden.horan@queensu.ca",
    linkedin: "https://www.linkedin.com/in/aiden-horan-822ba9180/",
  },
  {
    name: "Jeffery Awobodu",
    image_path: "images/profile_photos/JeffAwobodu.jpg",
    team: "",
    position: "Embedded Systems Team Manager",
    email: "jeffery.awobodu@queensu.ca",
    linkedin: "https://www.linkedin.com/in/jeffery-awobodu-a68544141/",
  },
  {
    name: "Paul Pace",
    image_path: "images/profile_photos/PaulPace.jpg",
    team: "",
    position: "Mechanical Team Manager",
    email: "paul.pace@queensu.ca",
    linkedin: "https://www.linkedin.com/in/paulius-pace-b9840413a/",
  },
];

var profilesHTML = "";

for (i in profiles) {
  profilesHTML += profileTemplate(profiles[i]);
}

document.getElementById("profiles_container").innerHTML = profilesHTML;

// Returns an ES6 template literal (i.e. string of necessary html) for a person's profile
function profileTemplate(person) {
  let customImgStyle = `<img src="${person.image_path}" class="profile_image"/>`;
  if (person.name == "Brayden Secord") {
    customImgStyle = `<img src="${person.image_path}" style="transform:rotate(1deg);" class="profile_image"/>`;
  }
  return `
  <div class="profile_container">
    ${customImgStyle}
    <p class="profile_name">${person.name}</p>
    <p class="profile_position">${person.position}</p>
    <p class="profile_email">${person.email}</p>
    <a href="${person.linkedin}" target="_blank"><img src="images/linkedin_icon.png" class="linkedin_icon"/></a>
  </div>
  `;
}
