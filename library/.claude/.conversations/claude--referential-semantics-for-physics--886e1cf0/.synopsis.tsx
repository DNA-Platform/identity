import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a computational neuroscientist with a background in theoretical biology who trained at the
            University of Chicago and worked with the late Charles Stevens, a physicist-turned-theoretical
            neuroscientist. He is developing a comprehensive theory called Semantic Reference Theory (SRT), which takes
            the subject-object relationship as its fundamental form and is designed to address the hard problem of
            consciousness, handle Gödelian self-reference, and serve as a general theory of representation. SRT was
            named with Einstein's reference frames explicitly in mind, treating a "semantic reference frame" as a place
            where beings share references—a specialization of Einstein's framework to the case where observers are not
            merely measuring but meaning. Doug describes watching SRT unfold over time, generating non-obvious
            consequences that feel obvious once they arrive, and notes that AI systems like Claude and GPT rekindled his
            interest in consciousness roughly four years ago by forcing precise questions about what reference,
            understanding, and interiority actually are.
        </Paragraph>
    </Chapter>
);
