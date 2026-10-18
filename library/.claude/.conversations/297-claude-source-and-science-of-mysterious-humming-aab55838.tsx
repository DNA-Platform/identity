import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--source-and-science-of-mysterious-humming--aab55838/.cover.tsx';
import TheSynopsis from './claude--source-and-science-of-mysterious-humming--aab55838/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[24 March 2026](2026-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Source and science of mysterious humming ]]( claude--Source and science of mysterious humming--aab55838 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Source and science of mysterious humming ]]( claude--Source and science of mysterious humming--aab55838 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
