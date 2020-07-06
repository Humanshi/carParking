class Car extends Vehicle {
    constructor(props) {
        super(props);
        this.vehicleType = '';
        this.spots = Common.parkingSpotSize();
    }

    vehicleFitSpot() {
        if (this.vehicleType && Object.keys(this.spots).includes(this.vehicleType)) {
            return true;
        }
        return false;
    }

}


function enterParking() {
    document.getElementById("exitParking").style.display = "none";
    document.getElementById("spotId").style.display = "none";
    document.getElementById("enterParking").style.display = "block";
}

function submitDetails() {
    let car = new Car(document.getElementById("licensePlate").value.toUpperCase());
    car.vehicleType = document.getElementById("vehicleType").value.toUpperCase();
    let availableSpots = Common.freeParkingLot(car.vehicleType, JSON.parse(localStorage.getItem('storage')));
    if (availableSpots.parking.length !== 0) {
        document.getElementById("enterParking").style.display = "none";
        if (Common.licensePLateData(car.licensePlate)) {
            document.getElementById("spotId").style.display = "block";
            document.getElementById('spotId').innerHTML = JSON.stringify(car.parkInSpot(car.licensePlate, car.vehicleType));
        } else {
            document.getElementById("spotId").style.display = "block";
            document.getElementById('spotId').innerHTML = Common.info().EXIST_LICENSE_PLATE_NUMBER;
        }
    } else {
        document.getElementById("spotId").style.display = "block";
        document.getElementById('spotId').innerHTML = Common.info().NO_FREE_SPOT;
    }
    document.getElementById("licensePlate").value ='';
}

function exitParking() {
    document.getElementById("enterParking").style.display = "none";
    document.getElementById("spotId").style.display = "none";
    document.getElementById("exitParking").style.display = "block";
}

function exitDetails() {
    let car = new Car(document.getElementById("licenseNumber").value.toUpperCase());
    document.getElementById("spotId").style.display = "block";
    document.getElementById('spotId').innerHTML = JSON.stringify(car.clearSpot(car.licensePlate));
    document.getElementById("licenseNumber").value = "";
}
