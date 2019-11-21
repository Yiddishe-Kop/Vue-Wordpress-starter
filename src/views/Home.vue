<template>
  <div class="home">
    <div v-if="posts">
      <post-card v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "@/api";
import PostCard from "@/components/PostCard";

export default {
  name: "home",
  components: { PostCard },
  data() {
    return {
      posts: undefined
    };
  },
  mounted() {
    api.getAllPosts(posts => (this.posts = posts));
  }
};
</script>
