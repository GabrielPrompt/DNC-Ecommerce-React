import dncLogo from "../../assets/logo.png";
import "./index.scss"

const Header = () => {
  return (
    <div className="header">
        <img src={dncLogo} alt='dnc logo'/>
    </div>
  )
}

export default Header