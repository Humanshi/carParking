class Vehicle {
    constructor(number) {
        if (this.constructor === Vehicle) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
        this.licensePlate = number;
        this.parkingSpots = [];
    }


    vehicleFitSpot() {
        throw new Error("Abstract Method has no implementation");
    }

    parkInSpot(licensePlate, spotType) {
        try {
            let position,storageStatus;
            storageStatus =JSON.parse(localStorage.getItem('storageStatus'));
            this.parkingSpots = JSON.parse(localStorage.getItem('storage'));
            let parkingData = Common.freeParkingLot(spotType, this.parkingSpots);
            if (parkingData.parking.length !== 0) {
                this.parkingSpots.find(value => {
                    if (value && value.spotId === parkingData.parking[0].spotId) {
                        position = this.parkingSpots.indexOf(value);
                        this.parkingSpots[position].status = Common.storageStructure().statusOccupied;
                        this.parkingSpots[position].licenseNumber = licensePlate;
                        let spotStat = storageStatus.find(val=> val.spotType ===value.spotType);
                        spotStat = storageStatus.indexOf(spotStat);
                        storageStatus[spotStat].available = storageStatus[spotStat].available -1;
                        storageStatus[spotStat].occupied = storageStatus[spotStat].occupied +1;
                    }
                    localStorage.setItem('storage', JSON.stringify(this.parkingSpots));
                    localStorage.setItem('storageStatus', JSON.stringify(storageStatus));
                });
                window.location.reload();
                return 'Car has been parked and the parking fee will be ' + parkingData.parking[0].amount;
            }
        }catch (e) {
            console.log(e);
            return Common.info().INTERNAL_ERROR;
        }
    }

    clearSpot(licensePlate) {
        try{
            let position,storageStatus;
            storageStatus =JSON.parse(localStorage.getItem('storageStatus'));
            this.parkingSpots= JSON.parse(localStorage.getItem('storage'));
            let data= this.parkingSpots.find(value => value.licenseNumber===licensePlate);
            if(data){
                position= this.parkingSpots.indexOf(data);
                this.parkingSpots[position].status =Common.storageStructure().statusFree;
                this.parkingSpots[position].licenseNumber =Common.storageStructure().licenseNumber;
                let spotStat = storageStatus.find(val=> val.spotType ===data.spotType);
                spotStat = storageStatus.indexOf(spotStat);
                storageStatus[spotStat].available = storageStatus[spotStat].available +1;
                storageStatus[spotStat].occupied = storageStatus[spotStat].occupied -1;
                localStorage.setItem('storage', JSON.stringify(this.parkingSpots));
                localStorage.setItem('storageStatus', JSON.stringify(storageStatus));
                window.location.reload();
                return Common.info().THANK_YOU;
            } else {
                return Common.info().NO_VEHICLE_LICENSE_NUMBER;
            }
        } catch (e) {
            console.log(e);
            return Common.info().INTERNAL_ERROR;
        }

    }

}