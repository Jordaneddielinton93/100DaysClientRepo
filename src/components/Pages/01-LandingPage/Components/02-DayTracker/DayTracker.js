import DateAndBox from "./Component/DateAndBox";
import { DayTrackerStyled } from "./DayTracker.style";

const DayTracker = () => {

  const date = new Date();

  function getTheDateBeforeTodayWithGivenNumber(daysFromToday){
  // Days you want to subtract = daysFromToday
    const last = new Date(date.getTime() - (daysFromToday * 24 * 60 * 60 * 1000));
    const day =last.getDate();
    const month=last.getMonth()+1;
    const year=last.getFullYear();
    return [day,month,year]
  }
  function getTheDateAfterTodayWithGivenNumber(daysAfterToday){
    // Days you want to add = daysAfterToday
      const last = new Date(date.getTime() + (daysAfterToday * 24 * 60 * 60 * 1000));
      const day =last.getDate();
      const month=last.getMonth()+1;
      const year=last.getFullYear();
      return [day,month,year]
    }

  let listOfOrderedDays=[]
  for(let i=1;i<10;i++){
    if(i<5){
      listOfOrderedDays.unshift(getTheDateBeforeTodayWithGivenNumber(i))
    }
    if(i===5){
      // gets the day and month
      listOfOrderedDays.push(["Today, "+`${date}`.split(" ")[2] +" "+`${date}`.split(" ")[1]])
    }
    if(i>5){
      listOfOrderedDays.push(getTheDateAfterTodayWithGivenNumber(i-5))
    }
  }
  console.log(listOfOrderedDays)


  return ( 
    <DayTrackerStyled>
      {listOfOrderedDays.map((date,index)=>{
        return <DateAndBox day={date[0]} Width={"50px"}/>
      })}
    </DayTrackerStyled>
   );
}
 
export default DayTracker;