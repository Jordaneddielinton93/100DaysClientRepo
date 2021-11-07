import { HeroStyled } from "./Hero.style";
import {circuitBoard} from "../../../../00-Images/circuitBoard"
import Button from "../../../../00-Button/Button";
const Hero = () => {
  return ( 
    <HeroStyled>
      <div className="Hero_Img">
        {circuitBoard}
      </div>

      <div className="Hero_Heading">

        <h3 className="Hero_Heading-head1">
          From someone whos been there
        </h3>

        <h1 className="Hero_Heading-head2">
          Show your dedication with 100days of code
        </h1>

        <h2 className="Hero_Heading-head3">Are you up for the challange</h2>

        <Button TEXT="Start now"/>
      </div>
    </HeroStyled>
   );
}
 
export default Hero;