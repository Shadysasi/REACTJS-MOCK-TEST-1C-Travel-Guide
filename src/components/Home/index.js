import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'

import {
  AppContainer,
  Heading,
  HorizontalLine,
  LocationsContainer,
  LoaderContainer,
  LocationList,
} from './styledComponents'

class Home extends Component {
  state = {isLoading: false, travelLocationList: []}

  componentDidMount() {
    this.getTravelList()
  }

  getTravelList = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {method: 'GET'}
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.packages.map(eachItem => ({
        description: eachItem.description,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
      }))
      this.setState({travelLocationList: updatedData, isLoading: false})
    }
  }

  renderLocationView = () => {
    const {travelLocationList} = this.state
    return (
      <LocationList>
        {travelLocationList.map(eachLocation => (
          <LocationContainer
            key={eachLocation.id}
            locationDetails={eachLocation}
          />
        ))}
      </LocationList>
    )
  }

  renderLoaderView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderContainer>
  )

  render() {
    const {isLoading} = this.state
    return (
      <AppContainer>
        <Heading>Travel Guide</Heading>
        <HorizontalLine />
        <LocationsContainer>
          {isLoading ? this.renderLoaderView() : this.renderLocationView()}
        </LocationsContainer>
      </AppContainer>
    )
  }
}
export default Home
