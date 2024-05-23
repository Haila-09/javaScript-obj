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

console.log(user);
console.log(user.fristName);
user.id = 111188654;
console.log(user.id);
console.log(user.skills.join(","));
console.log(user.checkAvailable())
