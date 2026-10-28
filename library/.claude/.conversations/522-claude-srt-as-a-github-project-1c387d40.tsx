import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--srt-as-a-github-project--1c387d40/.cover.tsx';
import TheSynopsis from './claude--srt-as-a-github-project--1c387d40/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 102 exchanges: <Means>$[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
