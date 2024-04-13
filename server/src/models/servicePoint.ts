interface IServicePointData {
    email: string,
    name: string,
    servicePointId: string,
    visitingAddress: {
        city: string,
        countryCode: string,
        postalCode: string,
        streetName: string,
        streetNumber: string,
    }
}

class ServicePoint {
    constructor(
        public name: string,
        public servicePointId: string,
        public visitingAddress: {
            city: string,
            countryCode: string,
            postalCode: string,
            streetName: string,
            streetNumber: string,
        }
    ) { }
}

export { IServicePointData, ServicePoint }