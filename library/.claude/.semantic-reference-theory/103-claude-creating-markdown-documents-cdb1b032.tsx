import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--creating-markdown-documents--cdb1b032/.cover.tsx';
import TheSynopsis from '../.conversations/claude--creating-markdown-documents--cdb1b032/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Creating markdown documents ]]( claude--Creating markdown documents--cdb1b032 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 October 2025: <Means>$[[ Creating markdown documents ]]( claude--Creating markdown documents--cdb1b032 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
