import React from "react"
import Wave from "react-wavify"
import styled from "styled-components"

export default function WaveUp(props) {
  const { color } = props
  return (
    <Wrapper>
      <WaveWrapper>
        <Wave
          fill={color}
          fillOpacity={"0.4"}
          paused={false}
          options={{
            height: 40,
            amplitude: 50,
            speed: 0.15,
            points: 5,
          }}
        />
      </WaveWrapper>
      <WaveWrapper>
        <Wave
          fill={color}
          fillOpacity={"0.6"}
          paused={false}
          options={{
            height: 60,
            amplitude: 40,
            speed: 0.15,
            points: 4,
          }}
        />
      </WaveWrapper>
      <WaveWrapper>
        <Wave
          fill={color}
          fillOpacity={"1"}
          paused={false}
          options={{
            height: 80,
            amplitude: 30,
            speed: 0.2,
            points: 3,
          }}
        />
      </WaveWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`
const WaveWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  width: 100%;
`
