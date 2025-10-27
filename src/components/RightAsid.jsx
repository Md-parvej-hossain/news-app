import { useContext } from 'react';
import FindUs from './FindUs';
import Qzone from './Qzone';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../provider/AutProvider';

const RightAsid = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="space-y-8">
      {user ? '' : <SocialLogin></SocialLogin>}
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAsid;
