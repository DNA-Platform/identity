import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing a TypeScript library called "Chemistry" that implements innovative architectural
            patterns including a $Particle system and a sophisticated $Catalogue reference system for dependency
            injection. They were experiencing frustrating intermittent build failures with Rollup where the build would
            work once after editing configuration files but then fail on subsequent runs. The core issue was
            TypeScript's incremental compilation cache getting corrupted, causing Rollup to encounter raw TypeScript
            syntax instead of compiled JavaScript.
        </Paragraph>
    </Chapter>
);
