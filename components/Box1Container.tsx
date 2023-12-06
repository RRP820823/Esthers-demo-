import * as React from "react"
import styled from "styled-components"

function Box1Container() {
  return (
    <Container>
      <Box>
        <Div>
          <Img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cb8827089c785c586c608d7668ae16a359e9a64ad595fc205ee7bdcfec9fda6?"
          />
          <Div2>Click to upload or drag and drop</Div2>
        </Div>
      </Box>
      <Box2>
        <Div3>
          <Img2
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0909fe3b19ce8e9c97277b98c100e8d8a2dc16d3de02ed78cbd6b2e1f3be7df?"
          />
          <Div4>Choose from Instagram</Div4>
        </Div3>
      </Box2>
    </Container>
  )
}

const Container = styled.div`
  justify-content: center;
  height: auto;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: -2px;
  /* border: 1px solid black; */
  @media (max-width: 991px) {
    width: 40%;
    border-style: solid;
    border-width: 1px;
    margin: 0 auto;
  }
`

const Box = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
  border: 1px dashed #d9d9d9;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

const Div = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 150px;
  max-width: 100%;
  flex-direction: column;
  margin: 9px 0 8px;
  padding: 0 9px;
`

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`

const Div2 = styled.div`
  align-self: stretch;
  color: var(--Green, #34554a);
  text-align: center;
  margin-top: 8px;
  font: 500 16px Strawford, sans-serif;
`

const Box2 = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 6px 6px;
  border: 1px dashed #d9d9d9;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

const Div3 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 150px;
  max-width: 100%;
  flex-direction: column;
  margin: 9px 0;
  padding: 0 7px;
`

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 23px;
  overflow: hidden;
  max-width: 100%;
`

const Div4 = styled.div`
  align-self: stretch;
  color: var(--Green, #34554a);
  text-align: center;
  margin-top: 8px;
  font: 500 16px Strawford, sans-serif;
`

export default Box1Container
