export interface IProduct {
    name: string,
    default_price: {
        unit_amount: number
    },
    images: string[],
    description: string,
    id: string
}

export interface ICartItem {
    quantity: number,
    product: IProduct   
}

export class CartProduct {
    constructor(
    public quantity: number,
    public product: IProduct 
    ){}
}

export interface IProductRes {
    data: IProduct[]
}

export interface IPaymentConfirmation {
        url: string
}