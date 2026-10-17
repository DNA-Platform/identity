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
            from="2026-08-18T12:01:09.408457Z"
            to="2026-08-18T17:55:10.399986Z"
        />
        <Messages
            shown="18"
            all="18"
        />
        <Title>[[ Catch up on recent conversatio… ]]( claude--Catch up on recent conversatio…--44558158 )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Investing ]]</Project>
        <Account>$[[ DNA ]]( Dougs Claude / DNA )</Account>
        <Origin>44558158-3387-41f5-9078-6d2619f0cee0</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
