import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.cover.tsx';
import TheSynopsis from '../.conversations/claude--origins-of-darkweb-operational-security--315e20fc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 January 2026: <Means>$[[ Origins of darkweb operational security ]]( claude--Origins of darkweb operational security--315e20fc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
