// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.bgImg});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeadingText = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 34px;
`
export const TextContent = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 24px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const CustomContainer = styled.div`
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: 300px;
  height: ${props => props.height}px;
`
export const Label = styled.label`
  font-family: roboto;
  color: white;
`

export const InputField = styled.input`
  height: 50px;
  width: 100px;
  border: none;
  background-color: transparent;
  margin-top: 10px;
`

export const GenerateButton = styled.button`
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 6px;
  margin-top: 50px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`
