import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--extra-ge-app-english-language-support--0786f8ea/.cover.tsx';
import TheSynopsis from './claude--extra-ge-app-english-language-support--0786f8ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Extra.ge app English language support ]]( claude--Extra..ge app English language support--0786f8ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
