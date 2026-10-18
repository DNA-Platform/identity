import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
