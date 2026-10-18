import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
