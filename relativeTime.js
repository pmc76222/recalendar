
const relativeTime = document.getElementById('relativeTime');
const 지금 = new Date();
const 그때 = new Date('2004-3-6');
const relativeTimeFormat = new Intl.RelativeTimeFormat("ko",{
    numeric: 'auto',
});
const 차이 = Math.ceil(
    (그때.getTime() - 지금.getTime()) / (1000 * 60 * 60 * 24)
);
const 지난날 = relativeTimeFormat.format(차이,"day");    
relativeTime.innerText = 지난날;



