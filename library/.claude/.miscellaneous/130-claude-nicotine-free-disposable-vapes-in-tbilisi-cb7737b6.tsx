import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nicotine-free disposable vapes in Tbilisi ]]( claude--Nicotine-free disposable vapes in Tbilisi--cb7737b6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 April 2026: <Means>$[[ Nicotine-free disposable vapes in Tbilisi ]]( claude--Nicotine-free disposable vapes in Tbilisi--cb7737b6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
