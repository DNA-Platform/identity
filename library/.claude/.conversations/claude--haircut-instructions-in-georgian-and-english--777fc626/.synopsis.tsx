import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to locate a previous conversation about haircut instructions written in both English
            and Georgian, intended to show to a barber. Claude searched for and retrieved the chat, then pulled the most
            recent version from the end of that conversation. The final text included instructions for the barber to
            replicate the same style as last time, with clippers on the sides and back using a blend from 13 mm to 16
            mm, scissors on top and in front leaving approximately 4 cm in length, and a request to check the front
            length together at the end of the cut.
        </Paragraph>
    </Chapter>
);
