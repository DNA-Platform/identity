import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russian-education--e4264f79/.cover.tsx';
import TheSynopsis from './claude--russian-education--e4264f79/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian Education ]]( claude--Russian Education--e4264f79 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Russian Education ]]( claude--Russian Education--e4264f79 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
