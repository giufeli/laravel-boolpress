<template>
    <div>
        <Navbar></Navbar>
        <main class="p-5">
            <router-view></router-view>
        </main>
    </div>
    <!-- <div class="container">
        <h1>Componente Vue</h1>
        <div class="row g-3">
                <div v-for="post in arrPosts" :key="post.id" class="col-sm-6 col-md-4">
                    <div class="card h-100">
                        <img :src="post.image" class="card-img-top" :alt="post.title">
                        <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text flex-grow-1">{{ post.excerpt }}</p>
                        <a :href="'admin/posts/' + post.id" class="btn btn-primary">Leggi</a>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

</template>

<script>
    import Navbar from './components/NavBar'
    export default{
        name: 'App',
        components:{
            Navbar,
        },
        data() {
            return {
                arrPosts: [],
            };
        },

        created() {
            axios.get('/api/posts')
            .then(response => this.arrPosts = response.data.results);
        }
    }
</script>

<style lang="scss">
    @import '~bootstrap/scss/bootstrap';
</style>


