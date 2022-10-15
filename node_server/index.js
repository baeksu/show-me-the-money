/**
 * 백엔드 시작 코드
 */

const express = require('express'); //express 모듈을 사용하겠다.
const path = require('path');
const app = express();

//"npm install cors" 설치하고 아래 코드를 써주면 서버쪽에서 cors 문제 해결가능
//근데 이게 모든 요청에 대한 허용
var cors = require('cors')
app.use(cors());

let reqCnt = 0;


app.set('port', 3000);
app.get('/',(req,res)=>{
  // console.log(__dirname,"이건 현재 실행파일의 위치가 출력되는구나");
  console.log(++reqCnt);
  res.sendFile(path.join(__dirname,'../front_client/index.html'));

})

app.listen(app.get('port'), ()=>{
  console.log(app.get('port'), '번 포트에서 대기중');
})
