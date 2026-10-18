import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
