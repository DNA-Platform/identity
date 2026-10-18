import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person submitted a Russian-language legal document and asked Claude to translate it into English. The
            document was an application to initiate enforcement proceedings for child support recovery, directed to a
            Moscow bailiff department. Claude produced a complete, formally toned English translation preserving all
            legal terminology, structural formatting, and procedural references from the original.
        </Paragraph>
    </Chapter>
);
