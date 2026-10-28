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
            ground="#f7eef0"
            band="#e4bfc8"
            bandInk="#5f2436"
            foot="#c98a9b"
            footInk="#4d1a2a"
            ink="#5f2436"
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
            from="2026-03-09T14:08:17.029007Z"
            to="2026-03-09T14:13:43.883712Z"
        />
        <Messages
            shown="8"
            all="8"
        />
        <Title>[[ School snack sharing and potential exclusion concerns ]]( claude--School snack sharing and potential exclusion concerns--e3678695 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Georgia ]]( claude--Georgia )</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>e3678695-4536-4f1d-a845-2f581f0c7824</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
