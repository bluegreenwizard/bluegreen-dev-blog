<template>
  <Layout class="home">
    <section class="posts">
      <ul class="post-list">
        <li class="post-list__item" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
          <header class="post-list__header">  
            <p class="post-list__date">{{ node.date }}</p>
            <h2 class="post-list__title">
              <router-link class="post-list__link" :to="node.path">
                {{ node.title }}
              </router-link>
            </h2>
          </header>
          <p class="post-list__description">
            {{ node.description }}
          </p>
        </li>
      </ul>
      <Pager class="pager" :info="$page.allBlogPost.pageInfo"/>
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome';

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
  query Home ($page: Int) {
    allBlogPost (perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          path
        }
      }
    }
  }
</page-query>

<style lang="sass" scoped>
.posts
  margin-left: 40px
.post-list
  list-style: none
  max-width: 40rem
  min-width: 20rem
  padding-left: 0
  & .post-list__item
    margin-bottom: 2.5rem
  & .post-list__header

  & .post-list__title
    font-size: 2.6rem
    line-height: 3rem
    font-family: 'Lato', sans-serif
    text-shadow: 8px 8px 8px black
    margin: 0
    transition: all 0.2s ease-out
    &:hover
      text-shadow: 11px 11px 8px black

  & .post-list__date
    color: $IceBlue
    padding-bottom: 4px
    border-bottom: 1px solid $IceBlue 
    font-size: 1.2rem
  & .post-list__link
    color: $Blue
    text-decoration: none
  & .post-list__description
    font-size: 1.2rem
    color: $ShadyBlue

.pager
  font-size: 1.3rem
  & a
    color: $IceBlue
    text-decoration: none
    margin: 0 5px
  .active
    text-decoration: underline
</style>