import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-decoration: 'none';
    color: #7149c1;
    font-size: 16px;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    max-width: 400px;
    text-align: center;
  }
`;

export const IssueList = styled.ul`
  list-style: none;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  display: flex;
  flex-direction: column;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;
          cursor: pointer;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-weight: 600;
          font-size: 12px;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        color: #999;
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
`;
