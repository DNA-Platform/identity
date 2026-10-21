import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-14T13:00:48.922265Z"
        >
            <Origin>01a0005d-6ee5-7e97-8035-b74c294ce5b0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you find the chat about haircuts and what I say in Georgian and the rnglish translation
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:01:00.952909Z"
        >
            <Origin>01a0005d-6ee5-7bfd-a57d-fd2a9feefc97</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “haircut barber Georgian phrases”</Action>
            <Paragraph>
                Found it — the chat is "💬 I need you to do some quick re…" from early July. Here's the final version:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    English:
                </Word> "Hello! Please cut my hair in the same style as last time. Sides and back — clippers, 13 mm. On top
                and in front, keep it longer — cut with scissors, leaving about 4 cm in the front. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian (to show the barber):
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით ისეთივე სტილში, როგორც წინა ჯერზე. გვერდებზე და უკან — მანქანით, 13 მმ. ზემოთ და
                წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით, წინ დაახლოებით 4 სმ სიგრძე დარჩეს. მადლობა!
            </Paragraph>
            <Paragraph>
                Note: the summary says the conversation continued with more refinements after this draft (adding that the
                front was slightly too long last time, that the barber didn't use clippers before, and to check the front
                length together at the end). What I pulled here may not be the final iteration — want me to open the chat
                and get the last version?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:01:30.382223Z"
        >
            <Origin>01a0005e-10ac-735f-9e47-7b5ba51beef0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, I need you to find the last message and the final message start from the end of the chat
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:01:46.240639Z"
        >
            <Origin>01a0005e-10ad-7d7e-bbdd-df91fa006acc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “front too long check length together clippers”</Action>
            <Paragraph>
                Here's the final version from the end of that chat — it includes all the changes: the 13→16 mm blend (US #4
                to #5), the note about clippers being a change from last time, the "too long in front" comment, and checking
                the length together at the end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    English version:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in a similar style to last time, with one change: this time, please use clippers
                on the sides and back — a blend from 13 mm to 16 mm. On top and in front, keep it longer — cut with
                scissors. Last time it stayed a bit too long in the front, so this time please leave about 4 cm in the
                front. At the end, let's check the length in the front together to make sure it's right. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message:
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით წინა ჯერის მსგავს სტილში, მაგრამ ერთი ცვლილებით: ამჯერად გვერდებზე და უკან
                მანქანა გამოიყენეთ — გადასვლით 13 მმ-დან 16 მმ-მდე. ზემოთ და წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით.
                წინა ჯერზე წინ ცოტა ზედმეტად გრძელი დარჩა, ამიტომ ამჯერად წინ დაახლოებით 4 სმ სიგრძე დამიტოვეთ. ბოლოს ერთად
                შევამოწმოთ წინა თმის სიგრძე, რომ დავრწმუნდეთ, სწორია თუ არა. მადლობა!
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:02:41.902206Z"
        >
            <Origin>01a0005f-2c56-7d4b-9059-6a6f6345059c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay write in English and Georgian but remove the part where it was too long last time because it wasn’t
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:02:52.600667Z"
        >
            <Origin>01a0005f-2c57-71d3-889f-29ae4138eb5c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English version:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in a similar style to last time, with one change: this time, please use clippers
                on the sides and back — a blend from 13 mm to 16 mm. On top and in front, keep it longer — cut with
                scissors, leaving about 4 cm in the front. At the end, let's check the length in the front together to make
                sure it's right. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message:
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით წინა ჯერის მსგავს სტილში, მაგრამ ერთი ცვლილებით: ამჯერად გვერდებზე და უკან
                მანქანა გამოიყენეთ — გადასვლით 13 მმ-დან 16 მმ-მდე. ზემოთ და წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით,
                წინ დაახლოებით 4 სმ სიგრძე დამიტოვეთ. ბოლოს ერთად შევამოწმოთ წინა თმის სიგრძე, რომ დავრწმუნდეთ, სწორია თუ
                არა. მადლობა!
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:03:05.872264Z"
        >
            <Origin>01a0005f-895b-75c2-9d69-5cccad3a4982</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, you also need to remove remove the parts that you say with a change because he did those things last
                time
            </Paragraph>
        </Message>
        <Message
            at="2026-08-14T13:03:15.546203Z"
        >
            <Origin>01a0005f-895b-732f-98e6-f795fee8ba5a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English version:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in the same style as last time. Sides and back — clippers, a blend from 13 mm to
                16 mm. On top and in front, keep it longer — cut with scissors, leaving about 4 cm in the front. At the end,
                let's check the length in the front together to make sure it's right. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message:
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით ისეთივე სტილში, როგორც წინა ჯერზე. გვერდებზე და უკან — მანქანით, გადასვლით 13
                მმ-დან 16 მმ-მდე. ზემოთ და წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით, წინ დაახლოებით 4 სმ სიგრძე დარჩეს.
                ბოლოს ერთად შევამოწმოთ წინა თმის სიგრძე, რომ დავრწმუნდეთ, სწორია თუ არა. მადლობა!
            </Paragraph>
        </Message>
    </Chapter>
);
