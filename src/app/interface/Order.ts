export interface OrderDto {
    id: number;
    totla: number;
    orderDate: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}