<template>
    <div class="jumbotron">
        <h2>Edit User</h2>
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="text" class="form-control" v-model="user.age" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Department</label>
                <select class="form-control" v-model="user.department_id">
                    <option v-for="deparment of deparments" v-bind:value="deparment.id"> {{department.name}}</option>
                </select>
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
    props:['user','departments'],
    methods:{
        saveUser(){
            this.$emit('save-user')
        },
        cancelEdit(){
            this.$emit('cancel-edit')
        }
    },
    mounted () {
        axios.get('api/departments').then(response=>{
            this.departments = response.data.data;
        });
    }
}
</script>

<style scoped>

</style>
