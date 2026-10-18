import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-pattern-setup--0541e92b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-pattern-setup--0541e92b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Pattern Setup ]]( claude--Eirian &amp; Pattern Setup--0541e92b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 August 2025: <Means>$[[ Eirian &amp; Pattern Setup ]]( claude--Eirian &amp; Pattern Setup--0541e92b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
