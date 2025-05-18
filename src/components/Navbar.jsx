import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
    return (
        <>
        <header>
 
  <div className='flex items-center justify-between px-3 text-2xl'>
    <div>
      <img
        src={LOGO_URL}
        alt=''
        className='w-20 h-20'
      />
    </div>
    <ul className='flex justify-between list-none w-96 gap-10'>
      <li>
        <a className="py-2 px-10 border-2 rounded-lg hover:bg-blue-600" href=''>Home</a>
      </li>
      <li>
        <a  className ="py-2 px-10  border-2 rounded-lg hover:bg-blue-600" href=''>About</a>
      </li>
      <li>
        <a className="py-2 px-10  border-2 rounded-lg hover:bg-blue-600" href=''>Contact</a>
      </li>
    </ul>
    <div>Cart</div>
  </div>
</header>

        </>
    )
}

export default Navbar;