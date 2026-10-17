import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { BookshelfCover as Cover, Illustration, Messages, Participant, Participants, Period, Scheme, Volume, Window } from '../../../.manual/.book';
import { Account, Origin, Project } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#eef5f6"
            band="#b6dde2"
            bandInk="#1c565c"
            foot="#7fb7bd"
            footInk="#153e43"
            ink="#1f5a60"
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
            from="2026-01-07T20:09:26.495287Z"
            to="2026-01-07T22:12:07.679156Z"
        />
        <Messages
            shown="30"
            all="30"
        />
        <Title>[[ Telegram Wallet ]]( claude--Telegram Wallet--11fa8197 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Investing ]]</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>11fa8197-d483-4c7e-a4d9-83589a6c7fe4</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
