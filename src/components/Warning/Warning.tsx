import React from "react";
import styled from "styled-components";

import { Warning as WarningStyledIcon } from "@styled-icons/entypo/Warning";

interface IWarningProps {
    text: string;
}

export default function Warning(props: IWarningProps) {
    return (
        <Wrapper>
            <WarningIcon size="28" /> {props.text}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #4a4a4a;
`;

const WarningIcon = styled(WarningStyledIcon)`
    color: #ff0000;
`;
