import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-patterns--9ee451e7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-patterns--9ee451e7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Patterns ]]( claude--Eirian &amp; Patterns--9ee451e7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 August 2025: <Means>$[[ Eirian &amp; Patterns ]]( claude--Eirian &amp; Patterns--9ee451e7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
