const pSeconds = document.getElementById('seconds');
const pMinutes = document.getElementById('minutes');
const pHours = document.getElementById('hours');
const pDays = document.getElementById('days');

const futureDate = new Date("August 28, 2024 00:00:00 ").getTime();

//Função que recebe o unit como argumento
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const setValues = ({seconds,minutes,hours,days}) => {
  
    pSeconds.innerHTML = getTimeUnit(seconds);
    pMinutes.innerHTML = getTimeUnit(minutes);
    pHours.innerHTML = getTimeUnit(hours);
    pDays.innerHTML = getTimeUnit(days);
}

const updateCountdown = () => {

    const dateNow = new Date().getTime();
    
    const difSeconds = (futureDate-dateNow)/1000; //Dieferença da data futura - data atual /1000 para transformar em segundos
    
    const days = Math.floor(difSeconds /60/60/24); //60 segundos/60minutos/24horas
    const hours = Math.floor(difSeconds/60/60)%24 ;
    const minutes = Math.floor(difSeconds/60)%60;
    const seconds = Math.floor(difSeconds%60);
      
    setValues({days,hours,minutes,seconds})

   
}

setInterval(updateCountdown,1000);





