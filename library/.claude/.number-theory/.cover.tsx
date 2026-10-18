import { About, Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Cover, Illustration, Scheme, Volume, Window } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#f3f0f8"
            band="#c9bfe3"
            bandInk="#3a2d63"
            foot="#8f7fc0"
            footInk="#2e2350"
            ink="#3a2d63"
        />
        <Window
            x="-32"
            y="-26"
        />
        <Title>[[ Number Theory ]]( claude--Number Theory )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <About>[[ Number Theory ]]( claude--Number Theory )</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
