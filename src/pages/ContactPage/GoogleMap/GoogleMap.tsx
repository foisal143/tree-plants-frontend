import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import HeadingText from '../../../components/HeadingText';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon not showing correctly in Leaflet with Webpack or CRA
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Container from '../../../components/Container';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
type LatLngTuple = [number, number];
const GoogleMap = () => {
  const position: LatLngTuple = [37.7749, -122.4194];
  return (
    <Container>
      <section className="py-12">
        <div className="w-full  py-12 ">
          <HeadingText style="text-center" heading="Visit Our Nursery" />
          {/* Replace with actual Google Map Embed */}
          <div className="mt-12 rounded-lg overflow-hidden">
            <MapContainer
              center={position} // Correct type as LatLngTuple (tuple [number, number])
              zoom={13}
              style={{ height: '400px', width: '100%', zIndex: 'inherit' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default GoogleMap;
