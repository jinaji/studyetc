import React from "react";
import { Column } from "../../../common/component/Layout/Row";
import { Text } from "../../../common/component/Text/Text";
import styled from "styled-components";
import { TextAnimationComponent } from "@/pages/TextAnimationComponent";

const AnimationContainer = styled(Column)``;

const AnimationsPage = () => (
  <Column>
    <AnimationContainer>
      <TextAnimationComponent />
    </AnimationContainer>
  </Column>
);

export default AnimationsPage;
