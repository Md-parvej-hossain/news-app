import { format } from 'date-fns';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5 gap-3">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      <p className='font-semibold text-accent'>{format(new Date(), 'EEEE, MMMM MM, yyyy')}</p>
    </div>
  );
};

export default Header;
