import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--home-appraisal-costs--ebf64f2f/.cover.tsx';
import TheSynopsis from './claude--home-appraisal-costs--ebf64f2f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[26 November 2024](2024-11-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Home Appraisal Costs ]]( claude--Home Appraisal Costs--ebf64f2f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Home Appraisal Costs ]]( claude--Home Appraisal Costs--ebf64f2f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
