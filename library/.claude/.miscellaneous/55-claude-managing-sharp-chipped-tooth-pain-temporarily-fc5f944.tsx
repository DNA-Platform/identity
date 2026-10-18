import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--managing-sharp-chipped-tooth-pain-temporarily--fc5f944d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Managing sharp chipped tooth pain temporarily ]]( claude--Managing sharp chipped tooth pain temporarily--fc5f944d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
