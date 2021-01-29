export interface IPiano {
    id: string;
    name: string;
    description: string;
    image: string;
    images: {id: string; img: string}[];
    price: number;
    attributes: any;
}
