export type Car = {
    color: string
    id: number
    latitude: number
    longitude: number
    model: string
    name: string
    price: number
    year: number
}

export type ChangeCarDataPayload = {
    id: number,
    name: string,
    model: string,
    color: string,
}

export { }
