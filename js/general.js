console.log("general.js linked");

const $contactHighlightBackground = $("#contact-highlight-background");
const $contactIconsContainer = $("#contact-icons-container");
const showContactIconsAnimLength = 200;

var isShowingContacts = false;

$("#contact-menu-item").on("click", () => {
  if (isShowingContacts) {
    isShowingContacts = false;
    $contactHighlightBackground.css("z-index", "-1000").css("opacity", "0");
    $contactIconsContainer.animate(
      {
        left: "2px",
      },
      showContactIconsAnimLength
    );
  } else {
    isShowingContacts = true;
    $contactIconsContainer.animate(
      {
        left: "45%",
      },
      showContactIconsAnimLength
    );
    $contactHighlightBackground.css("z-index", "1000").animate(
      {
        opacity: "1.0",
      },
      showContactIconsAnimLength
    );
  }
});

$contactHighlightBackground.on("click", () => {
  isShowingContacts = false;
  $contactHighlightBackground.css("z-index", "-1000").css("opacity", "0");
  $contactIconsContainer.animate(
    {
      left: "2px",
    },
    showContactIconsAnimLength
  );
});

//
// let menuBarShowing = true;
//
//
// // document.addEventListener('mousemove', (event) => {
//   // var doc = document.documentElement;
//   // var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
//   // if (top > 375) {
//   //   toggleMenuBar()
//   // } else {
//   //   // menuBarShowing = true;
//   // }
//   // if (event.clientX / screen.height > 0.5 && menuBarShowing) {
//   //   // alert('hide shit')
//   //   hideMenuBar()
//   // }
// // })
//
// setInterval(function() {
//   alert('100')
//   var doc = document.documentElement;
//   var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
//   if (top > 0) {
//     alert('stink')
//     hideMenuBar()
//   });
// }, 250)
//
// // Hide menu bar if already shown, shows if initially hidden
// let toggleMenuBar = () => {
//   $("nav").animate({
//     top: (menuBarShowing? "+=" : "-=") + "50"
//   }, 1000, function() {
//     // Animation complete.
//   });
//   menuBarShowing = !menuBarShowing
// }
//
//
// let hideMenuBar = () => {
//   $("nav").animate({
//     top: "-=50"
//   }, 1000, function() {
//     // Animation complete.
//   });
//   menuBarShowing = false
// }
