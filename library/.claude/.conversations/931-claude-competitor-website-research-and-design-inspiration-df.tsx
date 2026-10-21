import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--competitor-website-research-and-design-inspiration--df8abc48/.cover.tsx';
import TheSynopsis from './claude--competitor-website-research-and-design-inspiration--df8abc48/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Competitor website research and design inspiration ]]( claude--Competitor website research and design inspiration--df8abc48 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Competitor website research and design inspiration ]]( claude--Competitor website research and design inspiration--df8abc48 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
