import Card from 'react-bootstrap/Card';
import { GeoAltFill } from 'react-bootstrap-icons';
import "./ExifData.css";
const GOOGLE_MAPS_BASE_URL = "https://www.google.com/maps/@";


/** Card displaying EXIF data for an image
 *
 * Props:
 * - exifData: Object with image exif data
 *
 * ImageDetail -> ExifData
 */
function ExifData({ exifData }) {
  return (
    <Card className='w-100'>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Image Details</Card.Subtitle>
        {exifData?.device_manufacturer && exifData?.device_model && <Card.Text>
          Device: {exifData.device_manufacturer} {exifData.device_model}
        </Card.Text>}
        {exifData?.exposure && <Card.Text>
          Exposure: 1/{exifData.exposure}
        </Card.Text>}
        {exifData?.f_stop && <Card.Text>
          F-Stop: {exifData.f_stop.toFixed(1)}
        </Card.Text>}
        {exifData?.focal_length && <Card.Text>
          Focal Length: {exifData.focal_length}mm
        </Card.Text>}
        {exifData?.width_px && exifData?.height_px && <Card.Text>
          Image Size: {exifData.width_px} X {exifData.height_px}
        </Card.Text>}
        {
          exifData.location &&
          <Card.Link
            className='geo'
            href={`${GOOGLE_MAPS_BASE_URL}${exifData.location},15z`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GeoAltFill />
          </Card.Link>
        }
      </Card.Body>
    </Card>
  );
}

export default ExifData;