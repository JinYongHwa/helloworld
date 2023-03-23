<template>
  <div>
    <v-btn @click="helloworld()">안녕하세요 하재승 교수님입니다</v-btn>
    
    <div v-for="student in studentFilter()" class="student" 
    :class="{old:student.age>=40}">
      {{ student.name }}
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data(){
    return {
      onoff:true,
      students:[
        {name:"김보미", age:20},
        {name:"김세민",age:40},
        {name: "김혜현",age:40},
        {name:"나호윤",age:50}
        
      ]
    }
  },
  methods:{
    helloworld(){
      this.$router.push("/helloworld")
    },
    studentFilter(){
      var returnArr=[]
      //전체학생이 반환되도록함
      if(this.onoff==true){
        this.students.forEach(student=>{
          returnArr.push(student)
        })
      }
      //학생의 나이가 40 미만인 학생만 반환되도록
      else{
        this.students.forEach(student=>{
          if(student.age<40){
            returnArr.push(student)
          }
        })
      }
      return returnArr;  

    }
  }
});
</script>

<style>
.student{
  font-size:20px;
  margin-bottom:10px;
}
.student.old{
  color:red;
}
</style>
