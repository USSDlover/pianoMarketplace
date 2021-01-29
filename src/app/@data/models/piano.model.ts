import {IPiano} from '@data/interfaces';

export class Piano implements IPiano {
    attributes: any;
    description: string;
    id: string;
    image: string;
    images: { id: string; img: string }[];
    name: string;
    price: number;

    constructor() {
    }

    static create(value: IPiano): Piano {
        const piano = new Piano();
        return Object.assign(piano, value);
    }

    static dummy(): Piano {
        const dummyImg = {id: 'p-01', img: '/assets/images/mock-image/piano-01.webp'};

        return Piano.create({
            id: '01',
            name: 'Very nice one',
            description: 'Very nice one Very nice one Very nice one Very nice one Very nice one',
            image: `/assets/images/mock-image/piano-${Math.floor(Math.random() * 10)}.jpg`,
            images: [dummyImg, dummyImg],
            attributes: {color: 'black', type: 'digital'},
            price: Math.floor(Math.random() * 1000)
        });
    }
}
