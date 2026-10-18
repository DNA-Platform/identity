import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--swimming-pools-for-kids-in-batumi--59691b35/.cover.tsx';
import TheSynopsis from '../.conversations/claude--swimming-pools-for-kids-in-batumi--59691b35/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Swimming pools for kids in Batumi ]]( claude--Swimming pools for kids in Batumi--59691b35 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2026: <Means>$[[ Swimming pools for kids in Batumi ]]( claude--Swimming pools for kids in Batumi--59691b35 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
