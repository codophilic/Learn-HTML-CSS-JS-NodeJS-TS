// const h1ElementNode=document.getElementById("header1id")
// const divElementNode=document.getElementById("myDiv")

// console.log(h1ElementNode.nodeName)
// console.log(divElementNode.nodeName)

// console.log(h1ElementNode.nodeType)
// console.log(divElementNode.nodeType)

// const childElementsOfDiv=divElementNode.childNodes

// childElementsOfDiv.forEach(i=>{
//     console.log(i.nodeName+" "+i.nodeType+" "+i.nodeValue)
// }
// )

// let divGrandParentvar = document.getElementById('grandParent');
// let divParentvar = document.getElementById('parent');
// let Pchildvar = document.getElementById('child');
// let aDescendantvar = document.getElementById('descendant');

// // Parent-Child relationship
// console.log(divParentvar.parentElement); // Outputs: <div id="grandParent">
// console.log(Pchildvar.parentElement);  // Outputs: <div id="parent">

// // Descendant and Ancestor
// console.log(aDescendantvar.closest('div')); // Outputs: <div id="parent"> (first matching ancestor)
// console.log(divGrandParentvar.contains(aDescendantvar)); // Outputs: true (because descendant is inside grandParent)

// // Direct child access
// console.log(divParentvar.children); // Outputs: [<p id="child">This is a paragraph...</p>]

// // Navigating ancestors and descendants
// console.log(Pchildvar.parentElement); // Outputs: <div id="parent"> (child's direct parent)
// console.log(divParentvar.children[0]);  // Outputs: <p id="child"> (parent's direct child)

// // Check if the parent is an ancestor of the link
// console.log(divParentvar.contains(aDescendantvar)); // Outputs: true


//Traversing in DOM

let parentDiv = document.getElementById("parentDiv");
console.log(parentDiv)
console.log(parentDiv.childNodes);   // NodeList(9) [text, p#first-child, text, comment, text, span#second-child, text, ul, text]
console.log(parentDiv.childNodes.length);   // 9
console.log(parentDiv.childNodes[3]);   // <!-- This is my Comment --> (Accessing 4th element in the list , it is 0 based index)
console.log(parentDiv.children);     // HTMLCollection(3) [p#first-child, span#second-child, ul]
console.log(parentDiv.children.length);     // 3
console.log(parentDiv.children[2]);     // <ul>...</ul> (Accessing 3th element in the list , it is 0 based index)
console.log(parentDiv.children[2].children[2]);     
console.log(parentDiv.children[2].children[2].textContent);     //              item3
console.log(parentDiv.firstChild);        // #text
console.log(parentDiv.firstElementChild); // <p id="first-child">
console.log(parentDiv.lastChild);         // #text
console.log(parentDiv.lastElementChild);  // <ul>...</ul>