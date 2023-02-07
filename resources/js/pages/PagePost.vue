<template>
    <div>
        <h1>Show del post</h1>

        <div v-if="arrPosts">
            <h1>{{ arrPosts.title }}</h1>
            <img :src="arrPosts.image" alt="arrPosts.title">
            <p>{{ arrPosts.content }}</p>
        </div>
    </div>

</template>

<script>
export default {
    props:[
        'id'
    ],

    data() {
            return {
                arrPosts: null,
            };
        },

    created() {

        axios.get('/api/posts/'+ this.id)
        .then(response => this.arrPosts = response.data.results);
    },
}
</script>

<style>

</style>
