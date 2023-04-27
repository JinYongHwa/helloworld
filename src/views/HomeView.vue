<template>
  <div>
    <v-container>
      <v-text-field v-model="user.id" label="아이디"></v-text-field>
      <v-text-field v-model="user.password" label="비밀번호"></v-text-field>
      <div class="text-center">
        <v-btn class="mr-2">로그인</v-btn>
        <v-btn @click="moveJoin">회원가입</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      user: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    moveJoin() {
      this.$router.push("/join")
    }
  }
});
</script>

<style>
.student {
  font-size: 20px;
  margin-bottom: 10px;
}

.student.old {
  color: red;
}
</style>
