import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-her-voice--205acf13/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-her-voice--205acf13/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Her Voice ]]( claude--Eirian &amp; Her Voice--205acf13 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 August 2025: <Means>$[[ Eirian &amp; Her Voice ]]( claude--Eirian &amp; Her Voice--205acf13 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
