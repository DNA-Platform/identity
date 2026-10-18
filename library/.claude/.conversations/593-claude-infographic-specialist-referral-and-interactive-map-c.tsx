import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--infographic-specialist-referral-and-interactive-map-capabili--58fe3b1b/.cover.tsx';
import TheSynopsis from './claude--infographic-specialist-referral-and-interactive-map-capabili--58fe3b1b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[16 March 2026](2026-03-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Infographic specialist referral and interactive map capabilities ]]( claude--Infographic specialist referral and interactive map capabilities--58fe3b1b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Infographic specialist referral and interactive map capabilities ]]( claude--Infographic specialist referral and interactive map capabilities--58fe3b1b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
