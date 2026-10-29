import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Subject-object directionality and semantic agency ]]( claude--Subject-object directionality and semantic agency--1b2ae35e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Subject-object directionality and semantic agency ]]( claude--Subject-object directionality and semantic agency--1b2ae35e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
