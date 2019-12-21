<template>
    <div class="information" :class="[sidebarActive ? 'active' : 'inactive']">
        <div class="trigger-sidebar" @click="toggleSidebar()">
            <img :src="require(`../assets/menu-arrow-${sidebarActive ? 'right' : 'left'}.png`)" alt="Open close menu" />
        </div>

        <div class="inner text-center">
            <div class="inner-info">
                <h1>Sun Tracker</h1>

                <p class="text-left">
                    This app is a live Sun tracker which is using your geolocation (Latitude and Longitude). You need to give access for the app to use it!
                </p>

                <button class="btn btn-warning mb-3">{{btnText}}</button>

                <div class="info-list text-left" v-if="infoActive">
                    <p class="text-center">This is your information:</p>
                    <ul>
                        <li><u>Latitude</u>: <i>{{lat}}</i></li>
                        <li><u>Longitude</u>: <i>{{lng}}</i></li>
                        <li><u>Country</u>: <i>{{country}}</i></li>
                        <li><u>Sunrise</u>: <i>{{sunrise}}</i></li>
                        <li><u>Sunset</u>: <i>{{sunset}}</i></li>
                        <li><u>Time now</u>: <i>{{timenow}}</i></li>
                        <li><u>Date</u>: <i>{{today}}</i></li>
                    </ul>
                </div>

                <LoadingSpinner />
            </div>
        </div>
    </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner'
export default {
    components: {
        LoadingSpinner
    },
    data() {
        return {
            coordinates: [],
            latitude: null,
            longitude: null
        }
    },
    methods: {
        getPosition(options){
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        },

        thePosition() {
            this.getPosition()
            .then((position) => {
                this.coordinates.push({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            })
            .catch((err) => {
                console.error(err.message);
            });

            setTimeout(() => {
                this.latitude = parseFloat(this.coordinates.map(val => val.lat))
                this.longitude = parseFloat(this.coordinates.map(val => val.lng))
            }, 1000)
        },
        toggleSidebar() {
            return this.$store.dispatch('toggleSidebar')
        }
    },
    mounted() {
        this.thePosition()
    },
    computed: {
        sidebarActive() {
            return this.$store.state.initialState.sidebarActive
        },
        btnText() {
            return this.$store.state.initialState.btnText
        },
        infoActive() {
            return this.$store.state.initialState.infoActive
        },
        lat() {
            return this.$store.state.initialState.lat
        },
        lng() {
            return this.$store.state.initialState.lng
        },
        country() {
            return this.$store.state.initialState.country
        },
        sunrise() {
            return this.$store.state.initialState.sunrise
        },
        sunset() {
            return this.$store.state.initialState.sunset
        },
        timenow() {
            return this.$store.state.initialState.timenow
        },
        today() {
            return this.$store.state.initialState.today
        },
    },
}
</script>