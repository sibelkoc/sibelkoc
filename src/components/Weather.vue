<template>
<div id="page">
        {{ info.list }}
    <div class='content'>
        <div class='name'>Orléans</div>
            <div class='today'>Aujourd'hui, </div>
                <div class='today'>humidity: {{ info.main.humidity }} </div>

                    <div v-if="info.weather[0].description === 'clear sky'">
                        <img v-bind: src="{{ path }} {{ getPictures(info.weather[0].description) }}" class="clearSky" alt="clear sky">
                    </div>

                    <div v-else>
                        error
                    </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name: 'Weather',
    data () {
        return {
            info: axios.get('http://api.openweathermap.org/data/2.5/weather?q=Orl%C3%A9ans,France&appid=2e5892d928b854b189ff8722e6baa31d')
            .then(response => (this.info = response.data))
            .catch(e => {
            console.log("error", e);
            })

        }
    }
}

</script>

<style>
#page{
    background-image: url('https://cdn.pixabay.com/photo/2020/02/26/19/40/switzerland-4882626_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.content{
width:618px;
height:500px;
margin-left:600px;
background-color: #F7F7F7;
border: 1px solid #dfe1e5;
border-radius: 8px;
font-size:14px;
margin-bottom: 20px;
margin-top:40px;
}
.name{
font-size: x-large;
color: #878787;
font-family: arial,sans-serif;
line-height: 1.2;
text-align: left;
padding:20px;
}
.today{
font-size:18px;
color: #878787;
font-family: arial,sans-serif;
text-align: left;
padding-left:20px;
}
</style>