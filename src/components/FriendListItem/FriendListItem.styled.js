import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 240px;
  display: flex;
  align-items: center;
  gap: 20px;

  padding: 30px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
  background-color: #f5f4fa;

  > svg {
    color: ${props => {
      return props.status ? 'green' : 'red';
    }};
  }
`;

export const FriendName = styled.p`
  flex-grow: 1;

  font-family: Quicksand;
  font-weight: 700;
  font-size: 24px;
`;
