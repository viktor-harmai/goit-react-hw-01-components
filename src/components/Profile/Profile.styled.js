import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin-bottom: 40px;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
  background-color: #f5f4fa;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;

  text-align: center;
`;

export const Avatar = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #5e6163;
`;

export const Location = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #5e6163;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #dadfe8;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  align-items: center;
  padding: 10px 0px;
  outline: 1px solid #bdbdbd;
`;

export const Label = styled.span`
  color: #5e6163;
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
