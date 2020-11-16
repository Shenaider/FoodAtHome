
<template>
<div>
    <div class="jumbotron">
        <h1>Users</h1>
    </div>
    <users :users="users" @edit-user="editUser" @delete-user="deleteUser"></users>


    <div class="alert alert-success"
         v-if="successMessage || failMessage"
         v-bind:class="{'alert-success':successMessage, 'alert-danger':failMessage}">
        <button type="button" class="close-btn" @click="closeMessage()">&times;</button>
        <strong>@{{successMessage || failMessage}}</strong>
    </div>

    <edit-user v-if="editingUser" :user="currentUser" @save-user="saveUser" @cancel-edit="cancelEdit"></edit-user>
</div>
</template>

<script>
import EditUserComponent from './components/edit_user.vue'
export default{
    data:function(){
        return {
            title: 'List Users',
            editingUser: false,
            showSuccess: false,
            showFailure: false,
            successMessage: '',
            failMessage: '',
            currentUser: {},
            users: [],
            departments: []
        }

    },
    methods: {
        editUser: function (user) {
            this.currentUser = Object.assign({},user);
            this.editingUser = true;
        },
        deleteUser: function (user) {
            axios.delete(`/api/users/${this.currentUser.id}`, this.currentUser)
                .then(result=>{
                    this.users.splice(this.users.findIndex(u=>u.id==user.id),1);
                    this.failMessage = '';
                    this.successMessage = 'User Deleted';
                })
                .catch(reason=>{
                    this.successMessage = '';
                    this.failMessage = 'Error Deleting User';
                })
        },
        saveUser: function () {
            axios.put(`/api/users/${this.currentUser.id}`, this.currentUser)
                .then(result=>{
                    const user = result.data.data;
                    Object.assign(this.users.find( u => u.id == user.id ), user);
                    this.failMessage = '';
                    this.successMessage = 'User Updated';
                })
                .catch(reason=>{
                    this.successMessage = '';
                    this.failMessage = 'Error Updating User';
                })
        },
        cancelEdit: function () {
            this.currentUser = {};
            this.editingUser = false;
        },
        closeMessage: function () {
            this.successMessage = '';
            this.failMessage = '';
        }
    },
    mounted () {
        axios.get('api/users').then(response=>{
            this.users = response.data.data;
        });
        axios.get('api/departments').then(response=>{
            this.departments = response.data.data;
        });
    },
    components:{
        'edit-user': EditUserComponent
    }
}
</script>
