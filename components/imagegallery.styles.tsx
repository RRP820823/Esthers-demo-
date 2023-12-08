import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 290px));
  gap: 10px;
`;

export const ImageDiv = styled.div`
  height: 290px;
  width: 290px;
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
  /* border: 1px solid black; */
  position: relative;
  cursor: pointer;
`;

export const SortButton = styled.button`
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(244, 240, 236);
  color: rgb(58, 58, 58);
  border: 1px solid rgb(222, 222, 222);
  padding: 12px 18px;
  max-height: 45px;
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  /* transition: all 0.3s ease 0s; */
  letter-spacing: 0.3px;
  border-radius: 99px;
  cursor: pointer;
`;

export const MainOverlayDiv = styled.div`
  position: "absolute";
  left: "0px";
  top: "0px";
  width: "100%";
  height: "100%";
  background: rgba(58, 58, 58, 0.5);
  display: "flex";
  flex-direction: "column";
  justify-content: "space-between";
  border-radius: "6px";
  padding: "10px";
  opacity: "0.6";
`;

export const LikeOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    height: 30px;
    width: 30px;
    padding: 5px;
    opacity: 1;
    background-color: white;
    border-radius: 50%;
    /* stroke: black; */
  }
`;
