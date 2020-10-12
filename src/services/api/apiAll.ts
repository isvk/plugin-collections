import { IHttp } from "../IHttp";
import { IApiMain } from "./typings/apiMain";
import { IApiCategory } from "./typings/apiCategory";
import { IApiProduct } from "./typings/apiProduct";

export default class ApiAll {
    constructor(private http: IHttp) {}

    loadAll = () => {
        const textQuery = {
            query: `{
            main {
                head_title
                head_subtitle
                head_description
                head_logo
                    {url}
                }
            categories {
                id
                sort
                url
                name
                img {url}
            }
            products {
                id
                created_at            
                category
                    {id url}
                name
                link
                img_webp_150
                    {url}
                img_webp_300
                    {url}
                img_webp_600
                    {url}
                img_jpeg_150
                    {url} 
                img_jpeg_300
                    {url}
                img_jpeg_600
                    {url}
            }
        }`,
            variables: {},
        };
        return this.http
            .getFetch(textQuery)
            .then(
                (response: { data: { main: IApiMain[]; categories: IApiCategory[]; products: IApiProduct[] } }) =>
                    response.data
            );
    };
}
