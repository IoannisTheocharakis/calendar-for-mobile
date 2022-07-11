betweenDays();
function changeDate(day){
    /*stoixeia epilegmenhs meras prwths (mikroterhs meras) kai teleutaias (megaluterhs) */
    var active_first_day = document.querySelector('.active-first-day');
    var active_last_day = document.querySelector('.active-last-day');
    
    /* onoma klasshs ths meras pou patithike */
    var newday = '.day' + day ;
    newday_class=document.querySelector(newday);
    if(active_first_day===null){
        /*den uparxei h prwth  mera */
        
        if(newday_class.className.includes("active-last-day")){
            /*an uparxei h last tote thn diagrafw*/
            newday_class.classList.remove("active-last-day");
        }else{
            /*insert thn prwth*/
            newday_class.classList.add('active-first-day');
        }
        if(active_last_day!==null ){
            var num_first_day=newday_class.className.match(/(\d+)/);
            var num_last_day=active_last_day.className.match(/(\d+)/);
            if(Number(num_first_day[0]) > Number(num_last_day[0])){
                newday_class.classList.add('active-last-day');
                newday_class.classList.remove('active-first-day');
                active_last_day.classList.add('active-first-day');
                active_last_day.classList.remove('active-last-day');
                
            }

        }
    }else{
        if(active_last_day===null){
            /*an uparxei mono h first day kai oxi h last */
            
            if(newday_class.className.includes("active-first-day")){
                /*an uparxei mono h first day kai oxi h last tote diagrafoume*/
                newday_class.classList.remove("active-first-day");
            }else{
                /*alliws insert last day */
                newday_class.classList.add('active-last-day');
            }
            var num_first_day=active_first_day.className.match(/(\d+)/);
            var num_last_day=newday_class.className.match(/(\d+)/);
            if(Number(num_first_day[0]) > Number(num_last_day[0])){

                newday_class.classList.add('active-first-day');
                newday_class.classList.remove('active-last-day');
                active_first_day.classList.add('active-last-day');
                active_first_day.classList.remove('active-first-day');
                
            }
        }else{
            /*stoixeia epilegmenhs meras prwths (mikroterhs meras) kai teleutaias (megaluterhs) */
            var num_first_day=active_first_day.className.match(/(\d+)/);
            var num_last_day=active_last_day.className.match(/(\d+)/);

            if(num_first_day[0] >= day){
                newday_class.classList.add('active-first-day');
                active_first_day.classList.remove("active-first-day");
                if(newday_class.className.includes("active-last-day")){
                    newday_class.classList.remove("active-last-day");
                }
            }else{
                newday_class.classList.add('active-last-day');
                active_last_day.classList.remove("active-last-day");
            }
            
        }
 
    }
    
    
    
    betweenDays();
    let first_day=document.querySelector('.active-first-day');
    let last_day = document.querySelector('.active-last-day');
    if(first_day!==null){

        let tmp=first_day.className.match(/(\d+)/);
        let weekday=Number(tmp[0])%7;
        let firstday=Number(tmp[0]);
        document.querySelector('.arrival-date').innerHTML=week_days[weekday]+" "+ firstday + " " + document.querySelector('.active-month').innerHTML.replace(/\d/g,'');
    }else{
        document.querySelector('.arrival-date').innerHTML="";
    }
    if(last_day!==null){
        let tmp=last_day.className.match(/(\d+)/);
        let weekday=Number(tmp[0])%7;
        let firstday=Number(tmp[0]);
        document.querySelector('.depart-date').innerHTML=week_days[weekday]+" "+ firstday + " " + document.querySelector('.active-month').innerHTML.replace(/\d/g,'');
    }else{
        document.querySelector('.depart-date').innerHTML="";
    }
}

const  week_days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

