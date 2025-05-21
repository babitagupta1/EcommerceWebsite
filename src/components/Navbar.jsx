import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
        <div className='flex items-center justify-between px-3 text-2xl'>
          <div>
            <Link to='/'><img
              src={LOGO_URL}
              alt=''
              className='w-20 h-20'
            /></Link>
          </div>
          <ul className='flex justify-between list-none w-96 gap-10'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div>Cart</div>
        </div>
   

    </>
  )
}

export default Navbar;