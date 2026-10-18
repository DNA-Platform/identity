import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centered on a complex, multi-jurisdictional legal matter involving Russian family court
            enforcement proceedings, a child travel ban, and long-term strategic planning across several parallel legal
            tracks. The person (Doug) is helping Ana navigate litigation against Maxim, the children's father, reviewing
            Russian-language enforcement documents and translating key points. The conversation began with Doug
            uploading two Russian bailiff orders (постановления о возбуждении исполнительного производства) — separate
            enforcement proceedings for two minor children — and asking Claude to read, translate, and explain them as
            formal documents.
        </Paragraph>
    </Chapter>
);
