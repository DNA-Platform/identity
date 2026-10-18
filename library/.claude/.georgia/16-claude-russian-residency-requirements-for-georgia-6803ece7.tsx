import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-residency-requirements-for-georgia--6803ece7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-residency-requirements-for-georgia--6803ece7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian residency requirements for Georgia ]]( claude--Russian residency requirements for Georgia--6803ece7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Russian residency requirements for Georgia ]]( claude--Russian residency requirements for Georgia--6803ece7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
