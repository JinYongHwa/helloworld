<template>
  <v-app>
    <div class="header">
      <v-layout>
        <div class="logo">진용화의 게시판</div>
        <v-spacer></v-spacer>
        <div class="user"></div>
        <div><v-btn flat @click="logout">로그아웃</v-btn></div>
      </v-layout>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    logout() {
      this.$router.push("/")
    }
  }
}
</script>
<style>
.header {
  padding: 20px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header .logo {
  font-size: 20px;
  font-weight: 700;
}
</style>
