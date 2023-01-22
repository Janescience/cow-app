
<template>
  <RouterView />
</template>

<script>
import EventBus from "@/utils/event-bus";
import { RouterView } from 'vue-router'
import TokenService from '@/services/token'

export default {
  components : {
    RouterView
  },
  methods: {
    logOut() {
      TokenService.removeUser();
      this.$router.push('/login');
    }
  },
  mounted() {
    EventBus.on("logout", () => {
      this.logOut();
    });
  },
  beforeDestroy() {
    EventBus.remove("logout");
  }
};
</script>
