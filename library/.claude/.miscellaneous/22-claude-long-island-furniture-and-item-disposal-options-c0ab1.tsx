import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--long-island-furniture-and-item-disposal-options--c0ab111e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--long-island-furniture-and-item-disposal-options--c0ab111e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 November 2025: <Means>$[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
