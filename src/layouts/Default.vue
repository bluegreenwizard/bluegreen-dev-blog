<template>
  <div class="layout">
    <header class="header">
      <div class="header__icon"></div>
      <g-link class="header__link" :to="{ name: 'home' }">
        <h1 class="header__text">{{ config.siteName }}</h1>
      </g-link>
    </header>
    <slot/>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  computed: {
    // titleTag () {
    //   return this.$route.name === 'home' ? 'h1' : 'h6'
    // },
    config () {
      return config
    }
  }
}
</script>


<style lang="sass">
@import 'normalize-scss'
@include normalize()

html 
  background: $Eigengrau //Eigengrau
  color: $IceBlue
  font-family: 'Roboto', sans-serif
body
  margin: 0
  font-size: 10px
  
.header
  display: flex
  padding: 1.5rem
.header__icon
  display: inline-block
  width: 40px
  height: 40px
  border-radius: 100%
  border: 3px solid $Green
  &:hover
    border: 3px solid $ShadyBlue
.header__link
  color: $Green
  text-decoration: none
  font-family: 'Text Me One', sans-serif
  font-size: 20px
.header__text
  margin: 0
  padding: 0 20px

</style>
