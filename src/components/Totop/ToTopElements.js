import styled from "styled-components";

export const ArrowUpContainer = styled.div`
  position: relative;
  display: flex;
`

export const ArrowIcon = styled.div`
position: absolute;
  bottom: 5px;
  right: 25px;
  color: cornsilk;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  animation: movebtn 3s linear infinite;
  transition: all .5s ease-in-out;

  &:hover {
  animation: none;
  color: aqua;
  }
`