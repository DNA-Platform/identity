import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude for information about Christian churches in Tbilisi, Georgia that offer services in
            English. Claude provided a list of five English-language church options: Tbilisi International Christian
            Fellowship (TICF), Peace Cathedral, International Baptist Church Tbilisi (IBCT), Evangelical Faith English
            (EFE Church), and an English Orthodox Community. For each, Claude included service times, locations, and
            brief descriptions of the congregation's character. Claude also noted that TICF and Peace Cathedral would
            likely be most convenient given the person's location in Saburtalo, and mentioned that IBCT offers a
            Russian-language Saturday service as a potentially useful option for someone named Ana. A web search tool
            was used to retrieve current information about these churches.
        </Paragraph>
    </Chapter>
);
