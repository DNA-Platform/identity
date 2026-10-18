import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.cover.tsx';
import TheSynopsis from './claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
