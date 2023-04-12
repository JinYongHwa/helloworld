<template>
    <v-container>
        <table>
            <tr>
                <th width="50px">글번호</th>
                <th>제목</th>
                <th width="80px">작성자</th>
                <th width="50px">조회수</th>
                <th width="100px">작성일</th>
            </tr>

            <tbody>
                <tr v-for="(board, key) in boardList" :key="key" @click="moveItem(board)">
                    <td class="text-center">{{ board.boardNo }}</td>
                    <td>{{ board.title }}</td>
                    <td class="text-center">{{ board.writer }}</td>
                    <td class="text-center">{{ board.viewCount }}</td>
                    <td class="text-center">{{ board.writeDate }}</td>
                </tr>
            </tbody>
        </table>

        <div class="text-right">
            <v-btn color="primary" class="mt-5" @click="moveWrite">글쓰기</v-btn>
        </div>

    </v-container>
</template>
<script>
export default {
    data() {
        return {
            boardList: []
        }
    },
    mounted() {
        this.getBoardList()
    },
    methods: {
        getBoardList() {
            this.$axios.get("/api/board/list")
                .then(result => {
                    console.log(result.data)
                    this.boardList = result.data
                })
        },
        moveWrite() {
            this.$router.push("/board/write")
        },
        moveItem(board) {
            this.$router.push("/board/item/" + board.boardNo)
        }
    }
}
</script>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table tr th {
    border-bottom: 1px solid #999;
}

table tr td {
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
}

table tbody tr:hover {
    cursor: pointer;
    background-color: #eee;
}
</style>