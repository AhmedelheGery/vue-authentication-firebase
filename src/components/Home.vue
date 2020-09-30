<template>
  <div>
    <section v-if="isUserAuth" class="section">
      <div class="columns">
        <div class="column is-flex has-text-justified">
          <h3 class="title is-3">Welcome {{ getUser.email }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  }
};
</script>

<style scoped>
</style>
