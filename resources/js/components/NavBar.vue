<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link :to="{name: 'home'}" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{name: 'about'}" class="navbar-brand">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'postsIndex'}" class="navbar-brand">Posts</router-link>
                </li>
            </ul>
            <form class="">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
