//////studentGradeGenerator(Toy Problem)////


function studentGradeGenerator(input){
    //use of if and if else //
    if(input < 40){
        return "E"
    }else if(input >= 40 && input < 49){
        return "D"
    }else if(input >=49 && input <=59 ){
        return "C"
    }else if(input >= 60 && input <79){
        return "B"
    }else if(input >= 79){
        return "A"
    }else {
        return "Value out of range"
    }
}        

console.log(studentGradeGenerator())

