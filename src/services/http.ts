import { IHttp } from "./IHttp";

export default class Http implements IHttp {
    getFetch = (textQuery: { query: string }) => {
        return fetch("/api/graphql", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(textQuery),
        }).then((response: Response) => response.json());
    };
}
