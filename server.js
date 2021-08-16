var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]
if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('有个傻子发请求过来啦！路径（带查询参数）为：' + pathWithQuery)

  if(path === '/index.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('public/index.html')) // 返回的带外部样式表的HTML文件
    response.end()
  }else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('public/main.js')) // 这里是浏览器对请求的回应
    response.end()
   } else if(path === '/1.css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('public/1.css')) // 这里是浏览器对请求的回应
    response.end()
  } else if(path === '/2.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('public/2.js')) // 这里是浏览器对请求的回应
    response.end()
  } else if(path==='/3.html') {
    response.statusCode = 200
    response.setHeader('Content-Type',  'text/html;charset=utf-8')
    response.write(fs.readFileSync('public/3.html'))
    response.end()
  }else if(path==='/4.xml') {
    response.statusCode = 200
    response.setHeader('Content-Type',  'text/xml;charset=utf-8')
    response.write(fs.readFileSync('public/4.xml'))
    response.end()
   }else if(path==='/5.json') {
      response.statusCode = 200
      response.setHeader('Content-Type',  'text/json;charset=utf-8')
      response.write(fs.readFileSync('public/5.json'))
      response.end()
    }else{
    response.statusCode = 404
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.write(`您的路径不存在东西`)
    response.end()
  } 
  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)