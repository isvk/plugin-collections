import { Record } from "immutable";
import { loadStatus } from "src/store/loadStatus";

export interface IMain {
    status: loadStatus;
    head_description: string;
    head_subtitle: string;
    head_title: string;
    head_logo: { url: string } | null;
}

const initialMain: IMain = {
    status: loadStatus.notLoaded,
    head_description: "",
    head_subtitle: "",
    head_title: "",
    head_logo: null,
};

export default class Main extends Record(initialMain) implements IMain {}
