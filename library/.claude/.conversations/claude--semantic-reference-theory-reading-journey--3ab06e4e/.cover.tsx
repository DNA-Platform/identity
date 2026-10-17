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
            ground="#eff1f6"
            band="#c0c9df"
            bandInk="#2a3a63"
            foot="#8e9fc8"
            footInk="#1f2d50"
            ink="#2a3a63"
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
            from="2025-10-07T10:30:27.362255Z"
            to="2025-10-08T06:20:41.800569Z"
        />
        <Messages
            shown="162"
            all="178"
        />
        <Title>[[ Semantic reference theory reading journey ]]( claude--Semantic reference theory reading journey--3ab06e4e )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Conversations ]]( Our Conversations )</Subject>
        <Project>***[[ Semantic Reference Theory ]]</Project>
        <Account>$[[ DNA Legacy ]]( Dougs Claude / DNA Legacy )</Account>
        <Origin>3ab06e4e-a5e6-4725-baaf-20cdddb62bd8</Origin>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
