import {ProductDetails} from './productdetails.model';
export class Product{
    public id: number;
    public name: string;
    public description: string;
    public details: ProductDetails;

    constructor(id: number, name: string, description: string, details: ProductDetails){
        this.id=id;
        this.name=name;
        this.description=description;
        this.details=details;
    }
}



