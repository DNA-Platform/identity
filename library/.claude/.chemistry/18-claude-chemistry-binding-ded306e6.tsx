import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-binding--ded306e6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-binding--ded306e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[18 September 2025](2025-09-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ $Chemistry Binding ]]( claude--$Chemistry Binding--ded306e6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 September 2025: <Means>$[[ $Chemistry Binding ]]( claude--$Chemistry Binding--ded306e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
