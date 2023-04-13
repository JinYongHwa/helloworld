module.exports = {
    paginate: function (totalCount, nowPage, itemPerPage) {
        const totalPage = Math.ceil(totalCount / itemPerPage);
        const startNav = Math.floor((nowPage - 1) / 10) * 10 + 1;
        const endNav = Math.min(startNav + 9, totalPage);
        const startViewNum = (nowPage - 1) * itemPerPage + 1;
        const isPrev = nowPage > 1;
        const isNext = nowPage < totalPage;

        return {
            startNav,
            endNav,
            nowPage,
            startViewNum,
            isPrev,
            isNext,
            totalPage,
            totalCount,
            itemPerPage
        };
    }
}