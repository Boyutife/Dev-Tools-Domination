alert("Make sure to check the console on the developer tools !!!")

const para = document.querySelector('.trans');

const dogs = [
  {name:'snickers', age: 2},
  {name:'hugo', age: 8},
];

para.addEventListener("click", ()=>{
    para.classList.toggle("toggle");
});


console.log("Hello");

console.log("Hello I am a %s string! " ,"💩" );

console.warn("OH NOOOOOO")

console.error("OH NOOOOOO")

console.info("crocodiles eat 3-4 people per year")

console.assert(para.classList.contains('ouch'), 'That is wrong!')

console.log(para);
console.dir(para);

console.clear();

dogs.forEach(dog =>{
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(dogs);
