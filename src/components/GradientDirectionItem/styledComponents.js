// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 10px;
`
export const CustomButton = styled.button`
  background-color: white;
  height: 30px;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  opacity: ${props => props.opacity};
`
