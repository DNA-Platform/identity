import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--srt-as-a-github-project--1c387d40/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-as-a-github-project--1c387d40/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 June 2026: <Means>$[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
