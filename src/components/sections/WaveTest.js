import React from "react"
import Wave from "react-wavify"
import styled from "styled-components"

export default function WaveTest() {
  return (
    <Wrapper>
      <WaveWrapper>
        <Wave
          style={{}}
          fill={"#66ccff"}
          fillOpacity={"0.75"}
          paused={false}
          options={{
            height: 70,
            amplitude: 50,
            speed: 0.15,
            points: 4,
          }}
        ></Wave>
      </WaveWrapper>
      <WaveWrapper>
        <Wave
          style={{
            backdropFilter: "blur(20px)",
          }}
          fill={"#66ccff"}
          fillOpacity={"0.75"}
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.2,
            points: 4,
          }}
        />
      </WaveWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const WaveWrapper = styled.div`
  position: absolute;
  width: 100%;
`
