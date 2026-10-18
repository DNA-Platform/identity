import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.cover.tsx';
import TheSynopsis from '../.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[7 March 2026](2026-03-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 March 2026: <Means>$[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
