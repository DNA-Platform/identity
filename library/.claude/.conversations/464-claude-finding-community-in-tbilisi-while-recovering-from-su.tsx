import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.cover.tsx';
import TheSynopsis from './claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
