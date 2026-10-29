import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--anonymous-cryptographers--0c566126/.cover.tsx';
import TheSynopsis from '../.conversations/claude--anonymous-cryptographers--0c566126/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 January 2026: <Means>$[[ Anonymous Cryptographers ]]( claude--Anonymous Cryptographers--0c566126 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
