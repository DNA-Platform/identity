import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.cover.tsx';
import TheSynopsis from '../.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2026: <Means>$[[ Visa requirements for Americans in Indonesia and Malaysia ]]( claude--Visa requirements for Americans in Indonesia and Malaysia--74b415d8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
