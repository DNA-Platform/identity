import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/srt-axioms-and-specialization/.cover.tsx';
import TheSynopsis from '../.conversations/srt-axioms-and-specialization/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ SRT Axioms &amp; Specialization ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 June 2026: <Means>$[[ SRT Axioms &amp; Specialization ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
