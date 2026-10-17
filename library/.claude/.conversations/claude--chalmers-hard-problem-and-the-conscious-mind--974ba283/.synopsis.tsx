import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved a deep philosophical discussion about David Chalmers' work on consciousness and
            how the person's own theoretical framework—referred to as SRT (Symbolic Reference Theory)—addresses,
            supersedes, and dissolves key problems in the philosophy of mind. The person has developed a formal theory
            of consciousness centered on concepts including metaphysical transduction, the first-person perspective
            (FPSP), the third-person objective perspective (TPOP), catalogues of symbols, and qualification equivalence.
            The discussion moved from comparing Chalmers' 1995 paper "Facing Up to the Problem of Consciousness" with
            his 1996 book The Conscious Mind, through the philosophical zombie problem, the ontological status of
            algorithms in physics, and finally into the structure of identification and primitive perceptual categories
            within a perspective.
        </Paragraph>
    </Chapter>
);
