const allUser = [{
    FirstName: "shantanu",
    Gender: "male",
}, {
    FirstName: "shubham",
    Gender: "male",
}, {
    FirstName: "Priya",
    Gender: "Female",
}]

for (let i = 0; i <allUser.length; i++){
    if(allUser[i]["Gender"] == "male"){
        console.log(allUser[i]["FirstName"])
    }
}