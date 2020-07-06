parkingLot = {
    'parkingSpots': [
        {
            "spotId": "HATCH001",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountHatch,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().HATCHBACK
        },
        {
            "spotId": "HATCH002",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountHatch,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().HATCHBACK
        },
        {
            "spotId": "HATCH003",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountHatch,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().HATCHBACK
        },
        {
            "spotId": "SEDAN001",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountSedan,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().SEDAN
        },
        {
            "spotId": "SEDAN002",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountSedan,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().SEDAN
        },
        {
            "spotId": "SEDAN003",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountSedan,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().SEDAN
        },
        {
            "spotId": "MINI001",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountMini,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().MINITRUCK
        },
        {
            "spotId": "MINI002",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountMini,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().MINITRUCK
        },
        {
            "spotId": "MINI003",
            "status": Common.storageStructure().statusFree,
            "amount": Common.storageStructure().amountMini,
            "licenseNumber": "",
            "spotType": Common.parkingSpotSize().MINITRUCK
        }
    ]
}

parkingSpotStatus = [{
    "spotType": Common.parkingSpotSize().HATCHBACK,
    "available": Common.storageStructure().available,
    "occupied": Common.storageStructure().occupied
}, {
        "spotType": Common.parkingSpotSize().SEDAN,
        "available": Common.storageStructure().available,
        "occupied": Common.storageStructure().occupied
    }, {
        "spotType": Common.parkingSpotSize().MINITRUCK,
        "available": Common.storageStructure().available,
        "occupied": Common.storageStructure().occupied
    }]


if (!localStorage.getItem('storage')) {
    localStorage.setItem('storage', JSON.stringify(parkingLot.parkingSpots));
}


if (!localStorage.getItem('storageStatus')) {
    localStorage.setItem('storageStatus', JSON.stringify(parkingSpotStatus));
}