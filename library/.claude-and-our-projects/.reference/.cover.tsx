import { $Chapter, Author, Cover, Subject, Title } from '@dna-platform/public';
import { Biography, Catalogues, Chrome, Tabs } from '../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>Claude &amp; Our Projects</Title>
                <Author>[Author: Doug](MY Library Log)</Author>
                <Subject>[Doug](Doug&rsquo;s Library)</Subject>
                <Catalogues />
                <Biography />
                <Tabs here={"Claude & Our Projects"} about={"Doug’s Library"} by={"MY Library Log"} />
            </Cover>
        );
    }
}
