import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, a computational neuroscientist by training who has worked as a software engineer and small hedge
            fund manager for 15 years, engaged in an extensive technical discussion about two interconnected projects
            they're developing. The conversation centered on $Chemistry, a React framework they're building that uses
            object-oriented principles to simplify component development, and Semantic Reference Theory (SRT), a formal
            first-order logic theory about reference relationships that they've been developing as a foundation for
            understanding consciousness and meaning.
        </Paragraph>
    </Chapter>
);
