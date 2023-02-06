<template>
    <div>
        <button @click="getPosts">Load Posts</button>
        <ul>
            <div v-for="post in posts" :key="post.id">
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
            </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'PostList',
        data() {
            return {
                posts: []
            }
        },
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        this.posts = response.data;
                        console.log(this.posts);
                    });
            }
        }
    }
</script>

<style scoped>

</style>