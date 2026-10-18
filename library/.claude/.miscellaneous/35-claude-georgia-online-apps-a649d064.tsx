import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-online-apps--a649d064/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-online-apps--a649d064/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 January 2026: <Means>$[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
