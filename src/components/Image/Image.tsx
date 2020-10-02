import React, { SyntheticEvent } from "react";

interface IImageProps {
    url: string | undefined;
    alt?: string;
    className?: string;
}

export default function Image(props: IImageProps) {
    const handleLoad = (e: SyntheticEvent<EventTarget>): void => {
        let target = e.target as HTMLImageElement;
        target.style.background = "#ffffff";
    };

    const handleError = (e: SyntheticEvent<EventTarget>): void => {
        let target = e.target as HTMLImageElement;
        target.style.background = "#ffffff";
        target.src = process.env.PUBLIC_URL + "/notfound.svg";
    };

    const getUrlImg = (url: string | undefined) => {
        if (url && url.length) return (process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "/api") + url;
        else return process.env.PUBLIC_URL + "/notfound.svg";
    };

    return (
        <img
            className={props.className}
            src={getUrlImg(props.url)}
            alt={props.alt}
            onLoad={(e: SyntheticEvent<EventTarget>) => handleLoad(e)}
            onError={(e: SyntheticEvent<EventTarget>) => handleError(e)}
        ></img>
    );
}
