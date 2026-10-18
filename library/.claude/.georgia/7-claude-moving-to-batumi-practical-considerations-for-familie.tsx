import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--moving-to-batumi-practical-considerations-for-families--8fe5082e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Moving to Batumi: practical considerations for families ]]( claude--Moving to Batumi: practical considerations for families--8fe5082e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
