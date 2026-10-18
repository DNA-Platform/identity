import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--screenshot-translation-request--be4414e7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--screenshot-translation-request--be4414e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Screenshot translation request ]]( claude--Screenshot translation request--be4414e7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 March 2026: <Means>$[[ Screenshot translation request ]]( claude--Screenshot translation request--be4414e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