function betweenDays(){

    var active_first_day = document.querySelector('.active-first-day');
    var active_last_day = document.querySelector('.active-last-day');
    if(active_first_day !==null && active_last_day !==null ){

        var num_first_day=active_first_day.className.match(/(\d+)/);
        var num_last_day=active_last_day.className.match(/(\d+)/);

        for(i = 1 ; i <= 30; i++){

            if(document.querySelector('.betweendays' )){
                document.querySelector('.day'+i ).classList.remove('betweendays');
            }
            
        }
        for(i = Number(num_first_day[0] ) +1  ; i < Number(num_last_day[0]); i++){

            document.querySelector('.day'+i ).classList.add('betweendays');
        }
        document.querySelector('.active-last-day .back-color').style.display="flex";
        document.querySelector('.active-first-day .back-color').style.display="flex";
    }else{
        if(active_first_day!==null){
            document.querySelector('.active-first-day .back-color').style.display="none";
        }else if(active_last_day!==null){
            document.querySelector('.active-last-day .back-color').style.display="none";
        }
        for(i = 1 ; i <= 30; i++){
            
            if(document.querySelector('.betweendays' )){
                document.querySelector('.day'+i ).classList.remove('betweendays');
            }
            
        }
    }

}


const date = new Date();


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function refresh_calendar(){
    const days_of_month = document.querySelector('.days');

    var calendar_days=42;

    /*h teleutaia mera tou mhna pou briskomaste (gi auto bazoume to ) date.getMonth()+1
    wste na paroume apo ton epomeno mhna thn mera 0 , ara thn teleutaia tou dikou mas
    */

    const last_day_of_month = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    /**epistrefei pote ksekinaei h prwth mera sthn bdomada px an einai 0 tote 
     * 
     * 1 mera tou mhna einai thn kuriakh
     */
    date.setDate(1); /**prwth mera tou mhna */
    const first_day_of_month_index = date.getDay();


    const Last_day_of_prev_month = new Date(date.getFullYear(),date.getMonth(),0).getDate();

    /**apo ton epomeno mhna h mera 0 (ara h teleutaia tou dikou mas )
     * 
     * getDay wste na paroume pia mera einai (px 0 = Sunday)
     */
    const last_day_of_month_index = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();


   
    if(months[date.getMonth()-1] === undefined){
        document.querySelector('.prev-month').innerHTML = "December" + " "+ (date.getFullYear()-1);
    }else{
        document.querySelector('.prev-month').innerHTML = months[date.getMonth()-1] + " "+ date.getFullYear();
    }
    console.log(date.getFullYear()+1);
    if(months[date.getMonth()+1] === undefined){
        document.querySelector('.next-month').innerHTML = "January" + " "+ (date.getFullYear()+1);
    }else{
        document.querySelector('.next-month').innerHTML = months[date.getMonth()+1] + " "+ date.getFullYear();
    }
    document.querySelector('.active-month').innerHTML = months[date.getMonth()] + " "+ date.getFullYear();
    
    


    let days="";

    for(let j=first_day_of_month_index; j >0 ; j--){
        
        days += `<div class="prev-day">${Last_day_of_prev_month - j +1}</div>`;
        calendar_days--;
    }

    for(let i=1; i<=last_day_of_month;i++){
        /*<div class="day1" onclick="changeDate(1)"><span class="back-color"></span ><span class="num">1</span></div> */
        days +=`<div class="day${i}" onclick="changeDate(${i})"> <span class="back-color"></span><span class="num">${i}</span></div>`;
        calendar_days--;
    }

    for(let k=1; k<=calendar_days;k++){
        days+=`<div class="next-day">${k}</div>`
        days_of_month.innerHTML = days;
    }
}

function nextMonth(){
    date.setMonth(date.getMonth()+1);
    refresh_calendar();
}
function prevMonth(){
    
    date.setMonth(date.getMonth()-1)
    refresh_calendar();
}
refresh_calendar();




/**-------------BARR */

$(document).ready(function(){
    $(".bar div a").click(function(){
        var position = $(this).position();
        var margin=-4;
        $(".slider").css({"left": +position.left+margin,"transform" : " translateX(0)"})
        

        $(".bar div a").removeClass("active");
        $(this).addClass("active");


    })
    

})



