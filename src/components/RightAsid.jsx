import FindUs from './FindUs';
import Qzone from './Qzone';
import SocialLogin from './SocialLogin';

const RightAsid = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAsid;
