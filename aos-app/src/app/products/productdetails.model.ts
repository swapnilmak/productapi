export class ProductDetails{
    public detailsId: number;
    public specification: string;
    public quantity: string;
    public price: number;

    constructor(detailsId: number,  specification: string,  quantity: string, price: number){
        this.detailsId=detailsId;
        this.specification=specification;
        this.quantity=quantity;
        this.price=price;
    }
}

