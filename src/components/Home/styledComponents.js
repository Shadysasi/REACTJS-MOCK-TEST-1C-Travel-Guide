import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background-color: #eef4f7;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  margin-bottom: 0px;
`
export const HorizontalLine = styled.hr`
  width: 10vw;
  height: 4px;
  background-color: #52bbf0;
  margin-top: 0px;
`
export const LocationsContainer = styled.div`
  width: 100%;
  min-height: 80vh;
`
export const LocationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
