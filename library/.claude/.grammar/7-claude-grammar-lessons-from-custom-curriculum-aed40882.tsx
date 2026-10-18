import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--grammar-lessons-from-custom-curriculum--aed40882/.cover.tsx';
import TheSynopsis from '../.conversations/claude--grammar-lessons-from-custom-curriculum--aed40882/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Grammar lessons from custom curriculum ]]( claude--Grammar lessons from custom curriculum--aed40882 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 February 2026: <Means>$[[ Grammar lessons from custom curriculum ]]( claude--Grammar lessons from custom curriculum--aed40882 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
