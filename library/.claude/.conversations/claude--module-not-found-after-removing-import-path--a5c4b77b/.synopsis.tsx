import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user encountered a persistent build error in their Next.js 15.5.4 project where TypeScript couldn't
            resolve the module '@/archive/chemistry', despite having removed all references to that old path and updated
            imports to use '@/chemistry'. The conversation began with troubleshooting what appeared to be a caching
            issue, progressing through several debugging steps including clearing Next.js build cache, deleting
            nodemodules, and examining the tsconfig.json configuration. The root cause was eventually identified as
            unsaved files in VSCode that still contained the old import paths, which was resolved by saving all open
            tabs using Ctrl+K S.
        </Paragraph>
    </Chapter>
);
