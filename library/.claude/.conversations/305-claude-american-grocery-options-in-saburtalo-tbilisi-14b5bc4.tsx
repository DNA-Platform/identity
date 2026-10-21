import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.cover.tsx';
import TheSynopsis from './claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
