//////////Speed Detector (Toy Problem)/////


// baseSpeed = 70km/h //
// Vehicle speed - y //

// To find Demerit Points  - (baseSpeed - limit ) /5

function giveDemeritPoints(speed){
    let demeritPoints = (speed-baseSpeed) /5
    if (speed < 70){
        console.log ("Ok")
    }else if (demeritPoints > 12){
        console.log("License Suspended")
    }else {
        console.log(`Total Demerit Points:${demeritPoints}`)
    }
}
