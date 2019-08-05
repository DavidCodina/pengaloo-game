$(function(){
  setTimeout( function(){
    $('html, body').animate({
      scrollTop: $("#hr1").offset().top + 5
    }, 500);
  }, 1000);


  /* ===========================================================================
                          $( ".penguin" ).draggable()
  =========================================================================== */


  $( ".penguin" ).draggable({
    drag: function(){
      //I have to set it here, too otherwise jQuery UI tries to go back to default.
      $(this).css({
        "transform":"scale(1.25)"
      });
    }
  })


  .on('mousedown', function(){
    $(this).css({
      "transform": "scale(1.25)",
      "transition": "transform .15s, box-shadow .15s",
      "box-shadow": "0px 3px rgb(180,180,180), 0px 3.5px rgba(50,50,50,0.75), -4px 7px 2px rgba(0,0,0,0.5)"
    });
  })


  .on('mouseup', function(){
    $(this).css({
      "transform": "scale(1)",
      "transition": "transform .15s, box-shadow .15s",
      "box-shadow": "0px 3px rgb(180,180,180), 0px 3.5px rgba(50,50,50,0.75), -2px 5px 2px rgba(0,0,0,0.5)"
    });
  });


  /* ===========================================================================
                          $( ".egg" ).draggable()
  =========================================================================== */


  $( ".egg" ).draggable({
    drag: function(){
      //$(this).css({ "transform":"translate(0%, 0%)" });
    }
  });


  /* ===========================================================================
                          randomize_egg_placement()
  =========================================================================== */


  function randomize_egg_placement(){
    $( ".egg" ).css("display", "block");

    var eggs         = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];
    var used_squares = new Set();


    for (var i = 0; i < eggs.length; i++) {
      var selector         = "#egg"    + eggs[i];
      var random_square_id = "#square" + Math.floor((Math.random() * 12) + 1);


      while ( used_squares.has(random_square_id) ) {
        random_square_id = "#square" + Math.floor((Math.random() * 12) + 1);
      }

      used_squares.add(random_square_id);


      $(selector)
        .appendTo(random_square_id)

        //Initially I tried to position the eggs and penguins using top, left, and transform: translate.
        //However, this caused styling conflicts.
        //Draggables cann use position() even though it's not listed in the Draggable docs page.
        .position({
          my: "center",
          at: "center",
          of: random_square_id
        });
    } //End of for loop
  }//End of function


  /* ===========================================================================
                                place_penguins()
  =========================================================================== */


  function place_penguins(){
    $(".penguin").css("display", "block");

    //I don't actually need this array, but I prefer running my loop from 0.s
    var penguins         = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12];

    for (var i = 0; i < penguins.length; i++) {
      var selector  = "#penguin" + penguins[i];
      var target    = "#square"  + penguins[i];

      $(selector)
        .appendTo(target)
        .position({
          my: "center",
          at: "center",
          of: target
        });
    } //End of for loop
  } //End of function


  /* ===========================================================================
                                roll_dice()
  =========================================================================== */


  function roll_dice(){
    var die1 = Math.floor((Math.random() * 6) + 1);
    var die2 = Math.floor((Math.random() * 6) + 1);


    switch (die1) {
      case 1: $( "#die1" ).css("background-color", "red");          break;
      case 2: $( "#die1" ).css("background-color", "orange");       break;
      case 3: $( "#die1" ).css("background-color", "yellow");       break;
      case 4: $( "#die1" ).css("background-color", "rgb(0,200,0)"); break;
      case 5: $( "#die1" ).css("background-color", "#61DAFB");      break;
      case 6: $( "#die1" ).css("background-color", "violet");       break;
    }

    switch (die2) {
      case 1: $( "#die2" ).css("background-color", "red");          break;
      case 2: $( "#die2" ).css("background-color", "orange");       break;
      case 3: $( "#die2" ).css("background-color", "yellow");       break;
      case 4: $( "#die2" ).css("background-color", "rgb(0,200,0)"); break;
      case 5: $( "#die2" ).css("background-color", "#61DAFB");      break;
      case 6: $( "#die2" ).css("background-color", "violet");       break;
    }
  }


  $( "#set-board-button" ).on('click', function(){
    $(".penguin").css("display", "none");
    randomize_egg_placement();
    setTimeout( place_penguins, 2500);
  });


  $( "#dice-roll-button" ).on('click', function(){
    roll_dice();
    setTimeout( roll_dice, 250);
    setTimeout( roll_dice, 500);
    setTimeout( roll_dice, 750);
    setTimeout( roll_dice, 1000);
    setTimeout( roll_dice, 1250);
    setTimeout( roll_dice, 1500);
    setTimeout( roll_dice, 1750);
    setTimeout( roll_dice, 2000);
  });
});
