// From components folder
// import { Users } from '../components/users.js';
// import { Issues } from '../components/issues.js';

import { users, issues } from '../components';

// From layouts folder
// import { Header } from '../layouts/header.js';
// import { Sidebar } from '../layouts/sidebar.js';

import { header, sidebar } from '../layouts'; 

class Dashboard {

    loadDashboard() {

        // Create new instances
        // const users = new Users();
        // const issues = new Issues();
        // const header = new Header();
        // const sidebar = new Sidebar();

        // Invoke methods
        users.loadUsers();
        issues.loadIssues();
        header.loadHeader();
        sidebar.loadSidebar();

        console.log('Dashboard component is loaded...');
    }

}

// export { Dashboard }
export let dashboard = new Dashboard();