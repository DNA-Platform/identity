import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is working with Claude to draft client-facing messages on behalf of his wife Ana, a cartographer and
            illustrator who operates a freelance business (DNA, ana@dna.love) primarily through Fiverr. The conversation
            involved crafting a response to a client named Frankie from PIXL Lines, who had expressed disappointment
            that Ana couldn't take on an infographic project, asked for a referral to an infographic specialist, and
            inquired about interactive map capabilities.
        </Paragraph>
    </Chapter>
);
