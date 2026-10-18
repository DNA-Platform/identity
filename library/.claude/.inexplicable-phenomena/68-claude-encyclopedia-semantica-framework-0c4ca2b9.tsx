import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--encyclopedia-semantica-framework--0c4ca2b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 August 2025: <Means>$[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
