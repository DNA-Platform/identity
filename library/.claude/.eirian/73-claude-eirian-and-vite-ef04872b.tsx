import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-vite--ef04872b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-vite--ef04872b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Vite ]]( claude--Eirian &amp; Vite--ef04872b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 August 2025: <Means>$[[ Eirian &amp; Vite ]]( claude--Eirian &amp; Vite--ef04872b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
