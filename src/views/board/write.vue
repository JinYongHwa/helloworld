<template>
    <v-container>
        <v-text-field @keyup.enter="submit" ref="title" v-model="board.title" label="글제목"
            variant="underlined"></v-text-field>

        <v-textarea ref="body" v-model="board.body" label="글내용" variant="underlined"></v-textarea>
        <div class="text-center">
            <v-btn color="primary" @click="submit">글쓰기</v-btn>
        </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            board: {
                title: "",
                writer: "",
                body: ""
            }
        }
    },
    methods: {
        submit() {
            if (this.board.title == "") {
                alert("제목을 입력하세요")
                this.$refs.title.focus()
                return
            }

            if (this.board.body == "") {
                alert("내용을 입력하세요")
                this.$refs.body.focus()
                return
            }

            //TODO : 서버에 데이터 전송
            this.$axios.post("/api/board/write", this.board)
                .then(result => {
                    if (result.data.result == "ok") {
                        this.$router.replace("/board/item/" + result.data.item.boardNo)
                    }
                    else {
                        if (result.data.message) {
                            window.alert(result.data.message)
                        }
                    }

                })




        }
    }
}
</script>
<style></style>