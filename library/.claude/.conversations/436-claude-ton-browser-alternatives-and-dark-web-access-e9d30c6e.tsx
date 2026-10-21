import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.cover.tsx';
import TheSynopsis from './claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON browser alternatives and dark web access ]]( claude--TON browser alternatives and dark web access--e9d30c6e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ TON browser alternatives and dark web access ]]( claude--TON browser alternatives and dark web access--e9d30c6e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
