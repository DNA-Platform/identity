import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.cover.tsx';
import TheSynopsis from './claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[16 February 2026](2026-02-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Amazon and online shopping options in Tbilisi ]]( claude--Amazon and online shopping options in Tbilisi--8a0dcca4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Amazon and online shopping options in Tbilisi ]]( claude--Amazon and online shopping options in Tbilisi--8a0dcca4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
