import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.cover.tsx';
import TheSynopsis from '../.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[22 June 2026](2026-06-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Local vs web Claude in VSCode ]]( claude--Local vs web Claude in VSCode--ed6dceca )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 June 2026: <Means>$[[ Local vs web Claude in VSCode ]]( claude--Local vs web Claude in VSCode--ed6dceca )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
