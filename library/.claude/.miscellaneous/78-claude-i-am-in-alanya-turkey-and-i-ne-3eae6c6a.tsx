import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--i-am-in-alanya-turkey-and-i-ne--3eae6c6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ I am in Alanya Turkey and I ne... ]]( claude--I am in Alanya Turkey and I ne......--3eae6c6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
