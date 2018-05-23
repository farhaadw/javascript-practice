var a: number;
var b: boolean;
var c: string;

a = 10;
b = true;
c = "something";

var myArray = [1, 2, 3];
var myAnotherArray : number[];
myAnotherArray = [1, 2, 3];

// tuples - fixed set of elements (like an array in JS)
var myArrayTruple : [number, boolean];
myArrayTruple = [100, true];

// functions
function add(a : number, b : number, c : number = 0) : number {
    return a + b + c;
}

var sum = add(2, 4);
console.log(sum);

// use type any - can assign anything
var d : any;
d = 10;
d = true;
d = "something";

// accept certain set of types - union type
var e : number | boolean;
e = 12;
e = true;
