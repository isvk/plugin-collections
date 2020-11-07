import React, { useState } from "react";
import styled from "styled-components";
import * as packageJson from "../../../package.json";

interface IImageProps {
    url?: string;
    alt?: string;
    className?: string;
    sources?: ISource[];
}

export interface ISource {
    srcSet?: string;
    type?: string;
    media?: string;
}

export enum imageStatus {
    notLoaded,
    loaded,
    errorServer,
}

export default function Image(props: IImageProps) {
    const [status, setStatus] = useState(imageStatus.notLoaded);

    const Img = (
        <Wrapper
            className={props.className}
            src={getUrlImg(props.url, status)}
            alt={props.alt}
            status={status}
            onLoad={() => setStatus(status === imageStatus.errorServer ? imageStatus.errorServer : imageStatus.loaded)}
            onError={() => setStatus(imageStatus.errorServer)}
        />
    );

    return (
        <>
            {props.sources?.length ? (
                <picture>
                    {props.sources.map(
                        (source: ISource, index: number) =>
                            source.srcSet && (
                                <source srcSet={source.srcSet} type={source.type} media={source.media} key={index} />
                            )
                    )}
                    {Img}
                </picture>
            ) : (
                Img
            )}
        </>
    );
}

const getUrlImg = (url?: string, status: imageStatus = imageStatus.loaded) => {
    return url && url.length && status !== imageStatus.errorServer
        ? packageJson.homepage + "api" + url
        : process.env.PUBLIC_URL + "/notfound.svg";
};

export const getSrcSet = (x1?: string, x2?: string) => {
    const result = [];

    if (x1) result.push(getUrlImg(x1) + " 1x");
    if (x2) result.push(getUrlImg(x2) + " 2x");

    return result.length ? result.join(", ") : undefined;
};

const Wrapper = styled.img`
    background: ${(props: { status: imageStatus }) => {
        switch (props.status) {
            case imageStatus.notLoaded:
                return "url(" + process.env.PUBLIC_URL + packageJson.homepage + "preloader.svg) no-repeat center";
            case imageStatus.loaded:
            case imageStatus.errorServer:
            default:
                return "#ffffff";
        }
    }};
`;
