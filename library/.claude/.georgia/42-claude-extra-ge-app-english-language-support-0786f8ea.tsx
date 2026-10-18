import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.cover.tsx';
import TheSynopsis from '../.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 February 2026: <Means>$[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
