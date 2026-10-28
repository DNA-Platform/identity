import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.cover.tsx';
import TheSynopsis from './claude--spacex-valuation-trajectory-and-funding-milestones--1c383188/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SpaceX valuation trajectory and funding milestones ]]( claude--SpaceX valuation trajectory and funding milestones--1c383188 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ SpaceX valuation trajectory and funding milestones ]]( claude--SpaceX valuation trajectory and funding milestones--1c383188 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
