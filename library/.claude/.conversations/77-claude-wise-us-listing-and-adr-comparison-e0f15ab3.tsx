import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--wise-us-listing-and-adr-comparison--e0f15ab3/.cover.tsx';
import TheSynopsis from './claude--wise-us-listing-and-adr-comparison--e0f15ab3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Wise US listing and ADR comparison ]]( claude--Wise US listing and ADR comparison--e0f15ab3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
