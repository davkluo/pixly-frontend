import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './FiltersForm.css';

/** Form for searching by image title or filtering by image properties
 *
 * Prop:
 * - handleSubmit: function to submit form
 * - handleChange: function to handle form inputs
 * - handleCheckboxChange: function to handle checkbox
 * - clearFilters: function to clear filters
 * - formData: current data to display in form
 *
 * RoutesList -> Home -> FiltersForm
 */

function FiltersForm(
  { handleSubmit, handleChange, handleCheckboxChange, clearFilters, formData }
) {

  return (
    <Form className='FiltersForm my-2' onSubmit={handleSubmit}>
      <Form.Group controlId='searchTerm' className='mb-2'>
        <Form.Control
          name='searchTerm'
          type='text'
          placeholder='SEARCH BY TITLE'
          maxLength={50}
          value={formData.searchTerm}
          onChange={handleChange}
        />
      </Form.Group>

      <hr className='my-2'/>

      <small className='mb-2'>FILTERS</small>

      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          name='isFilteringWidth'
          checked={formData.isFilteringWidth}
          onChange={handleCheckboxChange}
        />
        <InputGroup.Text>WIDTH (PX)</InputGroup.Text>
        <Form.Control
          type='number'
          placeholder='MINIMUM'
          name='minWidth'
          value={formData.minWidth}
          disabled={!formData.isFilteringWidth}
          onChange={handleChange}
        />
        <Form.Control
          type='number'
          placeholder='MAXIMUM'
          name='maxWidth'
          value={formData.maxWidth}
          disabled={!formData.isFilteringWidth}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          name='isFilteringHeight'
          checked={formData.isFilteringHeight}
          onChange={handleCheckboxChange}
        />
        <InputGroup.Text>HEIGHT (PX)</InputGroup.Text>
        <Form.Control
          type='number'
          placeholder='MINIMUM'
          name='minHeight'
          value={formData.minHeight}
          disabled={!formData.isFilteringHeight}
          onChange={handleChange}
        />
        <Form.Control
          type='number'
          placeholder='MAXIMUM'
          name='maxHeight'
          value={formData.maxHeight}
          disabled={!formData.isFilteringHeight}
          onChange={handleChange}
        />
      </InputGroup>

      <div class='btn-group'>
        <Button className='py-0' variant='link' type='submit'>APPLY</Button>
        <Button className='py-0' variant='link' onClick={clearFilters}>CLEAR</Button>
      </div>
    </Form>
  );
}


export default FiltersForm;;