import styled, { keyframes } from "styled-components";

export const AnimApparition = styled.div`
  animation: ReverseFade 7s ease;
`;

export const ReverseFade = keyframes`
from {
    opacity(0);
  }
  to {
    opacity(1);
  }
`;
