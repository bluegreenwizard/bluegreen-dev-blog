<template>
  <Layout>
    <article class="article">
      <header class="article__header">
        <h1 class="article__title">{{ $page.blogPost.title }}</h1>
        <p class="article__date">{{ $page.blogPost.date }}</p>
        <g-image class="article__splash" :src="$page.blogPost.image"/>  
      </header>
      <div class="article__content" v-html="$page.blogPost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>

<style lang="sass" scoped>
.article
  & .article__header
    padding: 10vw
    margin: 0
    display: flex
    flex-direction: column
    position: relative
    overflow: hidden
  & .article__title
    color: $Blue
    font-family: 'Lato', sans-serif
    font-style: italic
    font-size: 5vw
    text-align: center
  & .article__date
    display: none
    border: 1px solid $Blue
    padding: .5rem 2rem
    border-radius: 10px
  & .article__splash
    position: absolute
    top: 0
    left: 0
    z-index: -1
    width: 100%
    opacity: 0.26
  & .article__content
    max-width: 1080px
    margin: auto
    font-family: 'Roboto', sans-serif
    font-size: 1.3rem
    padding: 1rem 3rem

@media screen and (min-width: 990px)
  .article
    & .article__header
      // padding: 2rem
    & .article__title
      font-size: 3rem
</style>
