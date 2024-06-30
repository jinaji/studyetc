import React, { useState } from "react";
import styled from "styled-components";
import { AlignedRow } from "../Layout/Row";
import { Animation } from "./Animation";

const TextContainer = styled.span<{ upDown: number }>`
  @keyframes moveText {
    from {
      transform: translateY(70%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes moveTextReverse {
    from {
      transform: translateY(-70%);
    }
    to {
      transform: translateY(0%);
    }
  }

  animation: ${({ upDown }) => (upDown % 2 ? "moveText" : "moveTextReverse")}
    0.1s;
  overflow: hidden;
`;

export const RollingText = () => {
  const [text, setText] = useState("");

  return (
    <Animation
      title={"Rolling Text"}
      animation={
        <>
          <input
            style={{
              border: "none",
              borderRadius: 6,
              height: 20,
              width: "100%",
            }}
            onChange={(e) => setText(e.target.value)}
          />
          <AlignedRow>
            {Array.from(text).map((c, index) => {
              return (
                <TextContainer key={c + index} upDown={Math.random()}>
                  {c}
                </TextContainer>
              );
            })}
          </AlignedRow>
        </>
      }
      description={
        "숫자가 아래위에서 나타남 ... 이름이 이게 최선이었나?\n" +
        "띄어쓰기 안 보이고 한글은 글자 변동 있을 때마다 (자음 + 모음 + 자음 ...) 계속 변동 "
      }
    />
  );
};
