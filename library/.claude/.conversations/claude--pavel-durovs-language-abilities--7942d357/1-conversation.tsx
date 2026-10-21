import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-26T21:51:22.598175Z"
        >
            <Origin>019bfc4a-3dd0-7274-b11b-471b718538b4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How many languages does Pavel Durov speak and how do you know?</Paragraph>
        </Message>
        <Message
            at="2026-01-26T21:51:35.508951Z"
        >
            <Origin>019bfc4a-3dd0-7274-b11b-471cda242525</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Pavel Durov languages speaks”</Action>
            <Paragraph>
                Pavel Durov reportedly speaks <Word>
                    <Bold />
                    eight languages
                </Word>. According to his official VK page, he can speak Russian, English, French, German, Spanish, Italian,
                Latin and Farsi.
            </Paragraph>
            <Paragraph>
                This linguistic ability stems from his multilingual upbringing and education. He spent most of his childhood
                in Turin, Italy, where his father was employed, and later studied English and Translation at Saint
                Petersburg State University. He also attended a school where he studied all subjects in depth, including
                four foreign languages.
            </Paragraph>
            <Paragraph>
                There's some variation in sources—one source claims he became fluent in nine languages, including Italian
                and Persian, after returning to Russia—but the eight-language figure from his own VK profile is the most
                commonly cited.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-26T21:52:04.390338Z"
        >
            <Origin>019bfc4a-e089-70bf-aee6-c23aa42624ed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why might I have heard of nine? Did he pick one up since VK?</Paragraph>
        </Message>
        <Message
            at="2026-01-26T21:52:18.237286Z"
        >
            <Origin>019bfc4a-e089-70bf-aee6-c23ba496c1f0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good question—the discrepancy likely comes from a few factors:</Paragraph>
            <Paragraph>
                One source lists his eight languages as "including Arabic, Ukrainian, German, and Spanish"—which is a
                different set than the VK profile list (Russian, English, French, German, Spanish, Italian, Latin, Farsi).
                This suggests different sources are counting differently.
            </Paragraph>
            <Paragraph>
                Regarding Ukrainian specifically: during his time at VKontakte, Durov was the first among non-native
                speakers to launch a Ukrainian interface for the site. He spent several months testing the Ukrainian
                interface himself and learned a bit of the language. So Ukrainian may have been added to his repertoire
                after the VK profile was created.
            </Paragraph>
            <Paragraph>
                The nine-language claim from NamuWiki may also simply be counting differently or including a language he
                learned later. Given that his father is a professor of philology and he and his brother Nikolai were
                learning six foreign languages each at school, along with advanced mathematics and chemistry, it wouldn't be
                surprising if his language count has grown over time.
            </Paragraph>
            <Paragraph>
                So the answer is probably some combination of: different sources counting native vs. learned languages
                differently, varying definitions of "fluency," and Durov potentially picking up additional languages (like
                Ukrainian) since that VK profile was written.
            </Paragraph>
        </Message>
    </Chapter>
);
