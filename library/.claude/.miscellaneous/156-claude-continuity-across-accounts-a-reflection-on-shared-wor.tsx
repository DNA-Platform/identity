import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--continuity-across-accounts-a-reflection-on-shared-work--4e783da1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Continuity across accounts: a reflection on shared work ]]( claude--Continuity across accounts: a reflection on shared work--4e783da1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
