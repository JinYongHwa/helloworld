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
                    <td class="text-center">
                        <div v-if="board.user">
                            {{ board.user.name }}
                        </div>
                    </td>
                    <td class="text-center">{{ board.viewCount }}</td>
                    <td class="text-center">{{ dateFormat(board.writeDate) }}</td>
                </tr>
            </tbody>
        </table>
        <!-- <v-pagination v-model="page" @update:modelValue="getBoardList()" v-if="pagination"
            :length="pagination.totalPage"></v-pagination> -->

        <pagination v-if="pagination" @movePage="movePage" :data="pagination"></pagination>
        <div class="text-right">
            <v-btn color="primary" class="mt-5" @click="moveWrite">글쓰기</v-btn>
        </div>

    </v-container>
</template>
<script>
import moment from "moment"
import Pagination from "@/components/Pagination"
export default {
    components: {
        Pagination: Pagination
    },
    data() {
        return {
            page: 1,
            boardList: [],
            pagination: null
        }
    },
    mounted() {
        this.getBoardList()
    },
    methods: {
        movePage(page) {
            this.page = page
            this.getBoardList()

        },
        dateFormat(date) {
            return moment(date).format("YYYY-MM-DD HH:mm")
        },

        getBoardList() {
            this.$axios.post("/api/board/list", {
                page: this.page
            })
                .then(result => {
                    console.log(result.data)
                    this.boardList = result.data.list
                    this.pagination = result.data.pagination
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