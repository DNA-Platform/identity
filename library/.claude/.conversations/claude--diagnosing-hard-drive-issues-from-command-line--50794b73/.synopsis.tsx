import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            OK, I’m using a Windows PC and it has a known problem with the hard drive where the hard drive that was
            installed doesn’t work when I restart the computer. I have to shut it off and turn it on, but that’s
            background information.
        </Paragraph>
    </Chapter>
);
