var myArray = ["Neha", "Female",20, "Gujarat", false]

var student = {
    s_rollno : 8147,
    age : 20,
    student_name : "Neha Sanwal",
    address: {
        adress_line1: "ABC Street",
        landmark: "XYZ",
        city: "NYC"
    },
    course: ["JavaScript", "Python", "HTML"],
    IsStudent: true
}

console.log(student.address.city);
console.log(student.course[1]);
console.log(student);

student.age=16
console.log(student);


var product = {
    name: "Cookies",
    id : 8147,
    price :50,
    desc: {
        mfg_date: "10/10/2024",
        exp_date: "10/11/2024",
        category: "baked goods"
    },
    rating: 4
}

console.log(product);