import React from 'react';
import ImageContainer from "./ImageContainer";
import FiltersForm from './FiltersForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import './Home.css';

/**Home
 * state: none
 * props: images - array of image objects
 *
 * RoutesList -> Home
 */
function Home({ images, handleSearch }) {
  const searchPopover = (
    <Popover id="searchPopover">
      <Popover.Body>
        <FiltersForm handleSearch={handleSearch}/>
      </Popover.Body>
    </Popover>
  )
  return (
    <>
      {/* <Container>
        <Row className='mt-4 mb-3 d-flex justify-content-center'>
          <Col xs={8}>
            <FiltersForm handleSearch={handleSearch} />
          </Col>
        </Row>
      </Container> */}
      <ImageContainer className='mb-5' images={images} />
      <OverlayTrigger trigger='click' placement='top' overlay={searchPopover}>
        <Button id='search-btn' variant='link'>SEARCH & FILTER</Button>
      </OverlayTrigger>
    </>
  );
}

export default Home;