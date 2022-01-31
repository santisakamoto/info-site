// import ReactLogo from "../Images/react-brands.svg";
import { ReactComponent as ReactLogo } from '../Images/react-brands.svg';
function Nav(){
  return(
      <nav>
       <div className='React'>
        <ReactLogo style={{"width":"40px","color":"rgb(0,209,247)"}} />
        <h3>ReactFacts</h3>
       </div>
       <h4>React Course - Project 1</h4>
      </nav>

  )
}

export default Nav;