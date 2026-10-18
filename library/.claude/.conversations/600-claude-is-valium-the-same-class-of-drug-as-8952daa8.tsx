import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--is-valium-the-same-class-of-drug-as--8952daa8/.cover.tsx';
import TheSynopsis from './claude--is-valium-the-same-class-of-drug-as--8952daa8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Is valium the same class of drug as ]]( claude--Is valium the same class of drug as--8952daa8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Is valium the same class of drug as ]]( claude--Is valium the same class of drug as--8952daa8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
