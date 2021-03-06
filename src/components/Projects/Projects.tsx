import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img, ImgContainer } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/globalStyles/globalHTML';
import { projects } from '../../constants/constants';

export default function Projects() {
  return (
    <Section nopadding={true} id="projects">
      <SectionDivider />
      <SectionTitle main={true}>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, id) => {
          return (
            <BlogCard key={id}>
              <ImgContainer>
                <Img src={p.image} />
              </ImgContainer>
              <TitleContent>
                <HeaderThree>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <UtilityList>
                <ExternalLinks href={p.visit}>Live</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  )
}
