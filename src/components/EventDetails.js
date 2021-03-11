import { useEffect, useState } from "react"
import { Container, Spinner, Card, Col, Row, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { initializeOneEvent } from "../reducers/eventReducer"
import { dateComparison } from "../utilities/dateComparison"
import EventStatus from "./EventStatus"
import placeholderImage from '../images/placeholder-image.png'

const EventDetails = () => {
  const [eventSlug] = useState(useParams().slug)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeOneEvent(eventSlug))
  }, [eventSlug])

  const event = useSelector(state => {
    return state.activeEvent
  })

  return (
    !event
    ?
    <Container className="loading w-100">
      <Spinner animation="border" />
    </Container>
    :
    <Container className="mt-5">
    <Row>
      <Col sm={4}>
        <Image fluid src={event.event_main_image ? event.event_main_image : placeholderImage} />
      </Col>
      <Col sm={8}>
        <div className="border-0">
          <Card.Body className="py-0">
            <h1>{event.name}</h1>
            <Card.Text>
              {event.short_description}
            </Card.Text>
            {event.venue
            ?
              <div>
                <p><b>Venue: </b>{event.venue}</p>
                <p><b>Address: </b>{event.venue_address}</p>
              </div>
            :
              ""
            }

            {event.tags.length > 0
            ?
              <p><b>Event Tags: </b>{event.tags.join(', ')}</p>
            :
              ""
            }
          </Card.Body>
        </div>
      </Col>
    </Row>
    <EventStatus status={dateComparison(event.start_time, event.end_time)} />
    </Container>
  )
}

export default EventDetails