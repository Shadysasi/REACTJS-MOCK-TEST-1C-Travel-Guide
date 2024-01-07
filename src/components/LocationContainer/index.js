import {
  LocationListItem,
  LocationCardContainer,
  LocationImage,
  Heading,
  HeadingDescriptionContainer,
  Paragraph,
} from './styledComponents'

const LocationContainer = props => {
  const {locationDetails} = props
  const {name, imageUrl, description} = locationDetails
  return (
    <LocationListItem className="list-location">
      <LocationCardContainer>
        <LocationImage src={imageUrl} alt={name} className="image" />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </LocationListItem>
  )
}

export default LocationContainer
