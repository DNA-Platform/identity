import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--rothschild-pronunciation-across-languages--e5dd5c66/.cover.tsx';
import TheSynopsis from '../.conversations/claude--rothschild-pronunciation-across-languages--e5dd5c66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 February 2026: <Means>$[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
