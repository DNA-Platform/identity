import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
