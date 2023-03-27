import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PixlyApi from './helpers/api';
import NavBar from './NavBar';
import RoutesList from './RoutesList';

import { S3_BASE_URL } from '../config';

const ORIGINALS_FOLDER_PATH = 'pixly/images/originals/';
const THUMBNAILS_FOLDER_PATH = 'pixly/images/thumbnails/';

/** App: renders Navbar and RoutesList
 *
 * state:
 * - images - contains data - array of image objects
 *                     isLoading boolean
 *
 * props: none
 */
function App() {

  const [images, setImages] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function getImagesOnLoad() {
    getAndSetImages();
  }, []);

  async function getAndSetImages(searchData) {
    const images = await PixlyApi.getImages(searchData);
    setImages({
      data: images,
      isLoading: false
    });
  }

  async function uploadImage(imageData) {
    await PixlyApi.uploadImage(imageData);
    getAndSetImages();
  }

  if (images.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList upload={uploadImage} images={images.data} handleSearch={getAndSetImages} />
      </BrowserRouter>
    </div>
  );
}

export default App;
export {
  S3_BASE_URL,
  ORIGINALS_FOLDER_PATH,
  THUMBNAILS_FOLDER_PATH
};
