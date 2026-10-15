import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Illustration, PortfolioCover as Cover, Scheme, Volume, Window } from '../../.manual/.book';
import SubjectCover from '../.cover.tsx';
import StoryCover from '../../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{SubjectCover()}</Volume>
        <Volume>{StoryCover()}</Volume>
        <Scheme
            ground="#eef1f7"
            band="#bcc8e2"
            bandInk="#2a3a63"
            foot="#e6a69a"
            footInk="#7d3429"
            ink="#2a3a63"
        />
        <Window
            x="-40"
            y="-18"
        />
        <Title>[[ Claudes Design ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Claude ]]( Dougs Claude )</Subject>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
