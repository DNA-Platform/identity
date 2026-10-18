import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--switching-from-google-login-to-password--08725aec/.cover.tsx';
import TheSynopsis from '../.conversations/claude--switching-from-google-login-to-password--08725aec/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Switching from Google login to password ]]( claude--Switching from Google login to password--08725aec )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Switching from Google login to password ]]( claude--Switching from Google login to password--08725aec )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
