import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centered on a detailed, technically engaged discussion about recovery from a calcaneal
            osteotomy performed abroad to correct flatfoot and ankle pain from pickleball. The person had the procedure
            done in a context where they received minimal post-operative information or follow-up guidance, leaving them
            without a recovery timeline or explanation of expected symptoms. They came to Claude seeking substantive
            research and clinical context rather than reassurance, and consistently pushed back when they felt Claude's
            framing was imprecise or overstated — corrections Claude incorporated in real time.
        </Paragraph>
    </Chapter>
);
