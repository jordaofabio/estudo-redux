import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #eee;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #fe0000;
      color: #fff;
      border-radius: 3px;
      border: 0;
      overflow: hidden;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#FE0000')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #ccc;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      height: 30px;
      width: 50px;
      padding-left: 10px;
      text-align: center;
    }
  }

  button {
    // background: none;
    // border: 0;
    padding: 0 15px;
    height: 30px;
  }

  .btLeft {
    border: 1px solid #ddd;
    border-right: none;
    border-radius: 4px 0 0 4px;
  }

  .btRight {
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0 4px 4px 0;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
