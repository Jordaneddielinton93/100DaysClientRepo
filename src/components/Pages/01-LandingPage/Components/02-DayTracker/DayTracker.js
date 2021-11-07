import { useEffect, useState } from "react";
import DateAndBox from "./Component/DateAndBox";
import { DayTrackerStyled } from "./DayTracker.style";

const DayTracker = () => {

  let [data,setData]=useState(false)

  async function getHerokuData(){
  const response = await fetch("https://one-hundred-days-of-code.herokuapp.com/user/profiles")
  const data = await response.json()
  console.log(data)
  setData(data)
  }
  useEffect(()=>{
    getHerokuData()
  },[])

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

  let listOfOrderedDays4BeforeAnd4AfterToday=[]
  for(let i=1;i<10;i++){
    if(i<5){
      listOfOrderedDays4BeforeAnd4AfterToday.unshift(getTheDateBeforeTodayWithGivenNumber(i))
    }
    if(i===5){
      // gets the day and month
      listOfOrderedDays4BeforeAnd4AfterToday.push(["Today, "+`${date}`.split(" ")[2] +" "+`${date}`.split(" ")[1]])
    }
    if(i>5){
      listOfOrderedDays4BeforeAnd4AfterToday.push(getTheDateAfterTodayWithGivenNumber(i-5))
    }
  }

  
  return ( 
    <DayTrackerStyled>
      {listOfOrderedDays4BeforeAnd4AfterToday.map((datefromList,index)=>{
        return data && 
        <DateAndBox day={datefromList[0]} Width={"50px"}
        text={data[0].list_of_dates_posted.includes(datefromList[0])&&"tick"}
        />
      })}
    </DayTrackerStyled>
   );
}
 
export default DayTracker;