import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--local-vs-web-claude-in-vscode--ed6dceca/.cover.tsx';
import TheSynopsis from './claude--local-vs-web-claude-in-vscode--ed6dceca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[22 June 2026](2026-06-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Local vs web Claude in VSCode ]]( claude--Local vs web Claude in VSCode--ed6dceca )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Local vs web Claude in VSCode ]]( claude--Local vs web Claude in VSCode--ed6dceca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
