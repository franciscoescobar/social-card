import React from 'react'
import {Wrapper, Header, Body, Image, Text, Footer, ProfileImage, Info, Icon} from './styled';
const Card = () => {
    return (
        <Wrapper>
            <Header>
                <ProfileImage src='https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' alt='profile-image'></ProfileImage>
                <Info>
                    <h2>The Practical Dev <small>@ThePracticalDev Sep 10</small></h2>
                    <p>Learning React? Start small.</p>
                </Info>
                <Icon className="fas fa-chevron-down"></Icon>
            </Header>
            <Body>
                <Image src='https://dummyimage.com/600x400/000/fff' alt='card-image'></Image>
                <Text>
                    <h2>Learning React? Start Small</h2>
                    <p>Can't pry yourself away from the tutorials? The cure is to make tiny little experiments apps.</p>
                </Text>
            </Body>
            <Footer>
                <Icon className="far fa-comment"><small>2</small></Icon>
                <Icon className="fas fa-retweet"><small>47</small></Icon>
                <Icon className="far fa-heart"><small>190</small></Icon>
                <Icon className="far fa-envelope"></Icon>
            </Footer>
        </Wrapper>
    )
}

export default Card
