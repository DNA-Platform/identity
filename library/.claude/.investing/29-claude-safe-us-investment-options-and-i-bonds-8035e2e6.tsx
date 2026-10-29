import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
