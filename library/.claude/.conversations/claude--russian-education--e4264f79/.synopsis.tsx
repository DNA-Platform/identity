import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is helping a family member navigate a complex international relocation from Russia to Georgia
            involving educational and legal considerations. The conversation focused on evaluating schooling options for
            two children currently using Foxford (Russian online education) while considering Happy School as a local
            option in Georgia. The user sought research on whether this educational approach would maintain Russian
            curriculum continuity while providing necessary social structure during the transition.
        </Paragraph>
    </Chapter>
);
