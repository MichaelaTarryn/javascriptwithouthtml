

// con names =['Meagan','Tashriq','Charles','Sam'];
// console.log(names);
// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + names[i] + "</li>";
// }
// text += "</ul>";

// let names=[
//       'Michaela','Meagan','charles','Tashriq','Xena','Silvana'];
//   // let wrapper= document.getElementById('dy')
//   function smartpeople(){
//     document.getElementById('dy');
//  }
//  smartpeople();
  // names.forEach((item)=> {
  //     wrapper.innerHTML+=
  //     `<li>${item}</li>`
  // });


  //another way
//   var newDiv = document.createElement("div");
//   document.body.appendChild(newDiv);
//   document.body.onload = smartpeople;

// function smartpeople () { 
//   // create a new div element 
//   var newDiv = document.createElement("div"); 
//   // and give it some content 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }

names = ["name1", "name2", "name3", "name4"];
const wrapper = document.createElement('ul');
document.getElementsByTagName('body')[0].appendChild(wrapper);
function smartPeople() {
names.forEach(item => {
  var list = document.createElement('li')
  list.innerHTML += item;
  wrapper.appendChild(list);
});
}
smartPeople();