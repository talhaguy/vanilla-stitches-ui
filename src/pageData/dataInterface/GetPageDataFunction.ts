export interface GetPageDataFunction<T> {
    (slug: string): Promise<T>;
}
