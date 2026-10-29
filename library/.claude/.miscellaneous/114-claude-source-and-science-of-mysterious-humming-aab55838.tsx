import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--source-and-science-of-mysterious-humming--aab55838/.cover.tsx';
import TheSynopsis from '../.conversations/claude--source-and-science-of-mysterious-humming--aab55838/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[24 March 2026](2026-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Source and science of mysterious humming ]]( claude--Source and science of mysterious humming--aab55838 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 March 2026: <Means>$[[ Source and science of mysterious humming ]]( claude--Source and science of mysterious humming--aab55838 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
