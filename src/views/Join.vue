<template>
  <div>
    <v-container>
      <v-text-field v-model="user.id" label="아이디"></v-text-field>
      <v-text-field v-model="user.name" label="이름"></v-text-field>
      <v-text-field type="password" v-model="user.password" label="비밀번호"></v-text-field>
      <v-text-field type="password" v-model="user.passwordConfirm" label="비밀번호 확인"></v-text-field>
      <div class="text-center">
        <v-btn class="mr-2" @click="join">회원가입</v-btn>
        <v-btn>취소</v-btn>
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
        password: '',
        passwordConfirm: ""
      }
    }
  },
  methods: {
    join() {
      if (this.user.id == "") {
        alert("아이디를 입력하세요")
        return
      }
      if (this.user.password.length < 4) {
        alert("비밀번호는 4자리 이상이어야 합니다.")
        return
      }
      if (this.user.password != this.user.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.")
        return
      }
      this.$axios.post("/api/user/join", this.user)
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
