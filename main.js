let user = {
    fristName: "ahmad",
    id: 87653456789,
    email: "haila@gmail.com",
    available: true,
    checkAvailable : function (){
        if (this.available == true ){
            console.log("free to work")
        }
        else  {
            console.log(" not free to work")
        }
    },
    address: {
        city: {
            city1: "abha",
            city3: "riaydh",
        }
    },
    skills: ["html","css","javaScript"],
}

// console.log(user);
// console.log(user.fristName);
// user.id = 111188654;
// console.log(user.id);
// console.log(user.skills.join(","));
// console.log(user.checkAvailable())

// lab 2
characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  let blueEyes = characters.find((element)=> {
 
    if(element.eye_color == "blue"){
        return element
    }
  })
    console.log(blueEyes.name)

    // 2-Get first gender that is his mass is over 50
let massOver50 = characters.find((el)=> {
    return el.mass > 50
})
console.log(massOver50.name)

let fristGender = characters.map((el)=> {
    return el.name
})
console.log(fristGender)
// 3-Get characters with height less than 200
let allheightless200 = characters.filter((el)=> {
    return el.height <  200
})
console.log(allheightless200)

// 4-Get all male characters
let allNameMale = characters.filter((el)=> {
    return el.gender === "male"
})
console.log(allNameMale)
// sort by mass
let sortByMass = characters.sort((a,b)=> {
    return a.mass - b.mass
})
console.log(sortByMass)

// sort by height
let sortByHeight = characters.sort((a,b)=> {
    return  b.height - a.height 
})
console.log(sortByHeight)


// 5-Get array of all names only
let allName = characters.map((element)=> {
    return element.name
})
console.log(allName)

// Get array of all heights only
let allHeight = characters.map((element)=> {
    return element.height
})
console.log(allHeight)

// 9-Does every character have mass more than 40?
let massMoreThan40 = characters.every((element)=> {
    return element.mass > 40
})
console.log(massMoreThan40)

// 10-Is every character shorter than 200?
let shorterThan200 = characters.every((element)=> {
    return element.height < 200
})
console.log(shorterThan200)

// 11-Is there at least one character with blue eyes?
let leastOne = characters.some((element)=> {
    return element.eye_color === "blue"
})
console.log(leastOne)

// 12-Is there at least one character taller than 210?
let tallerThan210 = characters.some((element)=> {
    return element.height === 210
})
console.log(tallerThan210);