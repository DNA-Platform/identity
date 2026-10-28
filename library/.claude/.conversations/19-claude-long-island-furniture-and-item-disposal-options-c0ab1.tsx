import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--long-island-furniture-and-item-disposal-options--c0ab111e/.cover.tsx';
import TheSynopsis from './claude--long-island-furniture-and-item-disposal-options--c0ab111e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[5 November 2025](2025-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Long Island furniture and item disposal options ]]( claude--Long Island furniture and item disposal options--c0ab111e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
