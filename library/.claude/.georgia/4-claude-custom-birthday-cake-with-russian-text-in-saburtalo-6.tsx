import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--custom-birthday-cake-with-russian-text-in-saburtalo--6e73cc76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Custom birthday cake with Russian text in Saburtalo ]]( claude--Custom birthday cake with Russian text in Saburtalo--6e73cc76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
