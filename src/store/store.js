import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); // Vue를 사용하는 전역에서 Vuex를 사용할 수 있도록해줌

export const store=new Vuex.Store({  
    state:{
        transedtext: "",
        targetStt: "https://api.maum.ai/api/stt/",
        targetMrc: "https://api.maum.ai/api/bert.mrc/", //"https://dev-api.maum.ai/api/bert.mrc/",
        question1: "이름은",
        question2: "나이는?",
        question3: "성별",
        question4: "의심 증상?",
        question5: "의식은?",
        question6: "온도",
        question7: "혈압은",
        question8: "심박수는",
        question9: "호흡은 몇회입니까?",
        question10: "평소 질환은",
        answer: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
    },
    mutations:{
        receiveStt(state,file) {
            state.answer = "";
            let formData = new FormData();
            let target = state.targetStt;
            formData.append("file", file);
            formData.append("ID", "gachon.pproject.85aff977b6857");
            formData.append("key", "81a1b1e775c647bfa448f51cbe42193d");
            formData.append("cmd", "runFileStt");
            formData.append("lang", "kor");
            formData.append("sampling", "16000");
            formData.append("level", "baseline");

            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.transedtext = res.data.data;
                    console.log("Success");
                    console.log(state.transedtext);
                })
                .catch(function (err) {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question1,
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer = res.data.answer;
                    console.log("Success");
                    console.log(state.answer);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer2(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question2
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer2 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer2);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer3(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question3
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer3 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer3);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer4(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question4
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer4 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer4);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer5(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question5
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer5 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer5);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer6(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question6
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer6 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer6);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer7(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question7
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer7 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer7);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer8(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question8
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer8 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer8);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer9(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question9
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer9 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer9);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
        receiveAnswer10(state) {
            let target = state.targetMrc;
            let formData = {
                apiId: "gachon.pproject.85aff977b6857",
                apiKey: "81a1b1e775c647bfa448f51cbe42193d",
                lang: "kor",
                context: state.transedtext,
                question: state.question10,
            };
            axios
                .post(target, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    state.answer10 = res.data.answer;
                    console.log("Success");
                    console.log(state.answer10);
                })
                .catch(err => {
                    console.log("Failure");
                    console.log(err);
                });
        },
    }
});