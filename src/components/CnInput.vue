<template>
  <div class="filebox">
    <label for="ex_file">File Upload Here: {{ fileName }}</label>
    <input type="file" id="ex_file" ref="file" v-on:change="handleFileUpload"/>
    <button class="btn btn-dark" v-on:click="sendFile">변환</button><br>
 
    <!-- <div class="transedContainer">{{ this.$store.state.transedtext }}</div> -->
    <div v-if="this.$store.state.transedtext.length > 0">
      <audio style="margin-top:1%; width:65%;" autoplay controls> <source src="src/assets/응급환자_홍길동.wav" type="audio/wav"> </audio><br>
      <button  style="margin-top:1%;" class="btn btn-outline-light text-dark btn-sm"  @click="sendQuestion">차트열기</button>
      <ul class="list-group" id="listContainer">
        <li class="list-group-item list-group-item-dark" style="text-align:center;"><i class="fas fa-list-alt"></i> 환자상태차트</li>  
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 이름: {{this.$store.state.answer}} <i class="fas fa-ellipsis-v"></i> 나이: {{this.$store.state.answer2}} <i class="fas fa-ellipsis-v"></i> 성별: {{this.$store.state.answer3}}</li>  
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 증상: {{this.$store.state.answer4}}</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 의식: {{this.$store.state.answer5}}</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 체온: {{this.$store.state.answer6}}도</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 혈압: {{this.$store.state.answer7}}</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 심박수: {{this.$store.state.answer8}}bpm</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 호흡: 분당 {{this.$store.state.answer9}}</li>
        <li class="list-group-item list-group-item-light"><i class="fas fa-arrow-circle-right"></i> 평소질환: {{this.$store.state.answer10}}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      fileName: "",
      question: ""
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.fileName = this.file.name;
    },
    sendFile() {
      this.$store.commit("receiveStt", this.file);
    },
    sendQuestion() {
      this.$store.commit("receiveAnswer");
      this.$store.commit("receiveAnswer2");
      this.$store.commit("receiveAnswer3");
      this.$store.commit("receiveAnswer4");
      this.$store.commit("receiveAnswer5");
      this.$store.commit("receiveAnswer6");
      this.$store.commit("receiveAnswer7");
      this.$store.commit("receiveAnswer8");
      this.$store.commit("receiveAnswer9");
      this.$store.commit("receiveAnswer10");
    },
  }
};
</script>

<style scoped>
.inputBox {
  width: 60%;
  height: 40px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 50px;
  border-radius: 5px;
}
.filebox label {
  margin-top: 7px;
  display: inline-block;
  padding: 0.2em 0.75em;
  color: #999;
  font-size: 1.2rem;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
}
.filebox input[type="file"] {
  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.transedContainer{
  font-size: 1.3rem;
  margin-left: 2%;
  margin-right: 2%;
  padding: 23px;
}
#listContainer{
  margin: 2%;
  padding: 1%;
  text-align: left;
}
</style>
