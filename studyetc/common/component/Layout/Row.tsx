import styled from "styled-components";

export const Row = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlignedRow = styled(Row)`
  align-content: center;
`;

export const CenterdColumn = styled(Column)`
  justify-content: center;
`;
