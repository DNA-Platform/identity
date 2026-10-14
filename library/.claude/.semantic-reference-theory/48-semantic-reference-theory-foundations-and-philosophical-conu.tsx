import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.cover.tsx';
import TheSynopsis from '../.conversations/semantic-reference-theory-foundations-and-philosophical-conu/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations and philosophical conundrum ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 June 2026: <Means>$[[ Semantic reference theory foundations and philosophical conundrum ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
