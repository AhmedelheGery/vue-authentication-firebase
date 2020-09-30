<template>
  <div id="app">
    <navbar />
    <section class="section">
      <div class="container is-desktop">
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
  methods: {
    ...mapActions(["authAction"])
  },
  mounted() {
    this.authAction();
  }
};
</script>
