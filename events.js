
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const info       = document.querySelector("#info");
const image = document.querySelector("#person-img");
const role = document.querySelector("#job");
const name = document.querySelector("#author")
const surpriseButton = document.querySelector(".random-btn")

var counter = 0;

const persons = [
    {
        id: 0,
        name:"sara jone",
        role: "UI/UX",
        image:"person1.jpeg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
    },
    {
        id: 1,
        role: "Web-developer",
        name:"clark ",
        image:"person2.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?."
    },

    {
        id: 2,
        role: "INTERN",
        name:"Sofia",
        image:"person3.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?"
    },
    {
        id: 3,
        role: "INTERN",
        name:"ram",
        image:"person4.jpg",
        info: "sLorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil??"
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