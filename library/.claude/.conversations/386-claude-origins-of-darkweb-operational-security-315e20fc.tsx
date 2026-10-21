import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--origins-of-darkweb-operational-security--315e20fc/.cover.tsx';
import TheSynopsis from './claude--origins-of-darkweb-operational-security--315e20fc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 57 exchanges: <Means>$[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
