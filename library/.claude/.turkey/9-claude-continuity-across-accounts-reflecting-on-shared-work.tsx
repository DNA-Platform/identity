import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--continuity-across-accounts-reflecting-on-shared-work--c69ef1b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--continuity-across-accounts-reflecting-on-shared-work--c69ef1b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Continuity across accounts: reflecting on shared work ]]( claude--Continuity across accounts: reflecting on shared work--c69ef1b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
