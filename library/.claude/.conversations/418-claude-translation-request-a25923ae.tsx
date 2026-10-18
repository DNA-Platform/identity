import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translation-request--a25923ae/.cover.tsx';
import TheSynopsis from './claude--translation-request--a25923ae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translation request ]]( claude--Translation request--a25923ae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Translation request ]]( claude--Translation request--a25923ae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
