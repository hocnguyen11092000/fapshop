export interface Paginate {
    data: any[],
    count: string | number
}

export interface UpdateProduct {
    name?: string,
    discription?: string,
    discount?: number,
    category_id?: number
}