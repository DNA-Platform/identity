import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
