import React, { ReactNode } from "react";
import { Column } from "../Layout/Row";
import styled from "styled-components";
import { Text } from "../Text/Text";

const Container = styled(Column)`
  background-color: lightblue;
  border-radius: 10px;
  width: fit-content;
  height: 100%;
  padding: 20px;
  max-width: 400px;
  gap: 10px;
`;

const Title = ({ title }: { title: string }) => <Text text={title} size={30} />;

const Description = ({ description }: { description?: string }) =>
  description ? (
    <Text
      text={description}
      size={15}
      preLine
      color={"#666666"}
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        opacity: 0.8,
      }}
    />
  ) : null;

export const Animation = ({
  title,
  animation,
  description,
}: {
  title: string;
  animation: ReactNode;
  description?: string;
}) => {
  return (
    <Container>
      <Title title={title} />
      {animation}
      <Description description={description} />
    </Container>
  );
};
