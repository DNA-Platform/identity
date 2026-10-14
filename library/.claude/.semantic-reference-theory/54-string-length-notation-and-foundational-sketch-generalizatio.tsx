import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/string-length-notation-and-foundational-sketch-generalizatio/.cover.tsx';
import TheSynopsis from '../.conversations/string-length-notation-and-foundational-sketch-generalizatio/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ String length notation and foundational sketch generalization ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2026: <Means>$[[ String length notation and foundational sketch generalization ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
