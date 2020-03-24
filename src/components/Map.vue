<template>
        <div id="mymap">
            <img src="https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png" class="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive" alt="" tabindex="0"/> 
        </div>
</template>

<script >
import L from 'leaflet'
import Vue from 'vue'
import "leaflet/dist/images/marker-shadow.png";
import { map } from "leaflet/src/map/Map"




export default {
    name: 'Map',
    data() {
        return {
            msg: 'Welcome to Your map'
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {


            const fr = [45.4810323, -75.5100002]
            const mymap = L.map('mymap').setView(fr, 6);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2llYmwiLCJhIjoiY2s4NHAzZGY3MDBlNzNsbnNrNnB4NGlwciJ9.pW1l7xPvwz3TJ2dg2s7K4w', {
            }).addTo(mymap);
            const marker = L.marker(fr).addTo(mymap);
            marker.bindPopup('<h3>Orléans, France.</h3>');
            
        }
        
    },
}
</script>

<style>
#mymap {
    width: 100%;
    height: 30%;
    border: solid 2px #878787;
    overflow-y: hidden;
    overflow: hidden;
    overflow-x: hidden;
}
.leaflet-marker-icon{
    margin-left: -12px;
    margin-top: -41px;
    width: 25px;
    height: 41px;
    transform: translate3d(387px, -63px, 0px);
    z-index: -63;
    outline: none;
}
.leaflet-control-container{
    background-color: #878787;
    opacity: 0.5;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>