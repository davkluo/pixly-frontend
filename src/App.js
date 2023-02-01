import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const BASE_URL = "http://localhost:5002/api/images";

function App() {
  const [file, setFile] = useState();
  const [isFileChosen, setIsFileChosen] = useState(false);

  function handleChange(evt) {
    setFile(evt.target.files[0]);
    setIsFileChosen(true);
    console.log('File chosen');
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('File', file);
    uploadFile(formData);

  }

  async function uploadFile(formData) {
    const response = await axios.post(BASE_URL, formData);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formFile'>
          <Form.Label>Choose an image</Form.Label>
          <Form.Control
            name='imgFile'
            type='file'
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
