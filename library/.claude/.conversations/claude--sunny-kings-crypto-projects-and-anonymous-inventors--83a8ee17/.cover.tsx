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
            from="2026-02-04T17:18:13.540411Z"
            to="2026-02-04T18:27:21.145025Z"
        />
        <Messages
            shown="28"
            all="34"
        />
        <Title>[[ Sunny King's crypto projects and anonymous inventors ]]( claude--Sunny King's crypto projects and anonymous inventors--83a8ee17 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Investing ]]</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>83a8ee17-fa26-4703-8b6f-f30f7add8721</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
