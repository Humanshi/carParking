parkingLot ={
    'HATCHBACK': [
        {
            "spotId": "HATCH001",
            "status": "free",
            "amount": "100",
            "licenseNumber": ""
        },
        {
            "spotId": "HATCH002",
            "status": "occupied",
            "amount": "100",
            "licenseNumber": "HR071234"
        }
    ],
    'SEDAN': [
        {
            "spotId": "SEDAN001",
            "status": "free",
            "amount": "150",
            "licenseNumber": ""
        }
    ],
    'MINITRUCK': [
        {
            "spotId": "MINI001",
            "status": "free",
            "amount": "200",
            "licenseNumber": ""
        }
    ]
}
if(!localStorage.getItem('storage')){
    localStorage.setItem('storage', JSON.stringify(parkingLot));
}