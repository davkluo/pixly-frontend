import axios from 'axios';

const BASE_URL = process.env.REACT_APP_PIXLY_API_BASE_URL
  || "http://localhost:5000";

/** API Class
 *
 * Static class tying together methods used to get/send to the API.
 */

class PixlyApi {

  /** Makes a GET request to server to get all images; can take search data*/
  static async getImages(searchData = {}) {
    const response = await axios.get(`${BASE_URL}/api/images`, { params: searchData });
    return response.data.images;
  }

  /** Makes a GET request to server to get an image */
  static async getImage(id) {
    const response = await axios.get(`${BASE_URL}/api/images/${id}`);
    return response.data.image;
  }

  /** Makes a POST request to server to upload an image */
  static async uploadImage(formData) {
    const response = await axios.post(`${BASE_URL}/api/images`, formData);
    return response.data.image;
  }

  static async addView(id) {
    const response = await axios.patch(`${BASE_URL}/api/images/${id}`);
    return response.data.views;
  }

  // TODO:
  /** Makes a GET request to server to get all tags */
  /** Makes a GET request to server to get a tag and its images */
  /** Makes a PUT request to server to update image views */
}

export default PixlyApi;