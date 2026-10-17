import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--srt-as-a-github-project--1c387d40/.cover.tsx';
import TheSynopsis from '../.conversations/claude--srt-as-a-github-project--1c387d40/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 June 2026: <Means>$[[ SRT as a Github Project ]]( claude--SRT as a Github Project--1c387d40 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
