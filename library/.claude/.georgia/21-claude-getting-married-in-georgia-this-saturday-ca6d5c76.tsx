import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[20 January 2026](2026-01-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 January 2026: <Means>$[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
