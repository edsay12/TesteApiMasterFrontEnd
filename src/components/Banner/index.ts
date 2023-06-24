import styled from "styled-components";
import banner from "../../assets/Img/banner.jpg";

export const Banner = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(${banner});
  background-position: center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content:center;
`;
