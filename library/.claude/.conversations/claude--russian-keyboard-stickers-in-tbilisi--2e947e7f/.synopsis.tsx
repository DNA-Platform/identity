import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is currently in Tbilisi, Georgia and needed to find Russian Cyrillic keyboard stickers to add to
            their laptop that currently has English letters. They preferred to order online but were open to visiting
            physical shops if necessary. Claude conducted web searches to identify both local and online options for
            purchasing these stickers.
        </Paragraph>
    </Chapter>
);
