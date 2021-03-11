import { Container, Row, Spinner } from "react-bootstrap"
import EventInfo from "./EventInfo"
import Loading from "./Loading"

const Home = ({ events }) => {
  return (
    !events ?
    <Loading />
    :
    <Container>
      <Row className="text-center justify-content-center"><h1 className="mt-3">EVENTS</h1></Row>
      <hr />
      <Row className="justify-content-center">
        {events.map((e, i) => 
          <EventInfo key={i} eventInfo={e} />
        )}
      </Row>
    </Container>
  )
}

export default Home