var counter = 0;

//vanilla JS code, adds event listener to image, 
/*var elem = document.getElementById('catpic');
elem.addEventListener('click',function(){
  counter++;
  document.getElementById('tally').innerHTML = counter;
  console.log(counter);
}); */

//jQuery code
//adds click listener to image
$('#catpic').click(function(e){
  counter++;
  $('#tally').text(counter);
  console.log(counter);
});
