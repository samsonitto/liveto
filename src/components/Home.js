import { Container, Row } from "react-bootstrap"
import EventInfo from "./EventInfo"

const Home = ({ events }) => {
  return (
    !events ?
    <Container>Loading</Container>
    :
    <Container>
      <Row>
        {events.map(e => 
          <EventInfo eventInfo={e} />
        )}
      </Row>
    </Container>
  )
}

export default Home