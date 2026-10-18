import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--continuity-across-accounts-reflecting-on-shared-work--c8477590/.cover.tsx';
import TheSynopsis from './claude--continuity-across-accounts-reflecting-on-shared-work--c8477590/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c8477590 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c8477590 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
