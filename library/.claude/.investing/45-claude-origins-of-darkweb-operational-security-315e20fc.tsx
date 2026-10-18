import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
