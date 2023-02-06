<template>
  <Menu_bar></Menu_bar>
  <PostList/>
</template>

<script>
import PostList from  "./components/posts.vue";

export default {
  name: "App",
  components: {PostList}
};
</script>


<style>

</style>
