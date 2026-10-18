import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--reflexivity-and-backwards-arrow-notation--0e94a9f7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reflexivity-and-backwards-arrow-notation--0e94a9f7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reflexivity and backwards arrow notation ]]( claude--Reflexivity and backwards arrow notation--0e94a9f7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 February 2026: <Means>$[[ Reflexivity and backwards arrow notation ]]( claude--Reflexivity and backwards arrow notation--0e94a9f7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
