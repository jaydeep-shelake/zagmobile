import menuIcon from "../assets/menu.png"
import userIcon from "../assets/user.png"
const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center justify-between px-[25px] mt-[44px]">
      <div>
        <img src={menuIcon} alt="menu" className="w-[35px] h-[35px]"/>
      </div>
      <div className="h-[56px] w-[56px] bg-[#EEEEEE] rounded-full flex items-center justify-center">
        <img src={userIcon} alt="user" className="h-full w-full "/>
      </div>
    </div>
  )
}

export default Header