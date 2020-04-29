import styled from 'styled-components';
import { darken } from 'polished';
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border: solid 1px #eee;
    border-radius: 3px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #e77f38;
      color: #fff;
      border-radius: 3px;
      border: 0;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.08, '#e77f38')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 8, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;
