import { useState } from 'react';
import Box from './components/Box/Box';
import NotificationBar from './components/NotificationBar/NotificationBar';
import Mark from './assets/images/avatar-mark-webber.webp'
import Angela from './assets/images/avatar-angela-gray.webp'
import Jacob from './assets/images/avatar-jacob-thompson.webp'
import Rizky from './assets/images/avatar-rizky-hasanuddin.webp'
import Kimberly from './assets/images/avatar-kimberly-smith.webp'
import Nathan from './assets/images/avatar-nathan-peterson.webp'
import Anna from './assets/images/avatar-anna-kim.webp'
import Chess from './assets/images/image-chess.webp'


function App() {
  const [unread, setUnread] = useState(true);
  const toggleStatus = () => {
    setUnread(!unread);
  }
  return (
  <div>
    <NotificationBar toggleStatus={toggleStatus} />
    <Box image={Mark} name='Mark Webber' action='reacted to your recent post' post='My first tournament today!' time='1m ago' unread={unread} />
    <Box image={Angela} name='Angela Gray' action='followed you' time='5m ago' unread={unread} />
    <Box image={Jacob} name='Jacob Thompson' action='has joined you group' time='1 day ago' group='Chess Club' unread={unread} />
    <Box image={Rizky} name='Rizky Hasanuddin' action='sent you a private message' time='5 days ago' message="Hello, thanks for seting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game."/>
    <Box image={Kimberly} name='Kimberly Smith' action='commented on your picture' time='1 week ago' picture={Chess}/>
    <Box image={Nathan} name='Nathan Peterson' action='reacted to your recent post' post='5 end-game strategies to increase your win rate' time='2 week ago'/>
    <Box image={Anna} name='Anna Kim' action='left the group' group='Chess Club' time='2 weeks ago'/>
  </div>
  );
}

export default App;
