import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.cover.tsx';
import TheSynopsis from './claude--document-review-and-russian-translation-for-georgian-law-fir--331de7f9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[24 March 2026](2026-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Document review and Russian translation for Georgian law firm ]]( claude--Document review and Russian translation for Georgian law firm--331de7f9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Document review and Russian translation for Georgian law firm ]]( claude--Document review and Russian translation for Georgian law firm--331de7f9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
