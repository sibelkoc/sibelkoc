<template>
    <div className="nav-container">
        <nav className="nav-content">
            <a href="#Lundi">Lundi</a>
            <a href="#Mardi">Mardi</a>
            <a href="#Mercredi">Mercredi</a>
            <a href="#Jeudi">Jeudi</a>
            <a href="#Vendredi">Vendredi</a>
            <a href="#Samedi">Samedi</a>
            <a href="#Dimache">Dimache</a>
        </nav>
        </div>
</template>

<style scoped>


#HomePage{
    background-image: url("https://cdn.discordapp.com/attachments/656579705821986816/660851575010361387/1background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 500px;
    height: 100vh;
    display: flex;
    align-items: center;
}
@keyframes animatedBackground {
	from { background-position: 0 0; }
	to { background-position: 100% 0; }
}

.nav-container {
    position: fixed;
    top: 3%;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.308);

}
.nav-content {
    display: flex;
}
nav ul{
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Montserrat', sans-serif;
    color: #eaeaea;
    cursor: pointer;
    font-size: 20px;
    font-weight: 200;
}
nav a{
  margin-right:2%;

}

nav ul:hover{
    color: #7ed6df;
}



#menuToggle{
  display: block;
  position: relative;
  top: 22px;
  left: 40px;
  margin-right: 700px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  transform: scale(0.9);

}

#menuToggle a{
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover{
  color: #7ed6df;
}


#menuToggle input{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  -webkit-touch-callout: none;
}

#menuToggle span{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #cdcdcd;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2){
  transform-origin: 0% 100%;
}

</style>