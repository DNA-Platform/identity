import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--reviewing-work-profile-and-skill-assessment--416413f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reviewing-work-profile-and-skill-assessment--416413f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reviewing work profile and skill assessment ]]( claude--Reviewing work profile and skill assessment--416413f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Reviewing work profile and skill assessment ]]( claude--Reviewing work profile and skill assessment--416413f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
