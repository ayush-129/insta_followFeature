var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var remFriend = document.querySelector("#remove");

let check = 0;

// Function to handle adding friend
function addFriendHandler() {
  if (check == 0) {
    isStatus.innerHTML = "Friend";
    isStatus.style.color = "green";
    addFriend.innerHTML = "Following";
    check = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    addFriend.innerHTML = "Unfollow";
    check = 0;
  }
}

// Add event listener for clicking on addFriend button
addFriend.addEventListener("click", addFriendHandler);

// Add event listener for clicking on remFriend button
remFriend.addEventListener("click", function () {
  isStatus.innerHTML = "User Not Found";
  isStatus.style.color = "red";
  //   var addButtonContainer = addFriend.parentNode;
  addFriend.remove(); // Remove the entire button
  remFriend.innerHTML = "Blocked";
});
