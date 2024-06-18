const clickButton = document.querySelector("#click-button");
console.log(clickButton);
let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

clickButton.addEventListener("click", increaseLikes);

function increaseLikes() {
  likeCount++;
  likes.textContent = likeCount;
}
/* A click action will demonstrate the different characters in Nintendo’s classic games.
 The user will scroll through images and be able to click on the various images similar
  to Instagram and give a like. This aims to connect the characters to the user in an 
  interactive manner. A like is similar to Instagram and other social media when clicking 
  on a photo to like it and then scrolling to see another image. The user can scroll to 
  view another image of a character and then like it again. The idea to click is prompted 
  by the previous knowledge on how to navigate a similar webspace.  This action will allow
   the user to interact with the website producing a greater connection with the characters
    and the website. 
 */