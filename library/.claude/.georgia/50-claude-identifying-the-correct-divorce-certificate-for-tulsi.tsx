import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--identifying-the-correct-divorce-certificate-for-tulsi-weddin--c3eae23d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Identifying the correct divorce certificate for Tulsi wedding ]]( claude--Identifying the correct divorce certificate for Tulsi wedding--c3eae23d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 May 2026: <Means>$[[ Identifying the correct divorce certificate for Tulsi wedding ]]( claude--Identifying the correct divorce certificate for Tulsi wedding--c3eae23d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
