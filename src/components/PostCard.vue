<template>
  <div class="post-card">
    <h2>{{post.title.rendered}}</h2>
    <span class="date">{{post.date}}</span>
    <div class="content" v-html="post.excerpt.rendered"></div>
    <router-link :to="'/posts/' + post.slug">View</router-link>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"]
};
</script>

<style lang="scss">
.post-card {
  background: grey;
}
</style>
