import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two related technical questions about repository architecture in GitHub. First, they asked
            how monorepos work and whether there exists a design pattern where a single repository serves as a
            coordination layer while the actual code lives distributed across multiple other repositories. Claude
            explained the landscape of approaches: standard monorepos (Nx, Turborepo, pnpm workspaces), Git submodules,
            Git subtree, the meta tool, and how GitHub itself uses a "universe repo" coordination pattern internally.
        </Paragraph>
    </Chapter>
);
