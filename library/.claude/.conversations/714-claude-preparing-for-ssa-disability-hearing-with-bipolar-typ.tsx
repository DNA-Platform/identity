import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.cover.tsx';
import TheSynopsis from './claude--preparing-for-ssa-disability-hearing-with-bipolar-type-i--ef78ee8e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[29 April 2026](2026-04-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preparing for SSA disability hearing with bipolar type I ]]( claude--Preparing for SSA disability hearing with bipolar type I--ef78ee8e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 236 exchanges: <Means>$[[ Preparing for SSA disability hearing with bipolar type I ]]( claude--Preparing for SSA disability hearing with bipolar type I--ef78ee8e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
