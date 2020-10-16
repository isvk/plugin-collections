import React from "react";
import styled from "styled-components";
import ProductModel from "src/models/product";
import Image, { getSrcSet, ISource } from "src/components/Image/Image";
import { IThemeProps } from "src/components/MainPage/MainPage";

interface IProductProps {
    product: ProductModel;
}

export default function Product(props: IProductProps) {
    return (
        <Wrapper>
            <LinkProduct href={props.product.link}>
                <ImageStyled
                    url={props.product.img_jpeg_300?.url}
                    sources={getSourcesForProduct(props.product)}
                    alt={props.product.name}
                />
            </LinkProduct>
        </Wrapper>
    );
}

const getSourcesForProduct = (product: ProductModel) => {
    return [
        {
            srcSet: getSrcSet(product.img_webp_150?.url, product.img_webp_300?.url),
            type: "image/webp",
            media: "(max-width: 456px)",
        },
        {
            srcSet: getSrcSet(product.img_jpeg_150?.url, product.img_jpeg_300?.url),
            type: "image/jpeg",
            media: "(max-width: 456px)",
        },
        {
            srcSet: getSrcSet(product.img_webp_300?.url, product.img_webp_600?.url),
            type: "image/webp",
        },
        {
            srcSet: getSrcSet(product.img_jpeg_300?.url, product.img_jpeg_600?.url),
            type: "image/jpeg",
        },
    ].filter((source: ISource) => source.srcSet);
};

const config = {
    numberInRow: 3,
    indentForDesktop: 17,
    indentForMobile: 3,
};

const Wrapper = styled.div`
    width: calc((100% - ${config.indentForDesktop * (config.numberInRow - 1)}px) / ${config.numberInRow});
    margin-right: ${config.indentForDesktop}px;
    margin-bottom: ${config.indentForDesktop}px;

    &:nth-child(${config.numberInRow}n) {
        margin-right: 0;
    }

    &:nth-last-child(-n + ${config.numberInRow}) {
        margin-bottom: 0;
    }

    @media (max-width: ${(props: IThemeProps) => props.theme.media_mobile}px) {
        width: calc((100% - ${config.indentForMobile * (config.numberInRow - 1)}px) / ${config.numberInRow});
        margin-right: ${config.indentForMobile}px;
        margin-bottom: ${config.indentForMobile}px;
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
