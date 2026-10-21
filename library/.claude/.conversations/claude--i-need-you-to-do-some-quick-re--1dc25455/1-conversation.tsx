import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Quoted, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-04T11:12:25.158073Z"
        >
            <Origin>019f2cd4-ef83-72cf-9358-e36779efad20</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I need you to do some quick research for me about the country of Georgia and the subject of haircuts. I am a
                man and when I get my haircut, I usually get the sides with a four razor, and I don’t know what that
                translates to in Georgian. I would also say that for the hair in the front usually have it cut to an inch
                and a half and I need to know that in centimeters and then after you look up those things we need to come up
                with something to write in George for the person who’s cutting my hair
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:13:01.765062Z"
        >
            <Origin>019f2cd4-ef84-7b03-857b-689328617143</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “парикмахерская Тбилиси стрижка машинкой насадка номер мм”</Action>
            <Paragraph>Here's what the numbers translate to:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The #4 guard:
                </Word> US guard numbers aren't the standard reference here — post-Soviet barbershops work in millimeters. A
                #4 guard leaves hair 1/2 inch, which is <Word>
                    <Bold />
                    13 mm
                </Word> (barbers here will round to 12 or 13 mm — standard attachment sets in the region run 3, 6, 9, 12 mm,
                so "12 мм" is the most recognizable ask). Don't just say "number four" — attachment numbering varies by
                clipper set, so the number alone is ambiguous. Millimeters are unambiguous.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1.5 inches = 3.8 cm
                </Word> — say "4 сантиметра" / "4 სმ" and you're within rounding.
            </Paragraph>
            <Paragraph>Something to show the barber, in Georgian:</Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    გვერდებზე და უკან — მანქანით, 13 მმ. წინ და ზემოთ — მაკრატლით, დაახლოებით 4 სმ სიგრძე დამიტოვეთ.
                </Word> (Sides and back — clippers, 13 mm. Front and top — scissors, leave about 4 cm.)
            </Paragraph>
            <Paragraph>
                One caveat: the Georgian is my construction, not a phrase verified against native barbershop usage — the
                mm/cm numbers will carry it regardless. Also worth knowing: many Tbilisi barbers speak Russian (several
                barbershops explicitly staff Russian-speaking masters), so the Russian version works as a backup:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    Бока и затылок — машинкой, 13 мм. Спереди и сверху — ножницами, оставить примерно 4 см.
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:15:07.317569Z"
        >
            <Origin>019f2cd7-6183-776e-8959-930d1a2704a6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, so put that in to one George message where you tell him to follow the style that he did last time on
                both the sides in the top but to use whatever you call it, the razor on the sides with the right number of
                millimeters that you specified and that they keep it longer on top and in the front and in the front we want
                it to be the number of centimeters that you specified so I can show him one message and provide the English
                translation first so I know what you’re saying to him
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:15:17.553738Z"
        >
            <Origin>019f2cd7-6183-7e04-a462-a9aec8f2977d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English version (what the message says):
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in the same style as last time. Sides and back — clippers, 13 mm. On top and in
                front, keep it longer — cut with scissors, leaving about 4 cm in the front. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message to show him:
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                გამარჯობა! გთხოვთ, შემჭერით ისეთივე სტილში, როგორც წინა ჯერზე. გვერდებზე და უკან — მანქანით, 13 მმ. ზემოთ და
                წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით, წინ დაახლოებით 4 სმ სიგრძე დარჩეს. მადლობა!
            </Paragraph>
            <Paragraph>
                Same caveat as before: this is my Georgian construction, not verified against a native speaker — but the
                structure is simple and the numbers (13 მმ, 4 სმ) do the heavy lifting, so it will read clearly.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:23:13.227160Z"
        >
            <Origin>019f2cde-cafc-7617-8401-f6d34b95db8a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Answer the message that we should just check the length of the front at the end to see if it’s the right
                length, and make the message the last thing you say so he doesn’t have to read something surrounded by
                English text and also put the English translation above it
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:23:24.402789Z"
        >
            <Origin>019f2cde-cafc-763a-9c52-3f69ac16d8bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English version:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in the same style as last time. Sides and back — clippers, 13 mm. On top and in
                front, keep it longer — cut with scissors, leaving about 4 cm in the front. At the end, let's check the
                length in the front together to make sure it's right. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message:
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით ისეთივე სტილში, როგორც წინა ჯერზე. გვერდებზე და უკან — მანქანით, 13 მმ. ზემოთ და
                წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით, წინ დაახლოებით 4 სმ სიგრძე დარჩეს. ბოლოს ერთად შევამოწმოთ
                წინა თმის სიგრძე, რომ დავრწმუნდეთ, სწორია თუ არა. მადლობა!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:24:40.253626Z"
        >
            <Origin>019f2ce0-1fd9-7e1b-aec8-4a23abfe2abc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Close because he didn’t use the clippers last time try to specify that as a change may also gently say that
                it was a bit too long in the front last time so same format is your last message, but with those changes
                integrated
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:24:56.196367Z"
        >
            <Origin>019f2ce0-1fd9-720d-a03c-c2a5ffe87bb5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English version:
                </Word>
            </Paragraph>
            <Paragraph>
                "Hello! Please cut my hair in a similar style to last time, with one change: this time, please use clippers
                on the sides and back — 13 mm. On top and in front, keep it longer — cut with scissors. Last time it stayed
                a bit too long in the front, so this time please leave about 4 cm in the front. At the end, let's check the
                length in the front together to make sure it's right. Thank you!"
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Georgian message:
                </Word>
            </Paragraph>
            <Paragraph>
                გამარჯობა! გთხოვთ, შემჭერით წინა ჯერის მსგავს სტილში, მაგრამ ერთი ცვლილებით: ამჯერად გვერდებზე და უკან
                მანქანა გამოიყენეთ — 13 მმ. ზემოთ და წინ უფრო გრძელი დამიტოვეთ — მაკრატლით შეჭერით. წინა ჯერზე წინ ცოტა
                ზედმეტად გრძელი დარჩა, ამიტომ ამჯერად წინ დაახლოებით 4 სმ სიგრძე დამიტოვეთ. ბოლოს ერთად შევამოწმოთ წინა თმის
                სიგრძე, რომ დავრწმუნდეთ, სწორია თუ არა. მადლობა!
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:33:05.128398Z"
        >
            <Origin>019f2ce7-db94-7af6-b208-8850409e0fd6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Quick change. Can you say blend an american 4 to a 5 on the sides? Compute the mm before editing the
                message. What are those two numbers in mm
            </Paragraph>
        </Message>
        <Message
            at="2026-07-04T11:33:22.013591Z"
        >
            <Origin>019f2ce7-db95-7a13-8ae3-5a29602185d2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A #4 is 1/2 inch = <Word>
                    <Bold />
                    13 mm
                </Word>, and a #5 is 5/8 inch = <Word>
                    <Bold />
                    16 mm
                </Word>. So the sides become a blend from 13 mm up to 16 mm.
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
    </Chapter>
);
