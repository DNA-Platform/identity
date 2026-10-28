import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Scheme, Volume, Window } from '../../../.manual/19-the-cover~code.tsx';
import { Messages, Participant, Participants, Period } from '../../../.manual/29-the-conversation~code.tsx';
import { Account } from '../../.manual/7-the-account~code.tsx';
import { Origin } from '../../.manual/8-the-origin~code.tsx';
import { Project } from '../../.manual/3-the-project~code.tsx';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#eef4ee"
            band="#b9d4bf"
            bandInk="#1f3f2a"
            foot="#8fb79b"
            footInk="#17351f"
            ink="#1f3f2a"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Participants>
            <Participant>$[[ Doug ]]( Dougs Story )</Participant>
            <Participant>$[[ Claude ]]( Dougs Claude )</Participant>
        </Participants>
        <Period
            from="2025-08-22T17:14:17.496194Z"
            to="2025-08-24T20:09:41.032003Z"
        />
        <Messages
            shown="282"
            all="286"
        />
        <Title>[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena )</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>0c4ca2b9-a246-4b27-8e3e-eb003d07c10f</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
