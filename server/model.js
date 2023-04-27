function init(Sequlize, connection) {
    /**
     *  boardNo: 1, title: "제목2", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
     */
    global.Board = connection.define("board", {
        boardNo: {
            type: Sequlize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequlize.STRING,
        },
        writer: {
            type: Sequlize.STRING,
        },
        body: {
            type: Sequlize.TEXT,
        },
        viewCount: {
            type: Sequlize.INTEGER,
            defaultValue: 0,
        },
        writeDate: {
            type: Sequlize.DATE,
            defaultValue: Sequlize.NOW,
        }
    })

    global.User = connection.define("user", {
        id: {
            type: Sequlize.STRING,
            primaryKey: true,
        },
        password: {
            type: Sequlize.STRING,
        },
        name: {
            type: Sequlize.STRING,
        },
        joinDate: {
            type: Sequlize.DATE,
            defaultValue: Sequlize.NOW,
        }
    })


    connection.sync({
        alter: true
    })


}

module.exports = init