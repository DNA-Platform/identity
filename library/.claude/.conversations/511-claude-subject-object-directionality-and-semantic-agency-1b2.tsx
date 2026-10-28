import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.cover.tsx';
import TheSynopsis from './claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Subject-object directionality and semantic agency ]]( claude--Subject-object directionality and semantic agency--1b2ae35e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 35 exchanges: <Means>$[[ Subject-object directionality and semantic agency ]]( claude--Subject-object directionality and semantic agency--1b2ae35e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
