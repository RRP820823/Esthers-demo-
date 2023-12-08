import Header from "@/components/Header";
import ImageGallery from "@/components/ImageGallery";
import styled from "styled-components";

export const InspirationWrapper = styled.div`
  padding-top: 65px;
  padding-right: 25px;
`;
export default function Home() {
  return (
    <InspirationWrapper>
      <Header />
      <ImageGallery/>
    </InspirationWrapper>
  );
}
