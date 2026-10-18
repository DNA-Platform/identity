import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--continuity-across-accounts-reflecting-on-shared-work--c69ef1b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--continuity-across-accounts-reflecting-on-shared-work--c69ef1b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[25 May 2026](2026-05-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
