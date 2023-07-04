import styled from "styled-components";

export const IconWrapper = styled.span<{ disabled?: boolean }>`
  width: 30px;
  text-align: center;
  border-radius: 10%;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
