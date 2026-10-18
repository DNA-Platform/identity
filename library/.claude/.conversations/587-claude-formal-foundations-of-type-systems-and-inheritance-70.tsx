import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.cover.tsx';
import TheSynopsis from './claude--formal-foundations-of-type-systems-and-inheritance--705afcd4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[8 February 2026](2026-02-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal foundations of type systems and inheritance ]]( claude--Formal foundations of type systems and inheritance--705afcd4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Formal foundations of type systems and inheritance ]]( claude--Formal foundations of type systems and inheritance--705afcd4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
