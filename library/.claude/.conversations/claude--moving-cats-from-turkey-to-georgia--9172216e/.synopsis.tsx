import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user relocated from the United States to Turkey six months ago with two cats, having completed extensive
            paperwork including rabies vaccinations and titer tests for entry. They now need to travel from Turkey to
            Georgia with their cats and sought verification of their research on the required export process. The
            conversation focused on confirming the two-step procedure: first visiting a private veterinarian for
            document preparation and health checks, then obtaining an official government veterinary export certificate
            from the İlçe Tarım ve Orman Müdürlüğü (local Ministry of Agriculture office).
        </Paragraph>
    </Chapter>
);
