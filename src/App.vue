<template>
    <div id="app">
        <Weather />
        <Map />
    </div>
</template>

<script>
import Weather from './components/Weather' 
import Map from './components/Map'



export default {
    name: 'App',
    components:  {
      Weather,
      Map,
    }
}
</script>