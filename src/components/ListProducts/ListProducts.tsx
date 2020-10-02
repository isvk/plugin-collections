import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import useCustomSelector from "src/hooks/useCustomSelector";
import useEventListener from "src/hooks/useEventListener";
import { productsGetCategoryByUrl } from "src/store/rootSelector";
import Product from "./Product/Product";

export default function ListProducts() {
    const { urlCategory } = useParams();
    const allProducts = useCustomSelector(productsGetCategoryByUrl, urlCategory);
    const countPagination = 30;
    const [countNextItem, setCountNextItem] = useState(countPagination);
    const products = allProducts.slice(0, countNextItem);

    const scrollListener = function () {
        if (
            window.scrollY + window.innerHeight + 500 >= document.documentElement.scrollHeight &&
            countNextItem < allProducts.size
        ) {
            setCountNextItem(countNextItem + countPagination);
        }
    };

    useEventListener("scroll", scrollListener);

    return (
        <Wrapper>
            {products.map((product) => (
                <Product product={product} key={product.id} />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`;
