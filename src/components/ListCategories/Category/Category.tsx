import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import CategoryModel from "src/models/category";
import { Link } from "react-router-dom";
import Image from "src/components/Image/Image";

interface ICategoryProps {
    category: CategoryModel;
}

export default function Category(props: ICategoryProps) {
    const { urlCategory } = useParams();
    const getUrlCategory = (url: string) => (url === urlCategory ? "/" : "/category/" + url);

    return (
        <Wrapper>
            <LinkCategory to={() => getUrlCategory(props.category.url)}>
                <Border theme={props.category.url === urlCategory ? "selected" : "default"}>
                    <ImageStyled url={props.category.img?.url} alt={props.category.name}></ImageStyled>
                </Border>
                <Name>{props.category.name}</Name>
            </LinkCategory>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 86px;
    padding: 30px 23px;
    flex: 0 0 auto;

    @media (max-width: 736px) {
        width: 64px;
        padding: 5px;
    }
`;

const LinkCategory = styled(Link)`
    display: block;
    color: #000;
    text-decoration: none;
`;

const ImageStyled = styled(Image)`
    width: 76px;
    height: 76px;
    border: 3px solid #ffffff;
    border-radius: 41px;

    @media (max-width: 736px) {
        width: 56px;
        height: 56px;
        border-radius: 31px;
    }
`;

const Name = styled.div`
    text-overflow: ellipsis;
    text-align: center;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
`;

const Border = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 82px;

    background-color: #fff;
    border: 1px solid ${(props: { theme: string }) => (props.theme === "selected" ? "#ff0000" : "#cccccc")};
    border-radius: 42px;

    @media (max-width: 736px) {
        width: 62px;
        height: 62px;
        border-radius: 32px;
    }
`;
