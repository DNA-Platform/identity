import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
