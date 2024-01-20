let RealHour = document.querySelector(".hour");
let RealMin = document.querySelector(".min");
let RealSec = document.querySelector(".sec");
let RealAMPM  = document.querySelector(".am");

setInterval(showTime, 1000); 

function showTime() { 
		let time = new Date(); 
		let hour = time.getHours(); 
		let min = time.getMinutes(); 
        let sec = time.getSeconds();  
		let AMPM = "AM"; 

		if (hour > 12) { 
			hour -= 12; 
			AMPM = "PM"; 
		} 

		if (hour == 0) { 
			hour = 12; 
			AMPM = "AM"; 
		} 
            
		if(hour < 10){
            hour = "0" + hour;
        }

        if(min < 10){
            min = "0" + min;
        }
        if(sec < 10){
            sec = "0" + sec;
    	}

		RealHour.innerHTML = hour + ""; 
        RealMin.innerHTML = min + "";
        RealSec.innerHTML = sec + "";
		RealAMPM.innerHTML = AMPM;
} 
showTime(); 