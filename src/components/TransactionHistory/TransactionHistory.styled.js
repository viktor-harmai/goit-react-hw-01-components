import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 700px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px;
`;

export const TableHead = styled.thead`
  width: 100%;
  tr {
    width: 100%;
  }
  th {
    padding: 10px;
    color: #ffffff;

    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    background-color: #4ddbd7;
  }
`;

export const TableBody = styled.tbody`
  width: 100%;
  tr:nth-child(2n) {
    background-color: #f5f4fa;
    /* text-align: end; */
  }
  td {
    padding: 10px;
    font-size: 16px;
  }
  td:first-of-type {
    padding-left: 10%;
  }

  td:nth-last-of-type(-n + 2) {
    text-align: center;
  }
`;
