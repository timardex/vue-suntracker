import Vue from 'vue'
import Vuex from 'vuex'
import initialState from './initialState'
import {convertAMPMto24h, convertTimestamp} from './helpers'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    initialState
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.initialState.sidebarActive = !state.initialState.sidebarActive;
    },
    PUSH_BTN: (state) => {
      state.initialState.btnText = 'Calculating ...';
      state.initialState.loading_calculation = true;
      state.initialState.infoActive = false;
    },
    GET_COORDINATES: (state, payload) => {
      state.initialState.lat = payload.latitude;
      state.initialState.lng = payload.longitude;
      state.initialState.btnText = 'Track the Sun';
      state.initialState.loading_calculation = false;
      state.initialState.infoActive = true;
    },
    LOAD_SUNRISE_SUNSET: (state, payload) => {
      let sunrise = convertAMPMto24h(payload.data.sys.sunrise);
      let sunset = convertAMPMto24h(payload.data.sys.sunset);

      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours.toString();
      minutes = minutes.toString();

      let timenow = hours + minutes;

      let dd = String(date.getDate()).padStart(2, '0');
      let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = date.getFullYear();

      sunrise = sunrise.substring(0, sunrise.length - 1);
      sunset = sunset.substring(0, sunset.length - 1);
      timenow = timenow.substring(0, timenow.length - 1);

      sunrise = parseInt(sunrise);
      sunset = parseInt(sunset);
      timenow = parseInt(timenow);
  
      let dusk = sunrise - 10;
      let down = sunset + 10;
  
      let noon = sunset - sunrise;
      noon = noon / 2;
      noon = noon + sunrise;

      let _sunStyle, _sunUpDown = 'up', _boolean, _scenery;
      if (timenow >= sunrise && timenow <= noon) {
          _sunStyle = timenow - sunrise;
          _sunUpDown = 'up';
          _boolean = true;
          _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(155,194,204,1) 100%)';

          if (_sunStyle < 15) {
              _scenery ='linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(255,127,0,1) 100%)';
          }
      }

      if (timenow > noon && timenow <= sunset) {
          _sunStyle = sunset - timenow;
          _sunUpDown = 'down';
          _boolean = true;
          _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(155,194,204,1) 100%)';
          
          if (_sunStyle < 15) {
              _scenery = 'linear-gradient(to bottom, rgba(29,167,204,1) 0%,rgba(255,127,0,1) 100%)';
          }
      }

      if ((timenow < sunrise && timenow > dusk) || (timenow >= sunset && timenow < down)) {
          _sunStyle = -100;
          _boolean = true;
          _scenery = 'linear-gradient(to bottom, rgba(13,65,94,1) 0%,rgba(112,176,224,1) 75%,rgba(112,176,224,1) 80%,rgba(255,127,0,1) 100%)';
      }

      else if (timenow < sunrise || timenow > sunset) {
          _scenery ='#0D415E';
          _boolean = false;
      }

      state.initialState.sunrise = convertTimestamp(payload.data.sys.sunrise),
      state.initialState.sunset = convertTimestamp(payload.data.sys.sunset),
      state.initialState.country = payload.data.sys.country,
      state.initialState.timenow = `${hours}:${minutes}`,
      state.initialState.today =`${dd}/${mm}/${yyyy}`,
      state.initialState.sunStyle = _sunStyle,
      state.initialState.sunUpDown = _sunUpDown,
      state.initialState.boolean = _boolean,
      state.initialState.scenery = _scenery
    }
  },
  actions: {
    toggleSidebar: (context) => {
      context.commit('TOGGLE_SIDEBAR')
    },
    pushButton: (context) => {
      context.commit('PUSH_BTN')
    },
    getCoordinates: (context, payload) => {
      context.commit('GET_COORDINATES', {
        latitude: payload.latitude,
        longitude: payload.longitude
      })
    },
    loadSunriseSunset: (context, payload) => {
      context.commit('LOAD_SUNRISE_SUNSET', payload)
    },
  }
})
