import React, { useCallback, useEffect, useReducer, useRef } from "react";
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
    const isTouchDevice = window.matchMedia("(pointer:fine)").matches;
    const scrollWidth = 134 * 4;

    const drawArrows = useCallback(() => {
        if (refWrapper.current && isTouchDevice) {
            dispatch(actions.setLeft(refWrapper.current.scrollLeft > 0));
            dispatch(
                actions.setRight(
                    refWrapper.current.scrollWidth - refWrapper.current.offsetWidth > refWrapper.current.scrollLeft
                )
            );
        } else {
            dispatch(actions.setLeft(false));
            dispatch(actions.setRight(false));
        }
    }, [isTouchDevice]);

    const handleScroll = useCallback((direction: number) => {
        if (refWrapper.current) {
            refWrapper.current.scrollTo({
                left: refWrapper.current.scrollLeft + direction,
                behavior: "smooth",
            });
        }
    }, []);

    useEventListener("resize", drawArrows);

    useEffect(() => {
        drawArrows();
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper onScroll={drawArrows}>
            {state.left && (
                <ButtonLeftArrow>
                    <LeftArrow size="20" onClick={() => handleScroll(-scrollWidth)} />
                </ButtonLeftArrow>
            )}

            <WrapperListCategory ref={refWrapper}>
                {categories.map((category) => (
                    <Category category={category} key={category.id} />
                ))}
            </WrapperListCategory>

            {state.right && (
                <ButtonRightArrow>
                    <RightArrow size="20" onClick={() => handleScroll(scrollWidth)} />
                </ButtonRightArrow>
            )}
        </Wrapper>
    );
}

const reducer = (state: { left: boolean; right: boolean }, action: { type: string; value: boolean }) => {
    switch (action.type) {
        case "setLeft":
            return state.left !== action.value ? { ...state, left: action.value } : state;
        case "setRight":
            return state.right !== action.value ? { ...state, right: action.value } : state;
        default:
            throw new Error();
    }
};

const actions = {
    setLeft: (value: boolean) => {
        return {
            type: "setLeft",
            value: value,
        };
    },
    setRight: (value: boolean) => {
        return {
            type: "setRight",
            value: value,
        };
    },
};

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
