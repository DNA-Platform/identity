import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.cover.tsx';
import TheSynopsis from './claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[7 March 2026](2026-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
