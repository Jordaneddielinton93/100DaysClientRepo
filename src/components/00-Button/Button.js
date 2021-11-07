const Button = ({TEXT,WIDTH,HEIGHT,COLOR,BACKCOLOR,BACKIMG}) => {
  return ( 
    <button style={{
      width:"100px",
      height: "35px",
      backgroundColor:"#85FFBD",
      backgroundImage:"linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
      borderRadius:"10px",
      border: "none",
      cursor: "pointer",
      fontSize:"1rem",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    }}>
      {TEXT}
    </button>
   );
}
 
export default Button;