import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 February 2026: <Means>$[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
