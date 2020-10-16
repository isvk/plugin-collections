import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import CategoryModel from "src/models/category";
import { Link } from "react-router-dom";
import Image from "src/components/Image/Image";
import { IThemeProps } from "src/components/MainPage/MainPage";

interface ICategoryProps {
    category: CategoryModel;
}

export default function Category(props: ICategoryProps) {
    const { urlCategory: currentCategory } = useParams();

    return (
        <Wrapper>
            <LinkCategory to={props.category.url === currentCategory ? "/" : "/category/" + props.category.url}>
                <Border selected={props.category.url === currentCategory}>
                    <ImageStyled url={props.category.img?.url} alt={props.category.name} />
                </Border>
                <Name>{props.category.name}</Name>
            </LinkCategory>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    flex: 0 0 auto;
    width: 82px;
    padding: 30px 23px;

    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        width: 64px;
        padding: 5px;
    }
`;

const LinkCategory = styled(Link)`
    display: block;
    color: #000;
    text-decoration: none;
`;

const Border = styled.div`
    display: block;
    position: relative;
    overflow: hidden;
    height: 0;
    padding: 50%;
    background-color: #fff;
    border: 1px solid ${(props: { selected: boolean }) => (props.selected ? "#ff0000" : "#cccccc")};
    border-radius: 50%;
`;

const ImageStyled = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border: 3px solid #ffffff;
    border-radius: 50%;
`;

const Name = styled.div`
    text-overflow: ellipsis;
    text-align: center;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
`;
