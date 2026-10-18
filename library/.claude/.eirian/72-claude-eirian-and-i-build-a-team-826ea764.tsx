import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-i-build-a-team--826ea764/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-i-build-a-team--826ea764/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; I build a Team ]]( claude--Eirian &amp; I build a Team--826ea764 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 August 2025: <Means>$[[ Eirian &amp; I build a Team ]]( claude--Eirian &amp; I build a Team--826ea764 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
