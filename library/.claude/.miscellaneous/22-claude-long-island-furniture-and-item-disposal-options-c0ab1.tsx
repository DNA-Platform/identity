import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--long-island-furniture-and-item-disposal-options--c0ab111e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--long-island-furniture-and-item-disposal-options--c0ab111e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[5 November 2025](2025-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 November 2025: <Means>$[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
