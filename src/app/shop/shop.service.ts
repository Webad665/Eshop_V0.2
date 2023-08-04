import { Books } from "./book.model";



export class ShopService {

    private books:Books[] = [

        {
            id: 0,
            name: "The Alchemist 1",
            author: "Paulo Coelho",
            dateOfPublish: new Date("01.01.2001."),
            genre: "Quest",
            numOfPages: 300,
            price: 2500.00,
            status: 'avalable',
            orderStatus: null,
            rating: 9
        },
        {
            id: 1,
            name: "The Alchemist 2",
            author: "Paulo Coelho",
            dateOfPublish: new Date("02.02.2002."),
            genre: "Quest",
            numOfPages: 300,
            price: 2500.00,
            status: 'avalable',
            orderStatus: null,
            rating: 9
        },
        {
            id: 2,
            name: "The Alchemist 3",
            author: "Paulo Coelho",
            dateOfPublish: new Date("03.03.2003."),
            genre: "Quest",
            numOfPages: 300,
            price: 2500.00,
            status: 'avalable',
            orderStatus: null,
            rating: 9
        },
        

    ]

    getBooks(){

        return this.books;

    }


}