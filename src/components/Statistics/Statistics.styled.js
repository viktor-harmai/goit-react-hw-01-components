import styled from 'styled-components';

export const StatContainer = styled.section`
  width: 300px;
  margin-bottom: 40px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: #f5f4fa;
`;

export const Title = styled.h2`
  padding: 30px;

  text-align: center;
  font-weight: 700;
  font-size: 24px;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  gap: 7px;

  padding: 10px 0px;

  background-color: #dadfe8;
  background-color: ${props => props.color};
`;

export const StatLabel = styled.span`
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

export const StatPercentage = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;
