<template>
    <div class="jumbotron">
        <h2>Edit User</h2>
        <form>
            <div class="form-group">
                <label>Type</label>
                <input type="text" class="form-control" v-model="user.type" />
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click.prevent="saveUser()">Save</button>
                <button class="btn btn-danger" v-on:click.prevent="cancelEdit()">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:['user'],
    methods:{
        saveUser(){
            this.$emit('save-user')
        },
        cancelEdit(){
            this.$emit('cancel-edit')
        }
    },
    mounted () {
        axios.get('api/users').then(response=>{
            this.users = response.data.data;
        });
    }
}
</script>

<style scoped>

</style>
