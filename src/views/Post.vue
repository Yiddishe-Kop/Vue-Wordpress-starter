<template>
  <div v-if="post" class="post">
    <h2>{{post.title.rendered}}</h2>
    <span class="date">{{post.date}}</span>
    <div class="content" v-html="post.content.rendered"></div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Post",
  data() {
    return {
      post: undefined
    };
  },
  created() {
    api.getPost(this.$route.params.slug, post => (this.post = post));
  }
};
</script>

<style lang="scss">
.post {
  background: grey;
}
</style>
