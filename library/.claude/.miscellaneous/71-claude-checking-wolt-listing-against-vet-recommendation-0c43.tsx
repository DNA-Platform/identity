import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 February 2026: <Means>$[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
