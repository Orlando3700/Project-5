//This line retrieves all <li> (list item) elements from the HTML 
//document and stores them in the variable myValueList. The 
//document.getElementsByTagName("LI") method returns a live 
//HTMLCollection of all the <li> elements in the document.
var myValueList = document.getElementsByTagName("LI");
//initialize i
var i;
//This starts a for loop that will iterate through each element in 
//the myValueList HTMLCollection.
for (i = 0; i < myValueList.length; i++) {
	//Inside the loop, this line creates a new <span> element using 
	//the document.createElement("span") method
  var span = document.createElement("span");
//This creates a text node with the character "×" (multiplication sign,
// represented by the Unicode \u00D7), which will be used as the 
//content for the newly created <span> element.
  var txt = document.createTextNode("\u00D7");
//This assigns the class name "close" to the newly created <span> 
//element. This class can later be used to apply CSS styles or add 
//event listeners for behavior (like removing the list item)
  span.className = "close";
//This appends the previously created text node (txt) to the span 
//element. Essentially, the "×" character will be displayed inside 
//the <span>.
  span.appendChild(txt);
//This line appends the newly created <span> element (which contains 
//the "×" character) as a child element of the current <li> element 
//(myValueList[i]).
//As a result, each <li> element in the list will have a close button
// (the "×" symbol) attached to it.
  myValueList[i].appendChild(span);
}

//This line selects all elements in the document that have the class 
//name "close". It stores the collection of these elements in the 
//variable close. The document.getElementsByClassName("close") 
//method returns a live HTMLCollection of all elements with the 
//class "close".
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
//This line assigns an onclick event handler to each element in the 
//close collection (each "×" span created previously).
//The event handler function will be executed when the user clicks 
//on any of these elements.
  close[i].onclick = function() {
//Inside the onclick handler, this refers to the specific "×" span that was clicked.
//this.parentElement gets the parent element of the clicked span, which in this case is the <li> element that contains the "×" button.
//The parent element (div) is stored in the div variable.
    var div = this.parentElement;
//This line sets the display property of the parent element (div) 
//to "none", which hides the <li> element from the page when the 
//"×" button is clicked.
//Essentially, this removes the <li> element from the visible list 
//when the close button is clicked.
    div.style.display = "none";
  }
}

//This line selects the first <ul> element (unordered list) in the 
//document and stores it in the variable list.
var list = document.querySelector('ul');
//This line adds an event listener to the <ul> element that listens 
//for click events. The event parameter will capture information 
//about the click which is the target element
list.addEventListener('click', function(event) {
//Inside the event listener function, the code checks if the target 
//of the click event (the element that was actually clicked) is an 
//<li> element.
//event.target refers to the element that was clicked, and 
//event.target.tagName returns its tag name 'LI'.
  if (event.target.tagName === 'LI') {
//If the clicked element is an <li>, this line toggles the 'checked' 
//class on that <li> element.
//classList.toggle('checked') adds the "checked" class if it’s not 
//already present, and removes it if it is. This could be used for 
//visual effects such as crossing out the item based on the presence 
//of the "checked" class.
    event.target.classList.toggle('checked');
  }
//In JavaScript, when an event (like a click) happens on an element, 
//it propagates through the DOM (Document Object Model) in two 
//possible phases:
//Capturing (true): The event starts from the outermost element and 
//moves inward to the target element (the element that was actually 
//clicked).
//Bubbling (false): The event starts at the target element 
//(where the event happened) and bubbles up to the outer elements.
//By setting the third argument to false, you are telling the browser
// to use bubbling. This means that the event handler will be 
//triggered when the event bubbles up from the <li> element 
//(or any other element inside the <ul>) to the <ul> element itself.
//In your case, the bubbling phase is what you want because you're 
//interested in detecting when an <li> inside the <ul> is clicked. 
//The event listener will respond to the click on the <ul> itself, 
//and you check if the clicked target is an <li> to decide what to 
//do next.
}, false);

//This defines a new function named newElement. This function is 
//intended to create a new task item in a to-do list when called.
//(when the user submits a new task through an input field).
function newElement() {
//This creates a new <li> (list item) element. This is the 
//HTML element that will represent a new task in the list.
  var li = document.createElement("li");
//This retrieves the value (text) from an input field with the ID 
//myInput. The value property gives the text that the user has 
//entered into the input box. This is the task description that 
//will be added to the list.
  var inputValue = document.getElementById("myInput").value;
//This creates a text node containing the task text (inputValue). 
//A text node is a DOM object that represents raw text content, 
//which will be inserted into the <li> element.
  var t = document.createTextNode(inputValue);
//This appends the created text node (t) to the <li> element (li). 
//So now, the <li> will contain the text of the new task.
  li.appendChild(t);
//This checks if the user has entered anything in the input field. 
//If the input is empty (i.e., inputValue === ''), it shows an alert
// saying "You have to write a new task".
  if (inputValue === '') {
    alert("You have to write a new task");
  } else {
	//This appends the newly created <li> (containing the task) to 
	//an existing element with the ID "myTasks". This is where the 
	//new task will appear in the list.
    document.getElementById("myTasks").appendChild(li);
  }
//After adding the task to the list, this line clears the input 
//field (myInput) by setting its value to an empty string (""). 
//This makes the input field ready for the next task.
  document.getElementById("myInput").value = "";

//This creates a new <span> element, which will serve as the 
//"close" button (the "×" symbol) next to each task item.
  var span = document.createElement("span");
//This creates a text node containing the "×" character 
//(\u00D7 is its Unicode representation), which will be the close 
//button symbol.
  var txt = document.createTextNode("\u00D7");
//This assigns the class "close" to the span. The class can be used 
//to style the button with CSS (e.g., making it look like a small 
//"×" button). The "close" class is likely already defined in your CSS.
  span.className = "close";
//This appends the text node (the "×" character) to the <span>. 
//So, the <span> element will now contain the "×" symbol.
  span.appendChild(txt);
//This appends the <span> (with the "×") as a child of the <li>. 
//Now, each list item will have a "×" close button next to the task.
  li.appendChild(span);

//This is a loop that iterates through all elements with 
//the class "close". This ensures that the close button 
//functionality is applied to all such buttons.
  for (i = 0; i < close.length; i++) {
	//This assigns an onclick event handler to each of the close 
	//buttons (the "×" elements). When a close button is clicked, 
	//the function inside this block will run.
    close[i].onclick = function() {
	//Inside the event handler, this refers to the specific close 
	//button that was clicked. this.parentElement refers to the 
	//parent of the close button, which is the <li> element 
	//(the task item). This is stored in the div variable.
      var div = this.parentElement;
//This line hides the <li> element by setting its display style to 
//"none". This removes the task item from the visible list when 
//the user clicks the close button.
      div.style.display = "none";
    }
  }
}
//This defines a new function named removeAll, which will remove all 
//the tasks from the list.
function removeAll(){
	//This retrieves all <ul> elements in the document and stores 
	//them in the lst variable. Since you probably only have one 
	//<ul> for your task list, lst[0] will refer to that specific list.
  var lst = document.getElementsByTagName("ul");
//This clears the contents of the first <ul> element (removes 
//all the <li> items). It does this by setting the innerHTML of the 
//<ul> to an empty string, which effectively removes everything 
//inside it (all tasks).
    lst[0].innerHTML = "";
}

