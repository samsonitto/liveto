import { useEffect, useState } from "react"
import { Container, Card, Col, Row, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { initializeOneEvent } from "../reducers/eventReducer"
import { dateComparison } from "../utilities/dateComparison"
import EventStatus from "./EventStatus"
import placeholderImage from '../images/placeholder-image.png'
import { Alert } from "react-bootstrap"
import Loading from "./Loading"

const EventDetails = () => {
  const [eventSlug] = useState(useParams().slug)
  const [error, setError] = useState({ text: "", hidden: true, variant: "danger" })

  const dispatch = useDispatch()

  useEffect(() => {
    // Haetaan tapahtuma rajapinnasta ja tallennetaan redux storeen
    dispatch(initializeOneEvent(eventSlug))
      .catch(error => {
        setError({ text: error.message, hidden: false, variant: "danger" })
      })
  }, [eventSlug])

  // Haetaan tapahtuma statesta
  const event = useSelector(state => {
    return state.activeEvent
  })

  return (
    !event
    ?
    <div>
      <Alert variant={error.variant} hidden={error.hidden}>{error.text}</Alert>
      <Loading />
    </div>
    :
    <Container className="mt-5">
    <Alert variant={error.variant} hidden={error.hidden}>{error.text}</Alert>
    <Row>
      <Col sm={4}>
        <Image className="border" fluid src={event.event_main_image ? event.event_main_image : placeholderImage} />
      </Col>
      <Col sm={8}>
        <div className="border-0">
          <Card.Body className="py-0">
            <h1>{event.name}</h1>
            <hr />
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