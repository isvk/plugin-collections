import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainGetStatus } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import Load from "src/components/Load/Load";
import Preload from "src/components/Preload/Preload";
import Warning from "src/components/Warning/Warning";
import Head from "src/components/Head/Head";
import ListCategories from "src/components/ListCategories/ListCategories";
import ListProducts from "src/components/ListProducts/ListProducts";

export default function MainPage() {
    const status = useCustomSelector(mainGetStatus);

    return (
        <Wrapper>
            {status === loadStatus.notLoaded && <Load />}
            {status !== loadStatus.loaded && status !== loadStatus.errorServer && <Preload text="Загрузка..." />}
            {status === loadStatus.loaded && (
                <>
                    <Head />
                    <main>
                        <ListCategories />
                        <ListProducts />
                    </main>
                </>
            )}
            {status === loadStatus.errorServer && <Warning text="Ошибка сервера" />}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0px auto;
    font-size: 16px;
    background-color: #fafafa;

    @media (max-width: 736px) {
        font-size: 14px;
    }
`;
