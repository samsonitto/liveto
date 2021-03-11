import { Alert } from "react-bootstrap"

const EventStatus = ({ status }) => {
  return (
    status === "ongoing"
    ?
    <Alert variant="success">
      <h4>The event is in progress</h4>
    </Alert>
    :
    status === "upcoming"
    ?
    <Alert className="text-center mt-3" variant="info">
      <h4>The event is coming up</h4>
    </Alert>
    :
    status === "past"
    ?
    <Alert variant="danger">
      <h4>The event is finished</h4>
    </Alert>
    :
    <Alert variant="danger">
      <h4>There is no date for this event</h4>
    </Alert>
  )
}

export default EventStatus