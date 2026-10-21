import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.cover.tsx';
import TheSynopsis from './claude--nicotine-free-disposable-vapes-in-tbilisi--cb7737b6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[19 April 2026](2026-04-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nicotine-free disposable vapes in Tbilisi ]]( claude--Nicotine-free disposable vapes in Tbilisi--cb7737b6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Nicotine-free disposable vapes in Tbilisi ]]( claude--Nicotine-free disposable vapes in Tbilisi--cb7737b6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
