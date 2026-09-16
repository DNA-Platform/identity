import { $Chapter, Author, Cover, Subject, Title } from '@dna-platform/public';
import { Catalogues, Chrome, Tabs } from '../../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>Semantic Reference Theory</Title>
                <Author>[Author: Doug](MY Library Log)</Author>
                <Subject>Claude &amp; Our Projects</Subject>
                <Catalogues />
                <Tabs here={"Semantic Reference Theory"} about={"Claude & Our Projects"} by={"MY Library Log"} />
            </Cover>
        );
    }
}
