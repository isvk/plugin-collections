import Bottle from "bottlejs";
import Http from "./http";

import ApiAll from "./api/apiAll";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiAll", ApiAll, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiAll: ApiAll;
    }
}
