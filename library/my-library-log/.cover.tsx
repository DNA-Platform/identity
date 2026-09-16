import { $Chapter, Author, Cover, Subject, Title } from '@dna-platform/public';
import { Autobiography, Chrome, Tabs } from '../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>MY Library Log</Title>
                <Author>[Author: Doug](MY Library Log)</Author>
                <Subject>[Doug](Doug&rsquo;s Library)</Subject>
                <Autobiography />
                <Tabs here={"MY Library Log"} about={"Doug’s Library"} by={"MY Library Log"} />
            </Cover>
        );
    }
}
