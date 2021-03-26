var lyric;
lyric = "maybe";

function callMe() {
  return lyric;
  console.log("maybe");
}

thisIsCrazy();

function thisIsCrazy() {
  console.log("hey!!!")
}


function sayMyName() {
  // fix the code in here:
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
