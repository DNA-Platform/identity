import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.cover.tsx';
import TheSynopsis from './claude--tbilisi-tap-water-safety-for-humans-and-cats--04003294/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[21 January 2026](2026-01-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Tbilisi tap water safety for humans and cats ]]( claude--Tbilisi tap water safety for humans and cats--04003294 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
