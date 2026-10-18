import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is working on a legal case involving Ana (Anastasia), who is engaged in ongoing litigation with her
            former partner Maxim. The conversation began with Doug asking Claude to translate a legal document from
            Russian — an appeal filed by Maxim challenging the alimony portion of a court ruling, in which he argues the
            fixed monthly amount is excessive given his income variability and a recent spinal surgery. Claude provided
            a full translation of the document, preserving legal structure and noting internal contradictions in Maxim's
            financial arguments.
        </Paragraph>
    </Chapter>
);
