
//Author: Jayven Cachola

$(function () {
    // Hide order details
    $(".testing-js").hide();
    $(".display-order").hide();

    // Handles order button click events
    orderButtonHandler = function (event) {

      // Check if notes contain vegan
      var notes = $("#notes").val();
      vegan = notes.toLowerCase();
      if (vegan.includes("vegan")) {
        alert("Warning!! Cheesecakes contain dairy.");
        return;
      }
      // Check if topping is selected and get order details
      var toppingVal = $("input[name=topping]:checked").val();
      if (toppingVal != undefined) {

        //Hide order form and show order details
        $(".hide-on-click").hide();
        $(".display-order").show();
        $("p#order-details.display-order").text("You ordered " + $("#toppingnumber").val()
          + " " + toppingVal + " cheesecake(s).");
        // Check if notes need to be added to the order details
        if (notes != "") {
          $("p#order-notes.display-order").text("Notes: " + notes);
        }

      } else {
        // Make sure user selects a flavor
        alert("Please select a flavor.");
      }
    }

    var option = "Jan";
    // Handles dropdown click events
    dropdownClickHandler = function (event) {
      option = $(this).text();
      $("#h3-button").text(option);

      //Update past order details to JSON object
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/orders",
        // Update list if post is successful
        success: function(response) {
          var orderList = $("#orders-list");
          // Remove any existing list items
          orderList.empty(); 
          $.each(response, function(index, order) {
            var orderItem = $("<li>").text(order.quantity + " " + order.topping);
            // Append the new list item to the list
            orderList.append(orderItem); 
          });
        },
        error: function(xhr, status, error) {
          console.log("Error: " + error);
        }
      });
    }

    // Handles dropdown hover events
    dropdownHoverHandler = function (event) {
      $("#h3-button").text("Select Month");
    }

    // Handles dropdown leave events
    dropdownLeaveHandler = function (event) {
      $("#h3-button").text(option);
    }
    // Add event listener to order button and dropdown options
    $("#order-button").on("click", orderButtonHandler);
    $("a.dropdown-option").on("click", dropdownClickHandler);
    $("#h3-button").on("mouseover", dropdownHoverHandler);
    $("#h3-button").on("mouseleave", dropdownLeaveHandler);
    $("#dropdown-content").on("mouseover", dropdownHoverHandler);
    $("#dropdown-content").on("mouseleave", dropdownLeaveHandler);

    
    
  });