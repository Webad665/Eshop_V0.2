export interface Books{

    id: number;
    name: string;
    author: string;
    dateOfPublish: Date;
    genre: string;
    numOfPages: number;    
    price: number;
    status: 'avalable' | 'sold out';
    orderStatus: 'enRoute' | 'arrived' | 'canceled' | null;
    rating: number;
}