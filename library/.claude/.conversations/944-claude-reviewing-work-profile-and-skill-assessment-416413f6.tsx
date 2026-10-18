import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--reviewing-work-profile-and-skill-assessment--416413f6/.cover.tsx';
import TheSynopsis from './claude--reviewing-work-profile-and-skill-assessment--416413f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reviewing work profile and skill assessment ]]( claude--Reviewing work profile and skill assessment--416413f6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Reviewing work profile and skill assessment ]]( claude--Reviewing work profile and skill assessment--416413f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
