import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-community-in-tbilisi-while-recovering-from-surgery--ec653ce0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Finding community in Tbilisi while recovering from surgery ]]( claude--Finding community in Tbilisi while recovering from surgery--ec653ce0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
