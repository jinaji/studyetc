import React from "react";
import { Column } from "../../common/component/Layout/Row";
import styled from "styled-components";
import { Text } from "../../common/component/Text/Text";
import { useRouter } from "next/router";

const Container = styled(Column)`
  height: 100%;
  min-height: 100dvh;
  overflow: scroll;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      <Title>지나 공부합니다</Title>

      <Text />
    </Container>
  );
}
