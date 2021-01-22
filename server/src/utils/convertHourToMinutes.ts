export default function convertHourToMinutes(time: string) {
    // Desestruturação
    // Prim. posição = hora e segunda posição = minutos
    const [hour, minutes] = time.split(':').map(Number);  
    const timeInMinutes = (hour * 60) + minutes;  

    return timeInMinutes;
  }