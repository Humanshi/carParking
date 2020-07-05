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
            let position;
            this.parkingSpots = JSON.parse(localStorage.getItem('storage'));
            let parkingData = Common.freeParkingLot(spotType, this.parkingSpots);
            if (parkingData.parking.length !== 0) {
                this.parkingSpots[parkingData.spotType].find(value => {
                    if (value && value.spotId === parkingData.parking[0].spotId) {
                        position = this.parkingSpots[parkingData.spotType].indexOf(value);
                        this.parkingSpots[parkingData.spotType][position].status = 'occupied';
                        this.parkingSpots[parkingData.spotType][position].licenseNumber = licensePlate;
                    }
                    localStorage.setItem('storage', JSON.stringify(this.parkingSpots));
                });
                return {
                    spotId: parkingData.parking[0].spotId,
                    spotType: parkingData.spotType,
                    amount: parkingData.parking[0].amount
                };
            }
        }catch (e) {
            console.log(e);
            return 'Internal Error Occured';
        }
    }

    clearSpot(licensePlate, spotType) {
        try{
            let position;
            this.parkingSpots= JSON.parse(localStorage.getItem('storage'));
            this.parkingSpots[spotType].find(value =>{
                if(value && value.licenseNumber===licensePlate){
                    position= this.parkingSpots[spotType].indexOf(value);
                    this.parkingSpots[spotType][position].status ='free';
                    this.parkingSpots[spotType][position].licenseNumber ='';
                }
                localStorage.setItem('storage', JSON.stringify(this.parkingSpots));
            });
            return 'Thank you for your visit';
        } catch (e) {
            console.log(e);
            return 'Internal Error Occured';
        }

    }

}