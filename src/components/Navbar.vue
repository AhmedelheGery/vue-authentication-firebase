<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" style="align-items: center;">
      <img
        src="https://vuejs.org/images/logo.png"
        style="height: 50px; margin: 20px;"
      />
      <span class="has-text-weight-medium is-size-4">
        Vue.js + Veux + Firebase = ❤️!
      </span>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="!isUserAuth">
              <router-link
                v-for="item of navItems"
                :key="item.name"
                :to="item.to"
                class="button is-primary"
              >
                <span class="icon">
                  <i :class="`fas fa-${item.icon}`"></i>
                </span>
                <strong>{{ item.name }}</strong>
              </router-link>
            </template>
            <template v-if="isUserAuth">
              <button class="button is-primary" @click="signOut">
                <span class="icon">
                  <i class="fas fa-sign-out-alt"></i>
                </span>
                <strong>Logout</strong>
              </button>
              <router-link to="/protect" class="button is-primary">
                <span class="icon">
                  <i :class="`fas fa-lock`"></i>
                </span>
                <strong>About</strong>
              </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      navItems: [
        { name: "Login", to: "/login", icon: "lock" },
        { name: "Register", to: "/register", icon: "key" }
      ]
    };
  },
  computed: {
    ...mapGetters(["isUserAuth"])
  },
  methods: {
    ...mapActions(["signOutAction"]),
    signOut() {
      this.signOutAction();
    }
  }
};
</script>
