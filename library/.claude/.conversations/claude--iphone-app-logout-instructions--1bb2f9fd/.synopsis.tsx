import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a brief technical support question about how to log out of the Claude iPhone app,
            expressing some frustration. Claude provided a short, direct answer: tap the initials in the upper right
            corner, then select "Log Out" from the menu.
        </Paragraph>
    </Chapter>
);
