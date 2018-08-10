<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">
          <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/student" class="nav-link">Estudiante</router-link>
          <router-link to="/subject" class="nav-link">Materias</router-link>
          <router-link to="/Assistance" class="nav-link">Asistencia</router-link>
          <router-link to="/grades" class="nav-link">Calidicaciones</router-link>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

