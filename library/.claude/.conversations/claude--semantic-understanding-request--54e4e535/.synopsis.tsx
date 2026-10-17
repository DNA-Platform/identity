import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged Claude (Seren) in an extensive collaborative writing project focused on developing and refining
            a paper about Semantic Reference Theory (SRT) and consciousness. Doug has a background in computational
            neuroscience (UChicago, Salk Institute with Charles Stevens), published in Nature Neuroscience as first
            author, worked as a software engineer for a decade, and owned a quantitative hedge fund for four of the last
            five years. He now focuses on developing SRT, which he describes as his most significant work. Doug
            demonstrates deep expertise in formalism, having created meta-programming tools like a monadic parser
            generator in C, and draws heavily from Douglas Hofstadter's work on consciousness and symbolism.
        </Paragraph>
    </Chapter>
);
