import { $Chapter, Author, Cover, Subject, Title } from '@dna-platform/public';
import { Catalogues, Chrome, Tabs } from './.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>Doug&rsquo;s Library</Title>
                <Author>[Author: Doug](MY Library Log)</Author>
                <Subject>[Doug](Doug&rsquo;s Library)</Subject>
                <Catalogues />
                <Tabs here={"Doug’s Library"} about={"Doug’s Library"} by={"MY Library Log"} />
            </Cover>
        );
    }
}
