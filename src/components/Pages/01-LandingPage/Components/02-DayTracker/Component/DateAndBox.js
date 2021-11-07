const DateAndBox = ({day,Width,text}) => {

  const dateAndBoxStyles={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",
    minWidth:Width,
    height:"100%"
  }

  const boxStyle={
    border:"solid 2px black",
    minHeight:"48%",
    width:"95%",
    backgroundColor:"#FFD700",
    cursor:"pointer",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
  }

  return ( 
    <div style={dateAndBoxStyles}>
      <h1 style={{fontWeight:"300"}}>{day}</h1>
      <span style={boxStyle}>
        {text}
      </span>
    </div>
   );
}
 
export default DateAndBox;