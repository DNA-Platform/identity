import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--look-up-mei-and-metamer-analysis--2fa8f692/.cover.tsx';
import TheSynopsis from './claude--look-up-mei-and-metamer-analysis--2fa8f692/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[27 July 2026](2026-07-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Look up MEI and metamer analysis. ]]( claude--Look up MEI and metamer analysis..--2fa8f692 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Look up MEI and metamer analysis. ]]( claude--Look up MEI and metamer analysis..--2fa8f692 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
