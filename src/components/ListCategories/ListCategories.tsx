import React, { useEffect, useReducer, useRef } from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import useEventListener from "src/hooks/useEventListener";
import { categoryState } from "src/store/rootSelector";
import Category from "./Category/Category";
import { ChevronCircleLeft as LeftArrowStyledIcon } from "@styled-icons/fa-solid/ChevronCircleLeft";
import { ChevronCircleRight as RightArrowStyledIcon } from "@styled-icons/fa-solid/ChevronCircleRight";
import "focus-visible";

export default function ListCategories() {
    const categories = useCustomSelector(categoryState);
    const refWrapper = useRef<HTMLDivElement>(null);
    const [state, dispatch] = useReducer(reducer, { left: false, right: false });

    const drawArrows = () => {
        if (refWrapper.current && window.matchMedia("(pointer:fine)").matches) {
            dispatch({ type: "setLeft", value: refWrapper.current.scrollLeft > 0 });
            dispatch({
                type: "setRight",
                value: refWrapper.current.scrollWidth - refWrapper.current.offsetWidth > refWrapper.current.scrollLeft,
            });
        } else {
            dispatch({ type: "setLeft", value: false });
            dispatch({ type: "setRight", value: false });
        }
    };

    const handleScroll = (direction: number) => {
        if (refWrapper.current !== null) {
            refWrapper.current.scrollTo({
                left: refWrapper.current.scrollLeft + direction,
                behavior: "smooth",
            });
        }
    };

    useEventListener("resize", drawArrows);

    useEffect(() => {
        drawArrows();
    }, []);

    return (
        <Wrapper onScroll={() => drawArrows()}>
            {state.left && (
                <ButtonLeftArrow>
                    <LeftArrow size="20" onClick={() => handleScroll(-132 * 4)} />
                </ButtonLeftArrow>
            )}

            <WrapperListCategory ref={refWrapper}>
                {categories.map((category, index) => (
                    <Category category={category} key={category.id} />
                ))}
            </WrapperListCategory>

            {state.right && (
                <ButtonRightArrow>
                    <RightArrow size="20" onClick={() => handleScroll(132 * 4)} />
                </ButtonRightArrow>
            )}
        </Wrapper>
    );
}

function reducer(state: { left: boolean; right: boolean }, action: { type: string; value: boolean }) {
    switch (action.type) {
        case "setLeft":
            return state.left !== action.value ? { ...state, left: action.value } : state;
        case "setRight":
            return state.right !== action.value ? { ...state, right: action.value } : state;
        default:
            throw new Error();
    }
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
    flex-wrap: wrap;
    position: relative;
`;

const ButtonArrow = styled.button`
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

const ButtonLeftArrow = styled(ButtonArrow)``;

const ButtonRightArrow = styled(ButtonArrow)`
    right: 0;
`;

const LeftArrow = styled(LeftArrowStyledIcon)`
    color: #aaa;
`;

const RightArrow = styled(RightArrowStyledIcon)`
    color: #aaa;
`;

const WrapperListCategory = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;
