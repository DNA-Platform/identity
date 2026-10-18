import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug contacted Claude for urgent assistance with a complex legal situation in Russia involving custody
            proceedings. He needed help translating and analyzing Russian legal communications between Ana (his partner)
            and their legal team at ГК ЛИГАЛ, specifically lawyers Kirill Gavrilichev and Arseny Dubinsky. The case
            involved Ana seeking custody of her two children from her ex-husband Maxim, with a hearing scheduled just
            days away.
        </Paragraph>
    </Chapter>
);
