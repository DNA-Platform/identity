import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.cover.tsx';
import TheSynopsis from './claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
