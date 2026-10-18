import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is planning a trip from Tbilisi, Georgia to New York to retrieve personal belongings—primarily
            paintings—and transport them back to Tbilisi as checked baggage on a return flight. The core planning
            challenge involved identifying how to safely pack stretched canvases (largest being 3'×4', with a second
            around 36"×40", and a third framed piece with glass at approximately 35"–40" longest dimension), which
            airlines accept oversize checked baggage on the JFK–TBS route, and what logistical infrastructure exists on
            Long Island to support the packing and transportation process.
        </Paragraph>
    </Chapter>
);
