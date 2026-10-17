import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
