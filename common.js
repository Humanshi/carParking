class Common {
    static  parkingSpotSize(){
        return {
            HATCHBACK :'HATCHBACK',
            SEDAN : 'SEDAN',
            MINITRUCK : 'MINITRUCK'
        };
    }

    static  storageStructure(){
        return {
            "spotId": "",
            "statusFree": "free",
            "statusOccupied": "occupied",
            "amountHatch": "100",
            "amountSedan": "150",
            "amountMini": "200",
            "licenseNumber": "",
            "available": 3,
            "occupied":0
        }
    }

    static info() {
        return {
            NO_FREE_SPOT: 'We are sorry, we do not have free parking spots',
            No_SPOT_VEHICLE_SIZE: 'We are sorry, we do not have parking spot for the provided vehicle size',
            THANK_YOU: 'Thank you for your visit',
            NO_VEHICLE_LICENSE_NUMBER: 'We do not have any vehicle parked with provided license plate number',
            INTERNAL_ERROR: 'Internal Error Occurred',
            EXIST_LICENSE_PLATE_NUMBER: 'Entered license plate number already exist, please enter valid license plate number'
        };
    }

    static freeParkingLot(spotType, parkingSpots){
        let parkings;
        let type;
        switch (spotType) {
            case 'HATCHBACK' :
                parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree && value.spotType===spotType);
                type = spotType
                if(parkings.length ===0){
                    parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree  && value.spotType===spotType);
                    type =this.parkingSpotSize().SEDAN;
                    if(parkings.length ===0){
                        parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree  && value.spotType===spotType);
                        type = this.parkingSpotSize().MINITRUCK;
                    }
                }
                return {parking:parkings, spotType: type};
            case 'SEDAN' :
                parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree && value.spotType===spotType);
                type =spotType
                if(parkings.length ===0){
                    parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree && value.spotType===spotType);
                    type = this.parkingSpotSize().MINITRUCK;
                }
                return {parking:parkings, spotType:type};
            case 'MINITRUCK' :
                parkings = parkingSpots.filter(value => value.status ===this.storageStructure().statusFree && value.spotType===spotType) ;
                type = spotType;
                return {parking:parkings, spotType:type};
        }
    }

    static licensePLateData(licensePlate){
     let licenseDetails = JSON.parse(localStorage.getItem('storage'));
     licenseDetails = licenseDetails.filter(value => value.licenseNumber ===licensePlate);
     if(licenseDetails && licenseDetails.length ===0) return true; else licenseDetails;
    }

    static refreshStorage(){
        localStorage.setItem('storage', JSON.stringify(parkingLot.parkingSpots));
        localStorage.setItem('storage', JSON.stringify(parkingSpotStatus));
    }

    static reload(){

    }
}