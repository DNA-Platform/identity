import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-design-exploration--e4993df3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-design-exploration--e4993df3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ $Chemistry framework design exploration ]]( claude--$Chemistry framework design exploration--e4993df3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 October 2025: <Means>$[[ $Chemistry framework design exploration ]]( claude--$Chemistry framework design exploration--e4993df3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
