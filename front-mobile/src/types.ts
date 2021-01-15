export type Order = {
    address: string,
    id: number,
    latitude: number,
    longitude: number,
    moment: string,
    products: Product[]
    status: string,
    total: number,
}

export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUri: string
}