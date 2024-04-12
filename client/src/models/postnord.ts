export interface IPostNordRes {
    data: {
        servicePointInformationResponse: {
            servicePoints: IServicePoint[]
        }
    }
}

export interface IServicePoint {
    name: string,
    servicePointId: string,
    address: IServicePointAddress
}

interface IServicePointAddress {
    city: string,
    countryCode: string,
    postalCode: string,
    streetName: string,
    streetNumber: string,
}