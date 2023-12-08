import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 50px;
  gap: 13px;
`;

export const TitleContainer = styled.h1`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  color: #3a3a3a;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
  padding-left: 43px;
`;

export const FilterContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 189px));
  gap: 10px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-right: -15px;
    padding-bottom: 25px;
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
  }
`;

export const SingleFilterCard = styled.div`
  height: 189px;
  /* border: 1px solid blue; */
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  background-color: rgba(244, 240, 236, 1);
  position: relative;
`;

export const OverlayDiv = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: column;
  p {
    /* Style for the text inside OverlayDiv */
    color: white;
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
`;
