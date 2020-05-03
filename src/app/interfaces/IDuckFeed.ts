export interface IDuckFeed {
    id?: string;
    datetime?: string;
    frequency: string;
    period: string;
    quantity: number;
    quantity_unit: string;
    type_of_food: number;
    food: string;
    city: string;
    province: string;
}