import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--kiwipost-payment-confusion--a9f19c04/.cover.tsx';
import TheSynopsis from '../.conversations/claude--kiwipost-payment-confusion--a9f19c04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
