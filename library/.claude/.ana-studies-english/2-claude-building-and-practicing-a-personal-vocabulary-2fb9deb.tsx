import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--building-and-practicing-a-personal-vocabulary--2fb9debb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Building and practicing a personal vocabulary ]]( claude--Building and practicing a personal vocabulary--2fb9debb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
