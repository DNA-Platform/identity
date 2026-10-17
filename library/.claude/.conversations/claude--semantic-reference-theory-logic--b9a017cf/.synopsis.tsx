import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved an extensive technical discussion about Semantic Reference Theory (SRT), a formal
            system the user has developed that provides an alternative foundation to set theory for understanding
            meaning, reference, and consciousness. The user is working on a comprehensive project with multiple
            documents exploring SRT's theoretical foundations and applications.
        </Paragraph>
    </Chapter>
);
