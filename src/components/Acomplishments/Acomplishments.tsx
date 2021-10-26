import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/globalStyles/globalHTML';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1600, text: 'Lichess Elo', },
];

export default function Acomplishments(): JSX.Element {
  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  )
}
