import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--kiwipost-payment-confusion--a9f19c04/.cover.tsx';
import TheSynopsis from '../.conversations/claude--kiwipost-payment-confusion--a9f19c04/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 October 2026: <Means>$[[ KiwiPost payment confusion ]]( claude--KiwiPost payment confusion--a9f19c04 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
