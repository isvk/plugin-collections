import React, { useEffect } from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { mainGetStatus } from "src/store/rootSelector";
import { loadStatus } from "src/store/loadStatus";
import { loadAll } from "src/store/main/actions";
import Alert from "src/components/Alert/Alert";
import Head from "src/components/Head/Head";
import ListCategories from "src/components/ListCategories/ListCategories";
import ListProducts from "src/components/ListProducts/ListProducts";

export default function MainPage() {
    const status = useCustomSelector(mainGetStatus);
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadAll());
        // eslint-disable-next-line
    }, []);

    return (
        <Wrapper>
            {status === loadStatus.notLoaded && <Alert type="preload" text="Загрузка..." />}
            {status === loadStatus.errorServer && <Alert type="warning" text="Ошибка сервера" />}
            {status === loadStatus.loaded && (
                <>
                    <Head />
                    <main>
                        <ListCategories />
                        <ListProducts />
                    </main>
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 935px;
    margin: 0 auto;
    font-size: 16px;
    background-color: #fafafa;

    @media (max-width: 736px) {
        font-size: 14px;
    }
`;
