import React from "react";
import { Column, Row } from "../../../common/component/Layout/Row";
import { RollingText } from "../../../common/component/Animations/RollingText";
import { DropDown } from "../../../common/component/Animations/Dropdown";
import styled from "styled-components";

const Container = styled(Row)`
  gap: 20px;
`;

const AnimationsPage = () => (
  <Container>
    <RollingText />
    <DropDown />
  </Container>
);

export default AnimationsPage;
