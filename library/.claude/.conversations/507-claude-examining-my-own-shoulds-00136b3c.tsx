import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--examining-my-own-shoulds--00136b3c/.cover.tsx';
import TheSynopsis from './claude--examining-my-own-shoulds--00136b3c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[15 December 2025](2025-12-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Examining my own shoulds ]]( claude--Examining my own shoulds--00136b3c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
