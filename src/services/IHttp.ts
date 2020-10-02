export interface IHttp {
    getFetch(textQuery: { query: string }): Promise<any>;
}
