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
        <Title>[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena )</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <About>[[ Inexplicable Phenomena ]]( claude--Inexplicable Phenomena )</About>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
