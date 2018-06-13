import fontawesome from '@fortawesome/fontawesome';

import faMapMarker from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import farCalendarAlt from '@fortawesome/fontawesome-free-regular/faCalendarAlt';

const registerFontAwesome = () => {
  fontawesome.library.add(faMapMarker, faSearch, farCalendarAlt);
};

export default registerFontAwesome;
