import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Understanding a tax adjustment notice ]]( claude--Understanding a tax adjustment notice--1acaaf0e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
