import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PixlyApi from './helpers/api';
import NavBar from './nav/NavBar';
import RoutesList from './nav/RoutesList';
import Loader from './common/Loader';

const S3_BASE_URL = process.env.REACT_APP_AWS_BUCKET_BASE_URL;

const ORIGINALS_FOLDER_PATH = 'pixly/images/originals/';
const THUMBNAILS_FOLDER_PATH = 'pixly/images/thumbnails/';

/** App: renders Navbar and RoutesList
 *
 * State:
 * - images: contains data - array of image objects
 *                     isLoading boolean
 *
 * App -> { NavBar, RoutesList }
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
    let image;

    try {
      image = await PixlyApi.uploadImage(imageData);
      getAndSetImages();
    } catch (err) {
      console.error(err);
    }

    return image !== undefined;
  }

  if (images.isLoading) {
    return <Loader />;
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
