import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-a-tax-adjustment-notice--1acaaf0e/.cover.tsx';
import TheSynopsis from './claude--understanding-a-tax-adjustment-notice--1acaaf0e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
