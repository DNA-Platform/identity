import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.cover.tsx';
import TheSynopsis from '../.conversations/claude--getting-married-in-georgia-this-saturday--ca6d5c76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 January 2026: <Means>$[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
