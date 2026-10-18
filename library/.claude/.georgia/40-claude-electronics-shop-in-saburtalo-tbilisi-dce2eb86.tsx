import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.cover.tsx';
import TheSynopsis from '../.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 March 2026: <Means>$[[ Electronics shop in Saburtalo Tbilisi ]]( claude--Electronics shop in Saburtalo Tbilisi--dce2eb86 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
