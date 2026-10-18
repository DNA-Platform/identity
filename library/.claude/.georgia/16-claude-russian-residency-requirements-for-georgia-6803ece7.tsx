import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russian-residency-requirements-for-georgia--6803ece7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russian-residency-requirements-for-georgia--6803ece7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian residency requirements for Georgia ]]( claude--Russian residency requirements for Georgia--6803ece7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 January 2026: <Means>$[[ Russian residency requirements for Georgia ]]( claude--Russian residency requirements for Georgia--6803ece7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
