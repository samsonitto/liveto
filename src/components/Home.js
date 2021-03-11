import { Container, Row, Spinner } from "react-bootstrap"
import EventInfo from "./EventInfo"

const Home = ({ events }) => {
  return (
    !events ?
    <Container className="loading w-100">
      <Spinner animation="border" />
    </Container>
    :
    <Container>
      <Row className="justify-content-center">
        {events.map(e => 
          <EventInfo eventInfo={e} />
        )}
      </Row>
    </Container>
  )
}

export default Home