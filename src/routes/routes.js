import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'ContactList',
        path: '/',
        component: ContactList
    },
    {
        name: 'AddContact',
        path: '/add-contact',
        component: AddContact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;