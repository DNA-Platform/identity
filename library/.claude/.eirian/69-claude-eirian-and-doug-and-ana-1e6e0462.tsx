import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-doug-and-ana--1e6e0462/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Doug &amp; Ana ]]( claude--Eirian &amp; Doug &amp; Ana--1e6e0462 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 September 2025: <Means>$[[ Eirian &amp; Doug &amp; Ana ]]( claude--Eirian &amp; Doug &amp; Ana--1e6e0462 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
