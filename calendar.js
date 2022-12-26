/* const date = new Date();
console.log(date);

const options = {
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                weekday: 'long',
                hour: 'numeric', 
                minute: 'numeric',
                hour12: true,
                };
        
const 날짜 = new Intl.DateTimeFormat('ko-KR', options);
const parts = 날짜.formatToParts(date);
console.log(parts);

const partValues = parts.map(p => p.value);
console.log(partValues);

const 일주일 = ['일','월','화','수','목','금','토'];
const 요일 = 일주일[date.getDay()];
console.log(요일); */

//달력 렌더링 할때 필요한 정보 목록
 //현재월 
 //금월 마지막 날짜와 요일
 //전월 마지막 날짜와 요일
 //날짜를 0으로 지정하면 저번 달의 마지막 날짜를 가진 date 객체가 반환 


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth(); 
const 일주일 = ['일','월','화','수','목','금','토'];
let 요일 = 일주일[date.getDay()];
const 오늘날짜 = date.getDate();
let x = '';
const 기념일들 = [
    {        
        기념일이름: '민채생일',
        기념일날짜: 20221220,
        id:Date.now()      
        //년도는 빼야는구나 뒤에 네자리만 비교해야하네
        //기념일 다시만들어야하네
    } , 
   
 ];

function 달력그리기(그릴달이있는날짜객체) {

    year = 그릴달이있는날짜객체.getFullYear();
    month = 그릴달이있는날짜객체.getMonth();
    
    const 년월 = document.querySelector('.년월');
    년월.innerText = `${year}년 ${month+1}월`;

    const 전달마지막날 = new Date(year, month, 0);
    const 전달마지막날짜 = 전달마지막날.getDate();
    const 전달마지막요일 = 전달마지막날.getDay();

    const 이번달마지막날 = new Date(year, month + 1, 0);
    const 이번달마지막날짜 = 이번달마지막날.getDate();
    const 이번달마지막요일 = 이번달마지막날.getDay();

    const 일주일 = ['월','화','수','목','금','토','일'];

    const calendar = document.querySelector('.calendar');
    calendar.innerHTML = '';

    for (let i = 0; i < 7 ; i++) {
        calendar.innerHTML = calendar.innerHTML + `<div>${일주일[i]}</div>`
    }    
    for (let i = 전달마지막날짜 - 전달마지막요일 + 1; i <= 전달마지막날짜; i++) {
        calendar.innerHTML = calendar.innerHTML + 
        `<div class="전달 day">` + i + '</div>'
    }    
    for (let i = 1;  i <= 이번달마지막날짜; i++) {
        calendar.innerHTML = calendar.innerHTML + 
        `<div class="이번달 day" id="${year}${String(month+1).padStart(2,'0')}${String(i).padStart(2,'0')}">` + i + '</div>'
    }    
    for (let i = 1; i <= 7 - 이번달마지막요일; i++) {
        calendar.innerHTML = calendar.innerHTML + 
        `<div class="다음달 day">` + i + '</div>'
        //12월에서 다음년도 1월 13으로 표시되는거 있음
    }
    x = document.querySelectorAll('.day');
    오늘표시();      
    공휴일(year);
    기념일그리기();
    console.log(기념일들);    
}

달력그리기(date);

function 달이동() {
    document.querySelector(`.이전`).onclick = () => {
    let 전달 = new Date(year, month - 1, 1);    
    달력그리기(전달);   
    }
    document.querySelector(`.이후`).onclick = () => {
    let 담달 = new Date(year, month + 1, 1);    
    달력그리기(담달);
    }
}
달이동();

function 오늘표시() {
    const today = new Date();
        if(month === today.getMonth() && year === today.getFullYear()){
        const 이번달 = document.querySelectorAll('.이번달');
        이번달[오늘날짜-1].classList.add('오늘');
        이번달[오늘날짜-1].innerText += '오늘';
        } 
}

async function 공휴일(년도) {
    const response = await fetch(`https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${년도}&numOfRows=20&_type=json&ServiceKey=QxgTSZRqU971shtYn63fok7jD2ZPnph%2F7wNxNIETgygZEzziSI7v%2FbOwcx9EW6LV7vssAhXjNU22KucPP54GCw%3D%3D`);
    const data = await response.json(); 
    const item = data.response.body.items.item;
    //x = document.querySelectorAll('.day');        
    for(let i = 0; i < item.length; i++) {
        for(let j = 0; j < x.length; j++){
            if(item[i].locdate === Number(x[j].id)) {
                x[j].classList.add('공휴일');
                x[j].innerHTML += `<br />${item[i].dateName}`; 
            }
        }           
    }    
}
   
function 기념일그리기() {
    //x = document.querySelectorAll('.day');  
        for(let i = 0; i < 기념일들.length; i++) {
            for(let j = 0; j < x.length; j++){
                if(기념일들[i].기념일날짜 === Number(x[j].id)) {
                    x[j].classList.add('기념일');
                    x[j].innerText += 기념일들[i].기념일이름; 
                }
            }           
        }
}


/*
 function getday() {
    const date = new Date();
    const nowday = new Intl.DateTimeFormat('ko-KR',{dateStyle: "full"}).format(date);
    day.innerText = nowday;
    } 

getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()  Get hour (0-23)
*/