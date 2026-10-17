import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bitcoin--c3b4dd81/.cover.tsx';
import TheSynopsis from './claude--bitcoin--c3b4dd81/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 73 exchanges: <Means>$[[ Bitcoin ]]( claude--Bitcoin--c3b4dd81 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
