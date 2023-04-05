import { Routes, Route } from 'react-router-dom';
import Home from '../homepage/Home';
import ImageDetail from '../images/ImageDetail';
import ImageForm from '../images/ImageForm';


/** Routes list component for site routing/navigation
 *
 * Props:
 * - images: array of image objects
 * - upload: function to upload an image
 * - handleSearch: function to search/filter images
 *
 * App -> RoutesList -> { Home, ImageDetail, ImageForm }
 */
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