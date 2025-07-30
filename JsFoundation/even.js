const ages = [22,23,24,25,26,27];
const numberOfPeople = ages.length;

for(let i = 0; i < numberOfPeople; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}