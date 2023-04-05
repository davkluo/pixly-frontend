import { Routes, Route } from 'react-router-dom';
import Home from '../homepage/Home';
import ImageDetail from '../images/ImageDetail';
import ImageForm from '../images/ImageForm';

function RoutesList({ images, upload, handleSearch }) {
  return (
    <Routes>
      <Route path='/' element={<Home images={images} handleSearch={handleSearch} />} />
      <Route path='/:id' element={<ImageDetail />} />\
      <Route path='/new' element={<ImageForm upload={upload} />} />
    </Routes>
  );
}

export default RoutesList;