<template>
    <v-card class="mx-auto my-12"
            max-width="500"
            elevation="2" outlined shaped tile>
        <v-card-title>Login</v-card-title>
        <v-card-text>
            <v-form @submit.prevent="submit">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.email" label="Email" filled required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field type="password" v-model="form.password" label="Password" filled required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                    </v-row>
                </v-container>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-btn color="success" class="mr-4" @click="submit">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'signIn',

    data () {
        return {
            form: {
                email: '',
                password: '',
            }
        }
    },

    methods: {
        ...mapActions({
            signIn: 'auth/signIn'
        }),

        async submit () {
            await this.signIn(this.form)

            this.$router.replace({ name: 'home' })
        }
    }
}
</script>
