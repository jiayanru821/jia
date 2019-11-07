const { bookNavData, bookMallData, bookMallDetailData } = require('./data')
const bodyparser = require('body-parser')

let userList = [
    {
        id: 0,
        username: 'admin',
        pwd: '123456'
    },
    {
        id: 1,
        username: 'jyr',
        pwd: '123'
    },
]
let myBook = []
module.exports = {
    devServer: {
        before(app) {
            app.use(bodyparser.json())
            app.post('/api/login', (req, res) => {
                let { username, pwd } = req.body
                let user = userList.find(item => item.username === username)
                if (user) {
                    if (user.pwd === pwd) {
                        res.send({
                            code: 200,
                            data: user,
                            message: '登录成功'
                        })
                    } else {
                        res.send({
                            code: 400,
                            message: '密码错误'
                        })
                    }
                } else {
                    res.send({
                        code: 400,
                        message: '用户不存在'
                    })
                }
            })

            //导航
            app.get('/getNav', (req, res) => {
                res.send({
                    code: 200,
                    data: bookNavData,
                    message: '导航'
                })
            })

            app.get('/getList', (req, res) => {
                // console.log(req)
                let { id } = req.query
                let list = bookMallData.find(item => item.id == id).list
                list.forEach(item => {
                    item.is_in_my_book = myBook.findIndex(book => book.id === item.id) >= 0
                })
                res.send({
                    code: 200,
                    data: list,
                    message: '列表'
                })
            })

            app.get('/getDetail', (req, res) => {
                let { id } = req.query
                bookMallDetailData.forEach(item => {
                    item.list.forEach(book => {
                        if (book.id == id) {
                            book.is_in_my_book = myBook.findIndex(bookItem => bookItem.id === book.id) >= 0
                            res.send({
                                code: 200,
                                data: book,
                                message: '详情'
                            })
                        }
                    })
                })
            })

            app.post('/addmybook', (req, res) => {
                let { book } = req.body
                myBook.push(book)
                res.send({
                    code: 200,
                    data: myBook,
                    message: '添加成功'
                })
            })

            app.get('/api/myBook', (req, res) => {
                res.send({
                    code: 200,
                    data: myBook,
                    message: '书包'
                })
            })
        }
    }
}



