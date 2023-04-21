let person = {
    name:'Kizuki', 
    age: 30
};
//Dot Notation
person.age = 21;
person.name = 'Keigo';

// Bracket Notation
person['name'] = 'Kizuki';
console.log(person);


let array = ['red', 'blue', 'green'];
  
greet(person.name);

function greet(name)
{
    console.log('hello ' + name);
}
