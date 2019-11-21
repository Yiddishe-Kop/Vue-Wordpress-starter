import axios from "axios";

export default {
  getAllPosts: callback => {
    axios
      .get("http://vuestarter.local/wp-json/wp/v2/posts")
      .then(response => {
        callback(response.data)
      })
      .catch(e => {
        callback(e)
      });
  },
  getPost: (slug, callback) => {
    axios
      .get(
        "http://vuestarter.local/wp-json/wp/v2/posts?slug=" +
        slug
      )
      .then(response => {
        callback(response.data[0])
      })
      .catch(e => {
        callback(e)
      });
  }
}
