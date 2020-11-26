<template>
    <v-app>
        <v-app-bar
            app
            color="primary"
            dark
        >
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                    transition="scale-transition"
                    width="40"
                />

                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn
                :to="{ name: 'home'}"
                text
            >
                <v-icon left>language</v-icon>
                <span class="mr-2">Home</span>
            </v-btn>
            <v-btn
                v-if="!authenticated"
                :to="{ name: 'signin'}"
                text
            >
                <v-icon left>perm_identity</v-icon>
                <span class="mr-2">Sign in</span>
            </v-btn>
            <v-btn
                v-else="!authenticated"
                @click.prevent="signOut"
                text
            >
                <v-icon left>power_settings_new</v-icon>
                <span class="mr-2">Sign out</span>
            </v-btn>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import common from './mixins/common'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'App',
    mixins: [common],
    components: {
    },
    created () {},
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        })
    },
    methods: {
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),
        async signOut () {
            await this.signOutAction()
            this.$router.replace({ name: 'home' })
        }
    }
}
</script>
