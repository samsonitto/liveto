import { Container, Spinner } from "react-bootstrap"

const Loading = () => {
  return (
    <Container className="loading w-100">
      <Spinner animation="border" />
    </Container>
  )
}

export default Loading