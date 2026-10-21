import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-and-gram-ecosystem-updates--d5d0756e/.cover.tsx';
import TheSynopsis from './claude--ton-and-gram-ecosystem-updates--d5d0756e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[31 July 2026](2026-07-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ TON and GRAM ecosystem updates ]]( claude--TON and GRAM ecosystem updates--d5d0756e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
