// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemData, isActive, changeDirection} = props
  const {displayText, value, directionId} = itemData
  const opacity = isActive ? '1' : '0.5'

  const onClickChangeDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <CustomButton
        type="button"
        opacity={opacity}
        onClick={onClickChangeDirection}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}
export default GradientDirectionItem
