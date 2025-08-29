# Assignment Five
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 

getElementById(id):It selects a single element based on its unique id.
getElementsByClassName(className):It selects all elements that have a common class name.
querySelector(selector):It selects the first element that matches a specified CSS selector(ID,Class,tag).
querySelectorAll:Selects all elements that match a specified CSS selector.Return type like array,list etc.

2.How do you create and insert a new element into the DOM?

Answer:  
document.createElement() method is used to create a new HTML element.
appendChild(childElement) method is used to insert an element into DOM.

3.What is Event Bubbling and how does it work?

Answer: 
Event bubbling means that when an event occurs on an element, it first runs on that target element and then moves to er upper direction through its parents in the DOM tree.
       Suppose you have :  <div id="parent">
                          <button id="child">Click Me</button>
                            </div>
                        and js file: document.getElementById("parent").addEventListener("click", () => {
                          console.log("Parent clicked!");});    
                              document.getElementById("child").addEventListener("click", () => {
                               console.log("Child clicked!");  });
                        If i click in button (child) : It's first give in console "Child clicked!" then move on its parents div.        

4.What is Event Delegation in JavaScript? Why is it useful?
Answer:  
Event delegation in JavaScript is a technique where, instead of adding a separate listener to each child, 
we can attach a single event listener to a parent element to handle events on its child elements.
          Example: <ul id="myList"> <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    </ul>

5.What is the difference between preventDefault() and stopPropagation() methods?

Answer: 
preventDefault() method is used in Java script to prevent default action that the browser would normally.
stopPropagation() method is used in Java script to prevent the event from bubbling up the DOM tree.

