import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  HeadingText,
  TextContent,
  ListContainer,
  FormContainer,
  GenerateButton,
  CustomContainer,
  InputField,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradientDirection: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  changeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  changeDirection = direction => {
    this.setState({
      direction,
    })
  }

  generateGradient = event => {
    event.preventDefault()
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      gradientDirection: `to ${direction},${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, direction, gradientDirection} = this.state
    return (
      <AppContainer bgImg={gradientDirection} data-testid="gradientGenerator">
        <HeadingText color="white">Generate a CSS color Gradient</HeadingText>
        <TextContent>Choose Direction</TextContent>
        <ListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              itemData={eachItem}
              key={eachItem.directionId}
              isActive={eachItem.value === direction}
              changeDirection={this.changeDirection}
            />
          ))}
        </ListContainer>
        <TextContent>Pick the Colors</TextContent>
        <FormContainer
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          onSubmit={this.generateGradient}
        >
          <CustomContainer
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomContainer
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextContent>{firstColor}</TextContent>
              <br />
              <InputField
                type="color"
                id={firstColor}
                value={firstColor}
                onChange={this.changeFirstColor}
              />
            </CustomContainer>
            <CustomContainer
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <TextContent>{secondColor}</TextContent>
              <br />
              <InputField
                type="color"
                id={secondColor}
                value={secondColor}
                onChange={this.changeSecondColor}
              />
            </CustomContainer>
          </CustomContainer>
          <GenerateButton type="submit">Generate</GenerateButton>
        </FormContainer>
      </AppContainer>
    )
  }
}
export default GradientGenerator
