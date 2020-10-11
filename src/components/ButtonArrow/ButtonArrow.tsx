import React from "react";
import styled from "styled-components";
import { ChevronCircleLeft as LeftArrowStyledIcon } from "@styled-icons/fa-solid/ChevronCircleLeft";
import { ChevronCircleRight as RightArrowStyledIcon } from "@styled-icons/fa-solid/ChevronCircleRight";
import "focus-visible";

interface IButtonArrowProps {
    type: "left" | "right";
    handleScroll: any;
    scrollWidth: number;
}

export default function ButtonArrow(props: IButtonArrowProps) {
    return (
        <>
            {props.type === "left" ? (
                <ButtonLeftArrow>
                    <LeftArrow size="20" onClick={() => props.handleScroll(props.scrollWidth)} />
                </ButtonLeftArrow>
            ) : (
                <ButtonRightArrow>
                    <RightArrow size="20" onClick={() => props.handleScroll(props.scrollWidth)} />
                </ButtonRightArrow>
            )}
        </>
    );
}

const ButtonArrowStyled = styled.button`
    display: block;
    position: absolute;
    top: 53px;
    padding: 10px;
    cursor: pointer;
    border: none;
    background: unset;

    &:focus:not(.focus-visible) {
        outline: none;
    }
`;

const ButtonLeftArrow = styled(ButtonArrowStyled)``;

const ButtonRightArrow = styled(ButtonArrowStyled)`
    right: 0;
`;

const LeftArrow = styled(LeftArrowStyledIcon)`
    color: #aaa;
`;

const RightArrow = styled(RightArrowStyledIcon)`
    color: #aaa;
`;
