import { Author, Chapter, Paragraph, Subject, Svg, Title } from '@dna-platform/public';
import { Cover, Illustration, Scheme, Volume, Window } from '../.manual/.book';
import LibraryCover from '../..reference/.cover.tsx';
import StoryCover from '../.librarian/.cover.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Volume>{LibraryCover()}</Volume>
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
            x="-30"
            y="-22"
        />
        <Title>[[ Dougs Importer ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <Paragraph>
            <Illustration />
            <Svg>![[ illustration.svg ]]</Svg>
        </Paragraph>
    </Chapter>
);
