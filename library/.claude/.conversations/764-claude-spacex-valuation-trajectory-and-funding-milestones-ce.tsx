import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--spacex-valuation-trajectory-and-funding-milestones--ced49bf9/.cover.tsx';
import TheSynopsis from './claude--spacex-valuation-trajectory-and-funding-milestones--ced49bf9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SpaceX valuation trajectory and funding milestones ]]( claude--SpaceX valuation trajectory and funding milestones--ced49bf9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ SpaceX valuation trajectory and funding milestones ]]( claude--SpaceX valuation trajectory and funding milestones--ced49bf9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
