<template>
    <div class="container">
        <div class="row mt-3">
            <table class="table table-hover">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Designation</th>
                <th scope="col">Contact No</th>
            </thead>
            <tbody>
                <tr class="table-secondary" v-for="(contact, index) in contacts" :key="index">
                    <td>{{ contact.id}}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.designation }}</td>
                    <td>{{ contact.contact_no}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ContactList',
    data() {
        return {
            contacts: {},
        }
    },
    methods: {
        async getContacts() {
            let url = 'http://127.0.0.1:8000/api/contacts';
            await axios.get(url)
            .then(resp => {
                this.contacts = resp.data.contacts;
                console.log(this.contacts);
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getContacts();
    },
    mounted() {
        console.log('Contact mounted')
    }
}
</script>

<style>

</style>