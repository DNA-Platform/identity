import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--reflexivity-and-backwards-arrow-notation--0e94a9f7/.cover.tsx';
import TheSynopsis from './claude--reflexivity-and-backwards-arrow-notation--0e94a9f7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[24 February 2026](2026-02-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reflexivity and backwards arrow notation ]]( claude--Reflexivity and backwards arrow notation--0e94a9f7 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 127 exchanges: <Means>$[[ Reflexivity and backwards arrow notation ]]( claude--Reflexivity and backwards arrow notation--0e94a9f7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
