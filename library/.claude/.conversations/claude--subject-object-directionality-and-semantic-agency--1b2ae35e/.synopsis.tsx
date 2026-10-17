import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This session continued a multi-session development project on Semantic Relation Theory (SRT), a formal
            framework being developed by Doug. The conversation began with Doug providing critical corrections to a
            previously produced reception analysis document. Three specific problems were identified: first, that the
            symbol/literal distinction had been misrepresented as a clean binary dichotomy when it is actually
            relational and contextual — a symbol can be the literal of another symbol (as with "word"), and a literal
            can function symbolically depending on context. Second, that the philosopher of mind section had been
            written as a caricature of someone resisting formalization, when a real philosopher of mind would be
            grappling with how symbolism allows transcendence of objectivity's limits — the very substance of the hard
            problem. Third, that the recognition/resistance structure applied throughout the document was a flat
            journalistic template rather than genuine intellectual analysis.
        </Paragraph>
    </Chapter>
);
