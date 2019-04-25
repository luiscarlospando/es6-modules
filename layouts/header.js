import { userProfile } from '../components/user-profile';

class Header {

    loadHeader() {

        // Invoke the method (component)
        userProfile.loadUserProfile();

        // Output loading status
        console.log('Header component is loaded...');

    }

}

export let header = new Header();