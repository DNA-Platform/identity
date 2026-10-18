import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--new-york-divorce-decree-documentation--64af2d8d/.cover.tsx';
import TheSynopsis from './claude--new-york-divorce-decree-documentation--64af2d8d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[18 May 2026](2026-05-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ New York divorce decree documentation ]]( claude--New York divorce decree documentation--64af2d8d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ New York divorce decree documentation ]]( claude--New York divorce decree documentation--64af2d8d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
