import React from "react";
import styled from "styled-components";
import { Loader5 as LoaderStyledIcon } from "@styled-icons/remix-fill/Loader5";

interface IPreloadProps {
    text: string;
}

export default function Preload(props: IPreloadProps) {
    return (
        <Wrapper>
            <LoaderIcon size="28" /> {props.text}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
`;

const LoaderIcon = styled(LoaderStyledIcon)`
    animation: rotate 2s linear infinite;
    color: #2196f3;

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`;
