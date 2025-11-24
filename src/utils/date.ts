
export const dateTimeWithMilliSec=():String=>{
    const now=new Date();
    const year=now.getFullYear()
    const month=(now.getMonth()+1).toString().padStart(2,'0');
    const day=now.getDay().toString().padStart(2,'0')
    const hour=now.getHours().toString().padStart(2,'0')
    const mins=now.getMinutes().toString().padStart(2,'0')
    const sec=now.getSeconds().toString().padStart(2,'0')
    const milliSec=now.getMilliseconds().toString().padStart(3,'0')
    console.log(`${year}/${month}/${day}-${hour}:${mins}:${sec}:${milliSec}`)

    return `${year}/${month}/${day}-${hour}:${mins}:${sec}:${milliSec}`

}
export const executionTime:any={
    startTime:undefined,
    endTime:undefined
}
