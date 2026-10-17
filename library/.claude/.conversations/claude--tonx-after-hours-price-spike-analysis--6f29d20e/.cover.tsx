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
            from="2026-05-04T22:20:08.246461Z"
            to="2026-05-04T22:34:18.912703Z"
        />
        <Messages
            shown="12"
            all="12"
        />
        <Title>[[ TONX after-hours price spike analysis ]]( claude--TONX after-hours price spike analysis--6f29d20e )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Investing ]]</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>6f29d20e-4a46-4be4-ab4d-c42335e45a92</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
