var kittycats = [{
  name: "Xuxa",
  picture: "img/xuxa.jpg"
},
{
  name: "Chewie",
  picture: "img/chewie.jpg"
},
{
  name: "Gato",
  picture: "img/gato.jpg"
},
{
  name: "Mittens",
  picture: "img/mittens.jpg"
},
{
  name: "Fluffy",
  picture: "img/fluffy.jpg"
}];


// //Cat 1
// var addUp1 = function() {
//   count1 += 1;
//   document.getElementById("counter1").innerHTML = "This has been clicked " + count1 + " times.";
//
// };
//
// // Attach as a listener
// document.getElementById("cat1").addEventListener("click", addUp1, false);
//
//
// //Cat 2
// var addUp2 = function() {
//   count2 += 1;
//   document.getElementById("counter2").innerHTML = "This has been clicked " + count2 + " times.";
//
// };
//
//
// // Attach as a listener
// document.getElementById("cat2").addEventListener("click", addUp2, false);

// // clear the screen for testing
// document.body.innerHTML = '';



// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {
//
//     // This is the number we're on...
//     var num = nums[i];
//
//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;
//
//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));
//
//     document.body.appendChild(elem);
// };

// Event Listner of cat menu
for (var i = 0; i < kittycats.length; i++) {

    // This is the number we're on...
    var cat = kittycats[i];
    console.log(cat) //see what objects are stored in cat variable

    // We're creating a DOM element for the cat object
    var elem = document.createElement('li');
    elem.textContent = cat.name;


    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(catCopy) {
        return function() {
            alert(catCopy.name);
        };
    })(cat));

    //Append the list elements to the 'cat_menu' div
    document.getElementById("cat_menu").appendChild(elem);
};
