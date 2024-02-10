import ImageCard from "./ImageCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/** Image container displaying grid of images
 *
 * Props:
 * - images: array of image objects
 *
 * Home -> ImageContainer -> ImageCard
 */

function ImageContainer({ images }) {
  return (
    <div className='ImageContainer my-3'>
      <Container>
        <Row>
          {images.map(image =>
            <Col xs={8} sm={4} md={3} lg={2} className='mx-auto my-3 d-flex justify-content-center' key={image.file_name}>
              <ImageCard image={image} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ImageContainer;


