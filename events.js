
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const info       = document.querySelector("#info");
const image = document.querySelector("#person-img");
const role = document.querySelector("#author");
// const name = document.querySelector("#author")
const surpriseButton = document.querySelector(".random-btn")

var counter = 0;

const persons = [
    {
        id: 0,
        name:"DSA WORKSHOP",
        role: "DSA WORKSHOP",
        image:"event1.jpeg",
        info: "Practice Data Structures and Algorithms in-depth in just 11 weeks with this comprehensive live workshop!. All the datastructures from basics to advanced will be covered"
        
    },
    {
        id: 1,
        role: "REACT-WORKSHOP",
        name:" ",
        image:"event2.png",
        info: "A step-by-step workshop to build a React application, all while learning React fundamentals. Best if accompanied with live facilitation by Geeksforgeeks student chapter."
    },

    {
        id: 2,
        role: "COMPETETIVE PROGRAMMING ",
        name:"",
        image:"event3.jpeg",
        info: "Weekly twice programming contests will be held on the geeksforgeeks website and followed upsolving of those contests problems by our geeks by interacting with the"
    },
    {
        id: 3,
        role: "CONTENT WRITING",
        name:"",
        image:"event4.jpg",
        info: "This Technical Content Writing Contest will be a 21-Day event. There are not any eligibility criteria for this Write From Home challenge i.e., anyone can take part in the contest."
    }
]


prevButton.addEventListener("click",()=>{
    counter--; 
    if(counter < 0) counter = persons.length-1;
    counter = (counter) % persons.length;

    const obj = persons[counter];

    image.src = obj.image;
    info.innerHTML  = obj.info;
    role.innerHTML = obj.role;
    name.innerHTML = obj.name;
})


nextButton.addEventListener("click",()=>{
    counter++; 
    counter = (counter) % persons.length;

    const obj = persons[counter];

    image.src = obj.image;
    info.innerHTML  = obj.info;
    role.innerHTML = obj.role;
    name.innerHTML = obj.name;
})


surpriseButton.addEventListener('click',()=>{
    counter = parseInt(Math.random()*10);
    console.log(counter);
    counter = (counter) % persons.length;

    const obj = persons[counter];

    image.src = obj.image;
    info.innerHTML  = obj.info;
    role.innerHTML = obj.role;
    name.innerHTML = obj.name;

})