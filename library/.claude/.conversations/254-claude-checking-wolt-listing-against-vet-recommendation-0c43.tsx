import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.cover.tsx';
import TheSynopsis from './claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Checking Wolt listing against vet recommendation ]]( claude--Checking Wolt listing against vet recommendation--0c43db6f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
