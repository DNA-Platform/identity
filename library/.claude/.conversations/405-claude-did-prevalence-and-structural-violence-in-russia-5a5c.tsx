import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.cover.tsx';
import TheSynopsis from './claude--did-prevalence-and-structural-violence-in-russia--5a5cda15/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DID prevalence and structural violence in Russia ]]( claude--DID prevalence and structural violence in Russia--5a5cda15 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 7 exchanges: <Means>$[[ DID prevalence and structural violence in Russia ]]( claude--DID prevalence and structural violence in Russia--5a5cda15 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
