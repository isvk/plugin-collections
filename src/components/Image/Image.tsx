import React, { useState } from "react";
import styled from "styled-components";

interface IImageProps {
    url: string | undefined;
    alt?: string;
    className?: string;
}

export enum imageStatus {
    notLoaded,
    loaded,
    errorServer,
}

export default function Image(props: IImageProps) {
    const [status, setStatus] = useState(imageStatus.notLoaded);

    const getUrlImg = (url: string | undefined, status: imageStatus) => {
        if (url && url.length && status !== imageStatus.errorServer)
            return (process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "/api") + url;
        else return process.env.PUBLIC_URL + "/notfound.svg";
    };

    return (
        <Wrapper
            className={props.className}
            src={getUrlImg(props.url, status)}
            alt={props.alt}
            status={status}
            onLoad={() => setStatus(status === imageStatus.errorServer ? imageStatus.errorServer : imageStatus.loaded)}
            onError={() => setStatus(imageStatus.errorServer)}
        ></Wrapper>
    );
}

const Wrapper = styled.img`
    background: ${(props: { status: imageStatus }) => {
        switch (props.status) {
            case imageStatus.notLoaded:
                return "url(" + process.env.PUBLIC_URL + "preloader.svg) no-repeat center";
            case imageStatus.loaded:
            case imageStatus.errorServer:
            default:
                return "#ffffff";
        }
    }};
`;
