const DateAndBox = ({day,Width}) => {

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
    cursor:"pointer"
  }

  return ( 
    <div style={dateAndBoxStyles}>
      <h1 style={{fontWeight:"300"}}>{day}</h1>
      <span style={boxStyle}>

      </span>
    </div>
   );
}
 
export default DateAndBox;