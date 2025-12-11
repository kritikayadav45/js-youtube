// Immediately Invoked function Expressions(IIFE)

// An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that:
// Is defined, and
// Executed immediately at the same time.
// You do not call it later.
// It runs automatically as soon as the JavaScript engine reaches it.


//.................Normal Function................


(function () {
  console.log("I run immediately!");
})();


//................Arrow Function......................


(() => {
  console.log("Arrow IIFE running...");
})();


//..............With Parameters...............


((name) => {
  console.log("Hello " + name);
})("Kritika");