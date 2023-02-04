

$(document).onready(function () {
    // Hide order details
    $(".testing-js").hide();
    $(".display-order").hide();

    $("#order-button").onclick(function () {

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

    });
    
    // add aditional features to dropdown menu
    var option = "Jan";
    $("a.dropdown-option").onclick(function () {
      option = $(this).text();
      $("#h3-button").text(option);
    });
    
    document.getElementById("h3-button").onmouseover = function () {
      $("#h3-button").text("Select Month");
    }
    document.getElementById("h3-button").onmouseleave = function () {
      $("#h3-button").text(option);
    }
    document.getElementById("dropdown-content").onmouseover = function () {
      $("#h3-button").text("Select Month");
    }
    document.getElementById("dropdown-content").onmouseleave = function () {
      $("#h3-button").text(option);
    }
  });