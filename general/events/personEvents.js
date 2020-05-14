/**INTRODUCTION
 * Node.js has a built-in module, called "Events", where you can
 * create-, fire-, and listen for- your own events.
 *
 * With an event emitter, we can simply raise (generate) a new event from
 * a different part of an application, and a listener will
 * listen to the raised event and have some action
 * performed for the event.
 */

var events = require("events");
/**
 * on of the things the module util allows us to do is inherit certain
 * properties from objects built into node.js or other objects
 */
var util = require("util");

/**
 * One of the export properties in module events is EventEmitter
 * and we can use it to create custom events and then react
 * to those events when they are emitted
 */
var eventEmitter = new events.EventEmitter();

/**
 * The EventEmitter class comes with a lot of member functions.
 * We’ll be using these member functions to publish events
 * and listen to them. Like:
 *
 * -on property is used to create and bind a function with the event created
 * -emit is used to fire an event.
 */

//we create a function constructor
var Person = function (name) {
  this.name = name;
};

// we use util module to inherit the EventEmitter
// we want any person that's created using it to attach custom events to people.
util.inherits(Person, events.EventEmitter);

var lina = new Person("lina");
var maria = new Person("maria");
var malak = new Person("malak");
var people = [lina, maria, malak];

//To publish an event, we use the emit() function
//In EventEmitters, we publish and listen to the events by name.
/**
 * when this event occurs, when it emits then we want to do
 * something and that's we define it in the callback function
 * and we can pass parameters into this function.
 */
people.forEach(function (person) {
  person.on("speak", function (msg) {
    console.log(`${person.name} said: ${msg}`);
  });

  person.on("eat", function (msg) {
    console.log(`${person.name} said: ${msg}`);
  });

  person.on("run", function (msg) {
    console.log(`${person.name} said: ${msg}`);
  });

  console.log(person);
});

//and to listen to an event, we use the on() function.
/**
 * the first argument in this function is the name of the event
 * we want to publish(emit) and thesecond is the parameter we
 *  want to send to the callback function.
 */

for (person of people) {
  person.emit("speak", "I am speaking");
  person.emit("run", "I am running");
}
