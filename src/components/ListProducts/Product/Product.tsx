import React from "react";
import styled from "styled-components";
import ProductModel from "src/models/product";
import Image from "src/components/Image/Image";

interface IProductProps {
    product: ProductModel;
}

export default function Product(props: IProductProps) {
    return (
        <Wrapper>
            <LinkProduct href={props.product.link}>
                <ImageStyled url={props.product.img?.url} />
            </LinkProduct>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: calc((100% - 6px) / 3);
    margin-right: 3px;
    margin-bottom: 3px;

    &:nth-child(3n) {
        margin-right: 0;
    }

    &:nth-last-child(-n + 3) {
        margin-bottom: 0;
    }
`;

const LinkProduct = styled.a`
    display: block;
    overflow: hidden;
    height: 0;
    padding: 50%;
    position: relative;
`;

const ImageStyled = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
