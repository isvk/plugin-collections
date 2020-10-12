export interface IApiCategory {
    id: number;
    sort: number;
    url: string;
    name: string;
    img: { url: string } | null;
}
