<template>
    <div class="container">
        <div class="row mt-3">
            <div class="alert alert-danger mt-3" v-if="errors.length">
                <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </li>
            </div>
            <div class="col-6 col-md-6 col-sm-12">
                <form @submit.prevent="saveContact">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="contact.name" id="name" placeholder="Name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" v-model="contact.email" id="email" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="Designation" class="form-label">designation</label>
                        <input type="text" class="form-control" v-model="contact.designation" id="designation" placeholder="Designation">
                    </div>
                    <div class="mb-3">
                        <label for="contact-no" class="form-label">Contact No</label>
                        <input type="text" class="form-control" v-model="contact.contact_no" id="contact-no" placeholder="name@example.com">
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : 'AddContact',
    data() {
        return {
            contact: {},
            name:'',
            email: '',
            designation:'',
            contact_no:'',
            errors: [],
        }
    },
    methods: {
        saveContact() {
            this.errors = [];
            if(!this.contact.name) {
                this.errors.push('Name is required')
            }
            if(!this.contact.email) {
                this.errors.push('Email is required')
            }
            if(!this.contact.designation) {
                this.errors.push('Dedignation is required')
            }
            if(!this.contact.contact_no) {
                this.errors.push('Contact No is required')
            }

            if(!this.errors.length) {
                console.log(this.contact)
                let url = 'http://127.0.0.1:8000/api/contacts';
                axios.post(url, this.contact)
                .then(function (resp) {
                    if(resp.data.status == 200) {
                        this.contact.name = '';
                        this.contact.email = '';
                        this.contact.designation = '';
                        this.contact.contact_no = '';
                        alert(resp.data.message)
                    }
                })
                .catch(function(e) {
                    console.log(e)
                })
            }
        }
    }
}
</script>

<style>

</style>