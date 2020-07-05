class Common {
    static  parkingSpotSize(){
        return {
            HATCHBACK :'HATCHBACK',
            SEDAN : 'SEDAN',
            MINITRUCK : 'MINITRUCK'
        };
    }

    static freeParkingLot(spotType, parkingSpots){
        let parkings;
        let type;
        switch (spotType) {
            case 'HATCHBACK' :
                parkings = parkingSpots.HATCHBACK.filter(value => value.status ==='free');
                type = 'HATCHBACK'
                if(parkings.length ===0){
                    parkings = parkingSpots.SEDAN.filter(value => value.status ==='free');
                    type ='SEDAN';
                    if(parkings.length ===0){
                        parkings = parkingSpots.MINITRUCK.filter(value => value.status ==='free');
                        type = 'MINITRUCK';
                    }
                }
                return {parking:parkings,
                        spotType: type};
            case 'SEDAN' :
                parkings = parkingSpots.SEDAN.filter(value => value.status ==='free');
                type ='SEDAN';
                if(parkings.length ===0){
                    parkings = parkingSpots.MINITRUCK.filter(value => value.status ==='free');
                    type = 'MINITRUCK';
                }
                return {parking:parkings,
                    spotType:type};
            case 'MINITRUCK' :
                parkings = parkingSpots.MINITRUCK.filter(value => value.status ==='free');
                type = 'MINITRUCK';
                return {parking:parkings,
                    spotType:type};
        }
    }
}