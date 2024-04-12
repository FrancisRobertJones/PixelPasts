export interface IPostNordRes {
    servicePointInformationResponse: {
        servicePoints: IServicePoint[]
    }
}

export interface IServicePoint {
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
