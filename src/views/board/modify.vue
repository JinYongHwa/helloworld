<template>
    <v-container>
        <v-text-field @keyup.enter="modify" ref="title" v-model="board.title" label="글제목"
            variant="underlined"></v-text-field>
        <v-textarea ref="body" v-model="board.body" label="글내용" variant="underlined"></v-textarea>
        <div class="text-center">
            <v-btn color="primary" @click="modify">수정</v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            board: {
                title: "",
                body: ""
            }
        }
    },
    mounted() {
        this.getBoardItem()
    },
    methods: {
        modify() {
            this.$axios.post("/api/board/modify", this.board)
                .then(result => {
                    if (result.data.result == "ok") {
                        this.$router.push("/board/item/" + this.board.boardNo)
                    }
                    else {
                        alert(result.data.message)
                    }
                })

        },
        getBoardItem() {
            this.$axios.post("/api/board/item", {
                boardNo: this.$route.params.id
            })
                .then(result => {
                    if (result.data.result == "ok") {
                        this.board = result.data.board
                    }

                })
        }
    }
}
</script>