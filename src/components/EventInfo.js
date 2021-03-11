import { Card } from "react-bootstrap"
import placeholderImage from '../images/placeholder-image.png'

const EventInfo = ({ eventInfo }) => {
  return (
    
      <Card className="list-card m-2" key={eventInfo.slug}>
        <a href={ `/event/${eventInfo.slug}` }>
          <Card.Img className="card-img" src={ eventInfo.event_main_image ? eventInfo.event_main_image : placeholderImage } />
          <Card.Body>
            <Card.Title>{eventInfo.name}</Card.Title>
            <Card.Text>
              {eventInfo.organizer.name}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    
  )
}

export default EventInfo