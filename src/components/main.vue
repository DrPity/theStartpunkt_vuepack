<style>

  .bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    z-index: 1;
  }

  .section {
    flex: 1;
    background: #f2f2f2;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }

</style>

<template>
  <div class="text"><h2>Click a column</h2><br>{{ emited }}</div>
  <div class="bg">
    <template v-for="section in sections">
      <div class="section" v-on:click="clicked($store,section)"></div>
    </template>
  </div>
</template>
<script>

'use strict';
import {middleAsync} from '../vuex/actions'

export default {

  inherit: true,
  replace: true,
  name: "main",

  data: () => {
    return {
      sections: {
        left: 'LEFT',
        middle: 'MIDDLE',
        right: 'RIGHT',
        // middle: middleAsync, -- Async functions can be used as well
      }
    }
  },

  methods: {
    clicked: (store,section) => {
      console.log("clicked: ", section);
      store.dispatch(section);
    }
  },

  vuex: {
    getters: {
      emited: state => state.app.emited
    },
    actions: {
      middleAsync
    }
  }
}
</script>
