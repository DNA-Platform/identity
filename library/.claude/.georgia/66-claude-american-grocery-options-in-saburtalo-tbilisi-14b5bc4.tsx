import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.cover.tsx';
import TheSynopsis from '../.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 June 2026: <Means>$[[ American grocery options in Saburtalo Tbilisi ]]( claude--American grocery options in Saburtalo Tbilisi--14b5bc46 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
