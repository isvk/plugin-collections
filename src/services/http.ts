import { IHttp } from "./IHttp";
import * as packageJson from "../../package.json";

export default class Http implements IHttp {
    getFetch = (textQuery: { query: string }) => {
        return fetch(
            packageJson.homepage + "api/graphql",
            packageJson.homepage === "/"
                ? {
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
                  }
                : { method: "GET" }
        ).then((response: Response) => response.json());
    };
}
