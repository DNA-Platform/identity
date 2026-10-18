import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is currently in Tbilisi, Georgia, seeking apartment rental assistance for a family relocation that
            includes finding housing near Happy School for at least a couple of months. They are located on David
            Gamrekeli Street in Saburtalo District, near Technical University metro station. Claude provided
            comprehensive guidance on Tbilisi's rental market, identifying the primary Georgian real estate websites:
            ss.ge (the largest platform), myhome.ge, and korter.ge, with significant overlap in listings across
            platforms. The user learned that Happy School has two campuses, with the main Sairme Street 116 location
            conveniently situated in the same Saburtalo District where they're currently staying, near Medical
            University metro station.
        </Paragraph>
    </Chapter>
);
