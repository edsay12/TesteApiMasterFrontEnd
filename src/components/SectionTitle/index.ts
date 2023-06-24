import styled from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex: 1;
  margin-bottom: 20px;
  margin-top: 20px;

  gap: 20px;
  &::after {
    content: "";
    flex: 1;
    background-color: #0000008a;
    height: 2px;
  }
  &::before {
    content: "";
    flex: 1;
    background-color: #0000008a;
    height: 2px;
  }
`;
