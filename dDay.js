const 디데이 = document.getElementById('dDay');

function 디데이계산() {
    const 새해첫날 = new Date("2023-1-1");    
    const 지금 = new Date();
    const 남은기간 = 새해첫날 - 지금;   

    const 남은날짜 = Math.floor(남은기간 / (1000*60*60*24));
    const 남은시간 = String(Math.floor((남은기간 / (1000*60*60)) % 24)).padStart(2,'0');
    const 남은분 = String(Math.floor((남은기간 / (1000*60)) % 60)).padStart(2,'0');
    const 남은초 = String(Math.floor(남은기간 / 1000 % 60)).padStart(2,'0');

    디데이.innerText = `${남은날짜}일${남은시간}시간${남은분}분${남은초}초`;

}
디데이계산();
setInterval(디데이계산, 1000);