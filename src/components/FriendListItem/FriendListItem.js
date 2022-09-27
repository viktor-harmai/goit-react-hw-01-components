import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { iconSize } from 'constants/';
import {
  FriendItem,
  FriendName,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem status={isOnline}>
      <GrStatusGoodSmall size={iconSize.sm} />
      <img src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
