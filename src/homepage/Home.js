import React, { useState } from 'react';
import ImageContainer from "../images/ImageContainer";
import FiltersForm from './FiltersForm';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import './Home.css';

const INITIAL_FORM_DATA = {
  searchTerm: "",
  isFilteringWidth: false,
  minWidth: '',
  maxWidth: '',
  isFilteringHeight: false,
  minHeight: '',
  maxHeight: ''
};

/** Home page with gallery and search/filter form
 *
 * Prop:
 * - images: array of image objects
 * - handleSearch: function to call on search form submit
 *
 * State:
 * - formData: Object corresponding to data in the form
 *
 * RoutesList -> Home
 */
function Home({ images, handleSearch }) {
  // Form data kept here because FiltersForm does not maintain state when
  // popover is opened and closed
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  /**Fires parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
  }

  /** Update formData state with input text fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: value
    }));
  }

  /** Update formData state with checkbox text fields */
  function handleCheckboxChange(evt) {
    const { name, checked } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: checked
    }));
  }

  /** sets formData to initialFormData and calls handleSearch with initialFormData */
  function clearFilters() {
    setFormData(INITIAL_FORM_DATA);
    handleSearch(INITIAL_FORM_DATA);
  }

  const searchPopover = (
    <Popover id="searchPopover">
      <Popover.Body>
        <FiltersForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          clearFilters={clearFilters}
          formData={formData}
        />
      </Popover.Body>
    </Popover>
  );
  return (
    <div className='HomePage'>
      <ImageContainer className='mb-5' images={images} />
      <OverlayTrigger trigger='click' placement='top' overlay={searchPopover}>
        <Button id='search-btn' variant='link'>SEARCH & FILTER</Button>
      </OverlayTrigger>
    </div>
  );
}

export default Home;