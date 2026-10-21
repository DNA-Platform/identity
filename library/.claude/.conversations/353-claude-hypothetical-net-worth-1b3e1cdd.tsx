import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hypothetical-net-worth--1b3e1cdd/.cover.tsx';
import TheSynopsis from './claude--hypothetical-net-worth--1b3e1cdd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Hypothetical Net Worth ]]( claude--Hypothetical Net Worth--1b3e1cdd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
