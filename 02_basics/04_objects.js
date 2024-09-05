// const tinderUser = new Object();   // singleton
const tinderUser = {}     // non-singleton

tinderUser.id = "y74"
tinderUser.name = "sam"
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "hfu45@gamil.com",
    fullName : {
        userFullName : {
            firstName : "Aaryan",
            lastName : "soni"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = {
    5 : "a",
    6 : "b"
}

// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);
// console.log(obj5)

const obj4 = {...obj1, ...obj2, ...obj3}   // spread method using mostly
// console.log(obj4);

const users = [
    {
        id : 1,
        eamil : "efo@email.com"
    },
    {
        id : 2,
        eamil : "efo@email.com"
    },
    {
        id : 3,
        eamil : "efo@email.com"
    },
]

// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('loggedIn'));   // checking the key are exist or not


// +++++++++++++++++++++  Destructring Object ++++++++++++++++++++++ // 


const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor : instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

        // API json
// {
//     "name" : "vikash",
//     "cousrename" : "js",
//     "price" : "unpaid"
// }

