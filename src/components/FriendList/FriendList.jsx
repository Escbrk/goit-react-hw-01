import FriendListItem from '../FriendListItem/FriendListItem';
import { Item, List } from './FriendList.styled';

const FriendList = props => {
  return (
    <List>
          {props.friends.map(({ id, avatar, name, isOnline }) => {          
        return (
          <Item key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </Item>
        );
      })}
    </List>
  );
};

export default FriendList;
