import { ConnectKitButton } from 'connectkit';
import { Chat } from "@pushprotocol/uiweb";
import {Rcard} from './component/card';
import {Cardse} from './component/cardse';
import {Cardsp} from './component/cardsp';
import {Navbar} from "./component/Navbar";

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor : '#eae8e7',
      }}
    >
      <Rcard></Rcard>
      <Cardse></Cardse>
      <Cardsp></Cardsp>
      <ConnectKitButton />
      
      <Chat
   account="0xC78887CB12abBd0FE80062011964A0715dC29629" //user address
   supportAddress="0x85a08418416d098Fd1fCF31c6f10Ac323140Ed9C" //support address
   apiKey="vzOQa8Hda3.lD6Yvrij1T4qHrE07Mp7XcE3mRWu8Yl6WAmOzLSfI63xWuGSoNkXsHeBDVvG63Hs"
    env="staging"
 />
    </div>
  );
}

export default App;
