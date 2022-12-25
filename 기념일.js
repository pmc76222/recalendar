const 기념일 = document.getElementById('기념일폼');
const 이름 = document.getElementById('이름');
const 날짜 = document.getElementById('날짜');
const 기념일들 = [];

 function 기념일받기(e) {
    e.preventDefault();
    const 받은이름 = 이름.value; 
    const 받은날짜 = 날짜.value;    
    이름.value = "";
    날짜.value = "";

    const 새기념일 = {        
        기념일이름: 받은이름,
        기념일날짜: 받은날짜,
        id:Date.now(),      
    }  

    기념일들.push(새기념일);  
    console.log(기념일들);  
}
 
기념일.addEventListener('submit', 기념일받기);
