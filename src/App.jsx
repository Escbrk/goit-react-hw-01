import user from './json/user.json';
import friends from './json/friends.json';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
