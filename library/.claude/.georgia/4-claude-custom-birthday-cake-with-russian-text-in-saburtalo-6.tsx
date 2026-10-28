import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
