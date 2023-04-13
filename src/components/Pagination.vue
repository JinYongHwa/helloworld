<template>
    <v-layout justify-center>
        <v-spacer></v-spacer>
        <v-btn flat v-if="data.isPrev" @click="movePage(data.startNav - 1)">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <v-btn flat v-for="(page, key) in pageList" :color="getColor(page)" :key="key" @click="movePage(page)">
            {{ page }}</v-btn>
        <v-btn flat v-if="data.isNext" @click="movePage(data.endNav + 1)">
            <v-icon>
                mdi-arrow-right
            </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
    </v-layout>
</template>
<script>
export default {
    props: ["data"],
    data() {
        return {
            pageList: []
        }

    },
    mounted() {
        this.init()
    },
    methods: {
        getColor(page) {
            if (page == this.data.nowPage) {
                return "primary"

            }

        },
        movePage(page) {
            this.$emit("movePage", page)
        },
        init() {
            if (this.data) {
                this.pageList = []
                for (var i = this.data.startNav; i <= this.data.endNav; i++) {
                    this.pageList.push(i)
                }

            }
        }
    }


}
</script>
<style></style>