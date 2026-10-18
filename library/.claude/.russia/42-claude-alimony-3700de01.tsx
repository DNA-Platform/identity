import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alimony--3700de01/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alimony--3700de01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alimony ]]( claude--Alimony--3700de01 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ Alimony ]]( claude--Alimony--3700de01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
