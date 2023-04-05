import './ImageCard.css';
import { S3_BASE_URL, THUMBNAILS_FOLDER_PATH } from '../App';
import { Link } from 'react-router-dom';


/** Image preview card
 *
 * Props:
 * - image: image object
 *
 * ImageContainer -> ImageCard
 */
function ImageCard({ image }) {
  return (
    <div className='ImageCard my-2 mx-2'>
      <Link to={`/${image.id}`}>
        <img
          src={`${S3_BASE_URL}${THUMBNAILS_FOLDER_PATH}${image.file_name}`}
          alt={image.title}
        />
      </Link>
    </div>
  );
};

export default ImageCard;