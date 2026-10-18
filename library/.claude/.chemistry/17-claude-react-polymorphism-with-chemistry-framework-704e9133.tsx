import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.cover.tsx';
import TheSynopsis from '../.conversations/claude--react-polymorphism-with-chemistry-framework--704e9133/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React polymorphism with Chemistry framework ]]( claude--React polymorphism with Chemistry framework--704e9133 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 September 2025: <Means>$[[ React polymorphism with Chemistry framework ]]( claude--React polymorphism with Chemistry framework--704e9133 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
