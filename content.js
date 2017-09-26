toggle();

function toggle(){
  var scores = document.getElementsByClassName('score-strip-list-container')[0];

  if (scores && scores.style.display == 'none') {
    scores.style.display = 'block';
  } else if (scores) {
    scores.style.display = 'none';
  };
}
