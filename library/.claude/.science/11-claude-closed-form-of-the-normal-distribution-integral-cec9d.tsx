import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 August 2026: <Means>$[[ Closed form of the normal distribution integral ]]( claude--Closed form of the normal distribution integral--cec9dc2d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
