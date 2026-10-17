import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--safe-us-investment-options-and-i-bonds--8035e2e6/.cover.tsx';
import TheSynopsis from './claude--safe-us-investment-options-and-i-bonds--8035e2e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[14 February 2026](2026-02-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 28 exchanges: <Means>$[[ Safe US investment options and I Bonds ]]( claude--Safe US investment options and I Bonds--8035e2e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
