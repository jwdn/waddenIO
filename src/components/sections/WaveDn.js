import React from "react"
import Wave from "react-wavify"
import styled from "styled-components"

export default function WaveDn(props) {
  const { color } = props
  // warning, jank ahead.
  if (window.matchMedia("min-width: 768px").matches) {
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
  } else {
    return (
      <Wrapper>
        <WaveWrapper>
          <Wave
            fill={color}
            fillOpacity={"0.4"}
            paused={false}
            options={{
              height: 40,
              amplitude: 40,
              speed: 0.175,
              points: 2,
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
              points: 2,
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
              points: 2,
            }}
          />
        </WaveWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  transform: rotate(180deg);
  padding-top: 160px;
  @media screen and (max-width: 767px) {
    padding-top: 200px;
  }
`
const WaveWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  width: 100%;
`
