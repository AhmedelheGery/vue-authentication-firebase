import firebase from "firebase/app";
import router from "../router";

// Mutations types
const SET_USER = "SET_USER";
const SET_ERROR = "SET_ERROR";

const actions = {
  signUpAction({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        // @TODO mutate user state.
        commit(SET_USER, response.user);
      })
      .catch(error => {
        // @TODO mutate error state.
        commit(SET_ERROR, error.message);
      });
  },
  signInAction({ commit }, payload) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        commit(SET_USER, response.user);
        router.push("/");
      })
      .catch(error => {
        commit(SET_ERROR, error.message);
      });
  },
  signOutAction({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(SET_USER, null);
        router.push("/login");
      })
      .catch(error => {
        commit(SET_ERROR, error.message);
      });
  },
  authAction({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit(SET_USER, user);
      } else {
        commit(SET_USER, null);
      }
    });
  }
};

export default actions;
