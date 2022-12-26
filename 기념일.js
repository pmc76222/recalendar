const 기념일 = document.getElementById('기념일폼');
const 이름 = document.getElementById('이름');
const 날짜 = document.getElementById('날짜');


 function 기념일받기(e) {
    e.preventDefault();
    const 받은이름 = 이름.value; 
    const 받은날짜 = 날짜.value;    
    이름.value = "";
    날짜.value = "";

    const result1 = 받은날짜.substring(0,4);
    const result2 = 받은날짜.substring(5,7);
    const result3 = 받은날짜.substring(8,10);
    const 고친받은날짜 = result1 + result2 + result3;
    const 숫자받은날짜 = Number(고친받은날짜);
    console.log(숫자받은날짜);
   
    const 새기념일 = {        
        기념일이름: 받은이름,
        기념일날짜: 숫자받은날짜,
        id:Date.now(),      
    }  
    기념일들.push(새기념일);    
    기념일그리기()
}
 
기념일.addEventListener('submit', 기념일받기);

