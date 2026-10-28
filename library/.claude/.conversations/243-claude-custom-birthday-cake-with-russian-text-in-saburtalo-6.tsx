import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.cover.tsx';
import TheSynopsis from './claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
