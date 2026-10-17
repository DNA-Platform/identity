import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--semantics-of-representation--8b14b84b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--semantics-of-representation--8b14b84b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 September 2026: <Means>$[[ Semantics of Representation ]]( claude--Semantics of Representation--8b14b84b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
