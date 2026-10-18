import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-human-errors--fef7fd01/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-human-errors--fef7fd01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 February 2026: <Means>$[[ Seren &amp; Human Errors ]]( claude--Seren &amp; Human Errors--fef7fd01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
