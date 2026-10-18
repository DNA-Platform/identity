import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--swimming-pools-for-kids-in-batumi--59691b35/.cover.tsx';
import TheSynopsis from './claude--swimming-pools-for-kids-in-batumi--59691b35/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[18 August 2026](2026-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Swimming pools for kids in Batumi ]]( claude--Swimming pools for kids in Batumi--59691b35 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Swimming pools for kids in Batumi ]]( claude--Swimming pools for kids in Batumi--59691b35 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
