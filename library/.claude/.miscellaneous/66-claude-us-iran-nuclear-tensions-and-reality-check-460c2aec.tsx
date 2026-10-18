import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.cover.tsx';
import TheSynopsis from '../.conversations/claude--us-iran-nuclear-tensions-and-reality-check--460c2aec/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US-Iran nuclear tensions and reality check ]]( claude--US-Iran nuclear tensions and reality check--460c2aec )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ US-Iran nuclear tensions and reality check ]]( claude--US-Iran nuclear tensions and reality check--460c2aec )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
