const personArray = ["shantanu","shubham","sachin","suresh","priya"];
const genderArray = ["male","male","male","male","female"];
const numberOfUser=personArray.length;

for (let i = 0 ; i<numberOfUser; i++){
    if(genderArray[i] == 'male'){
        console.log(personArray[i]);
    }
}