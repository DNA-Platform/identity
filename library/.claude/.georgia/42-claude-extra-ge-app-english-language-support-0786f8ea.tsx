import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.cover.tsx';
import TheSynopsis from '../.conversations/claude--extra-ge-app-english-language-support--0786f8ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 February 2026: <Means>$[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
