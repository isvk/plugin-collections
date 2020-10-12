import React from "react";
import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { mainState } from "src/store/rootSelector";
import Image from "src/components/Image/Image";

export default function Head() {
    let main = useCustomSelector(mainState);

    return (
        <Wrapper>
            <WrapperLogo>
                <ImageStyled url={main.head_logo?.url} alt="Logo" />
            </WrapperLogo>
            <Text>
                <Title>{main.head_title}</Title>
                <Subtitle>{main.head_subtitle}</Subtitle>
                <Description dangerouslySetInnerHTML={{ __html: main.head_description }}></Description>
            </Text>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 0;
    width: 100%;
`;

const WrapperLogo = styled.div`
    padding: 30px 100px 30px 70px;
    @media (max-width: 736px) {
        padding: 10px;
    }
`;

const ImageStyled = styled(Image)`
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 1px solid #ccc;

    @media (max-width: 736px) {
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
`;

const Text = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    line-height: 30px;
`;

const Subtitle = styled.h2`
    font-weight: bold;
`;

const Description = styled.div`
    a {
        color: #25578e;
        text-decoration: none;
        font-weight: bold;
    }
`;
