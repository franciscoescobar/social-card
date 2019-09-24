import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  width: 600px;
  height: 500px;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  flex-direction: column;
`;
export const Header = styled.div`
    display: flex;
    width:100%;
    flex-basis:70px;
    > * {
        margin: 8px;
    }
    
`;
export const Body = styled.div`
    display:flex;
    flex-direction: column;
    width:78%;
    flex-basis:350px;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    align-self: center;
`;
export const Image = styled.img`
    height:275px;
    width: 100%;
    object-fit: cover;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    flex: 1;
    > h2 {
        font-size: 16px;
        margin: 0;
        padding: 0;
        > small {
        font-weight: 400;
        font-size: 10px;
    }
    }
    > p {
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
    
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    height:100px;
    > * {
        margin:0;
        padding: 0;
    }
    > h2 {
        font-size: 16px;
        margin-left: 12px;
        margin-top: 12px;
    }
    > p {
        margin-left: 12px;
        margin-top: 8px;
        font-size: 12px;
        width: 300px;
    } 
`;
export const ProfileImage = styled.img`
    border-radius: 50%;
    width: calc(70px - 16px);
    height: calc(70px - 16px);
    object-fit: cover;
`;

export const Footer = styled.div`
    display: flex;
    align-self: center;
    width:78%;
    flex-basis:75px;
    .fa-comment {
        color: #a5a5a5;
    }
    .fa-retweet {
        color: #4bb00c;
    }
    .fa-heart {
        color: #f4085c;
    }
    .fa-envelope {
        color:#a5a5a5;
    }
`;
export const Icon = styled.i`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 55px;
    height: 55px;
    object-fit: cover;
    > small {
        margin-left: 4px;
        font-size: 12px;
    }
`;