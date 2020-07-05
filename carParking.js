class Car extends Vehicle{
    constructor(props) {
        super(props);
        this.vehicleType='';
        this.spots = Common.parkingSpotSize();
    }

    vehicleFitSpot(){
        if(this.vehicleType && Object.keys(this.spots).includes(this.vehicleType)){
            return true;
        }
        return false;
    }

}


function enterParking(){
    let car = new Car(document.getElementById("licensePlate").value.toUpperCase());
    car.vehicleType = document.getElementById("vehicleType").value.toUpperCase();
    if(car.vehicleFitSpot()){
       let availableSpots =  Common.freeParkingLot(car.vehicleType,JSON.parse(localStorage.getItem('storage')))
        if(availableSpots.parking.length!==0){
            document.getElementById('spotId').innerHTML = JSON.stringify(car.parkInSpot(car.licensePlate, car.vehicleType));
        } else document.getElementById('spotId').innerHTML ='We are sorry, we do not have free parking spots';

    } else document.getElementById('spotId').innerHTML ='We are sorry, we do not have parking spot for the provided vehicle size';
}

function exitParking() {
    let car = new Car(document.getElementById("licensePlate").value.toUpperCase());
    car.vehicleType = document.getElementById("vehicleType").value.toUpperCase();
    document.getElementById('spotId').innerHTML = JSON.stringify(car.clearSpot(car.licensePlate, car.vehicleType));
}

