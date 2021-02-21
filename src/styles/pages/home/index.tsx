import styled from 'styled-components'

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  background-color: #282c34;
  svg {
    width: 300px;
    height: 300px;
    pointer-events: none;
  }
  p {
    margin-bottom: 48px;
  }
  a {
    color: white;
  }
`
