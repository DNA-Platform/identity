import { $Chapter, Author, Cover, Subject, Title } from '@dna-platform/public';
import { Chrome, Tabs } from '../../../../..reference/.book';

export default class $Cover extends $Chapter {
    print() {
        return (
            <Cover>
                <Chrome />
                <Title>Semantics of Types &amp; More</Title>
                <Author>[Author: Doug](MY Library Log)</Author>
                <Subject>Semantic Reference Theory</Subject>
                <Tabs here={"Semantics of Types & More"} about={"Semantic Reference Theory"} by={"MY Library Log"} />
            </Cover>
        );
    }
}
