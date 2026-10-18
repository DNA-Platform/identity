import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--kiwipost-payment-confusion--a9f19c04/.cover.tsx';
import TheSynopsis from './claude--kiwipost-payment-confusion--a9f19c04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[10 October 2026](2026-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
