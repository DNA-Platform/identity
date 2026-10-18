import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-29-june-2026--d8c89070/.cover.tsx';
import TheSynopsis from './claude--untitled-29-june-2026--d8c89070/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 29 June 2026 ]]( claude--Untitled, 29 June 2026--d8c89070 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Untitled, 29 June 2026 ]]( claude--Untitled, 29 June 2026--d8c89070 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
