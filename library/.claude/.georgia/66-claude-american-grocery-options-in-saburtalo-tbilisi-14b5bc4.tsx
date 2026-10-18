import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.cover.tsx';
import TheSynopsis from '../.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 June 2026: <Means>$[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
