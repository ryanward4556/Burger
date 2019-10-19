// The burgers.js file contains 2 event listeners
$(function () {
  // The first event listener fires when the user clicks the "Devour" button next to each burger
  $(".devourBurgerButton").on("click", function (event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newdevoured");
    let newDevourState = {
      devoured: newDevour
    };

    // Send a PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function () { location.reload() });
  });

  // The second event listener fires when the user clicks on the "submit" button after adding a new burger
  $(".newBurgerForm").on("submit", function (event) {
    event.preventDefault();
    let newBurger = {
      name: $("#newBurgerInput").val().trim()
    };

    // Send a POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () { location.reload() });
  });
});
