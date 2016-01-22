1 - Generate from the following object a constructor function

```javascript

function Person (name) {

    var _name = name;

    this.walk = (function() {

        function walk() {

            walk.steps++;
        }

        walk.steps = 0;

        return walk;
    })();

    this.getName = function(){
        return this._name;
    }

    this.getSteps = function () {
        return this.walk.steps;
    }
};

var person = new Person({name:'Juan'});
```

2 - Implement a function `construct` with the following signature:

`construct(Constructor: Function, args: Array): Object`

It must reproduce exactly the behaviour of the operator `new`.

**Example**

```javascript
function construct (constructor, arr) {
    for (var i = 0; i<= arr.length; i+=1) {
        return new constructor(arr[i]);
    }
}

function Person(name) {

    this._name = name;
}

Person.prototype.sayHello = function() {

    console.log("Hi, I'm " + this._name);
}

var person1 = new Person("juan");
var person2 = construct(Person, [ "pepe" ]);

console.log(person1 instanceof Person); // true
console.log(person1._name); // "juan"
console.log(person2 instanceof Person); // true
console.log(person2._name); // "pepe"
```
