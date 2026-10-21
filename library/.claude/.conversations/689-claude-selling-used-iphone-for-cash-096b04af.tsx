import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--selling-used-iphone-for-cash--096b04af/.cover.tsx';
import TheSynopsis from './claude--selling-used-iphone-for-cash--096b04af/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[27 October 2024](2024-10-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Selling Used iPhone for Cash ]]( claude--Selling Used iPhone for Cash--096b04af )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Selling Used iPhone for Cash ]]( claude--Selling Used iPhone for Cash--096b04af )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
