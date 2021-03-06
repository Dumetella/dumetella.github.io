import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

export default function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:dumetella@outlook.com">
            dumetella@outlook.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Stuff happens cuz stuff</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Dumetella">
            <FaGithub size={'3em'} />
          </SocialIcons>
          <SocialIcons href="https://t.me/dumetella">
            <FaTelegram size={'3em'} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}



/* <LinkColumn>
  <LinkTitle>Call</LinkTitle>
  <LinkItem href="tel:1-900-SUICIDE">1-900-SUICIDE</LinkItem>
</LinkColumn> */

