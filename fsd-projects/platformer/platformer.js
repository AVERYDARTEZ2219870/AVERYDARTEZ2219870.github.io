$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1100,100,300,10);
createPlatform(500,700,200,10);
createPlatform(1200,500,200,10);
createPlatform(750,650,150,10);
createPlatform(1000,600,150,10);
createPlatform(920,400,150,10);
createPlatform(650,400,150,10);
createPlatform(380,400,150,10);
createPlatform(110,400,150,10);
createPlatform(0,300,100,10);
createPlatform(920,175,150,10);
createPlatform(650,175,150,10);
createPlatform(380,175,150,10);
createPlatform(110,175,150,10);
    // TODO 3 - Create Collectables
createCollectable("steve",580,650);
createCollectable("max",1280,450);
createCollectable("diamond",430,350);
createCollectable("grace",430,120)

    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
