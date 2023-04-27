<template>
    <v-container v-if="board">
        <div class="title">{{ board.title }}</div>
        <div class="writer">{{ board.writer }}</div>
        <div class="view-count">{{ board.viewCount }}</div>
        <div class="body" v-html="nl2br(board.body)"></div>

        <div class="text-center mt-2">
            <v-btn color="primary" @click="moveModify()">수정</v-btn>
            <v-btn color="red" @click="remove">삭제</v-btn>
        </div>


    </v-container>
</template>
<script>
export default {
    data() {
        return {
            board: null
        }
    },
    mounted() {
        this.$axios.post("/api/board/item", {
            boardNo: this.$route.params.id
        })
            .then(result => {
                if (result.data.result == "ok") {
                    this.board = result.data.board
                }
            })
    },
    methods: {
        remove() {
            if (!confirm("게시물을 삭제하시겠습니까?")) {
                return
            }
            this.$axios.post("/api/board/remove", this.board)
                .then(result => {
                    if (result.data.result == "ok") {
                        this.$router.go(-1)
                    }
                })
        },

        moveModify() {
            this.$router.push("/board/modify/" + this.board.boardNo)
        },
        nl2br(input) {
            if (input) {
                return input.replace(/\n/g, "<br/>")
            }

        }
    }
}
</script>
<style scoped>
.title {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
}

.writer {
    text-align: right;
}

.view-count {
    text-align: right;
}

.body {
    min-height: 400px;
    background-color: #eee;
}
</style>