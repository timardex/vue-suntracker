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

                <button class="btn btn-warning mb-3" @click="pushButton(); getCoordinates(); loadSunriseSunset()">{{btnText}}</button>

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

                <div class="show-error-msg text-center mt-4" v-if="showErrorMsg">
                    <h6>Oops! <br> Something went wrong</h6>
                    <p>Please refresh the app and push the <b>Track the Sun</b> button again!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import APIKey from '@/components/APIKey.js'
import LoadingSpinner from '@/components/LoadingSpinner'

export default {
    components: {
        LoadingSpinner,
    },
    computed: {
        ...mapState([
            'sidebarActive',
            'btnText',
            'infoActive',
            'lat',
            'lng',
            'country',
            'sunrise',
            'sunset',
            'timenow',
            'today'
        ])
    },
    data: () => ({
        coordinates: [],
        latitude: null,
        longitude: null,
        showErrorMsg: false,
        APIKey,
    }),
    methods: {
        getPosition(options){
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        },
        getCoordinates() {
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
                return this.$store.dispatch('getCoordinates', {
                    latitude: this.latitude,
                    longitude: this.longitude
                })

            }, 2000)
        },
        loadSunriseSunset() {
            setTimeout(() => {
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lng}&APPID=${this.APIKey}`;
                axios.get(url)
                    .then(response => {
                        return this.$store.dispatch('loadSunriseSunset', response)
                    }).catch(response => {
                        this.showErrorMsg = true
                        return Promise.reject(response)
                    })
            }, 4000)
        },
        toggleSidebar() {
            return this.$store.dispatch('toggleSidebar')
        },
        pushButton() {
            return this.$store.dispatch('pushButton')
        },
    }
}
</script>