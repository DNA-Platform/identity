import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 August 2026](2026-08-28)</Date>
        </Dated>
        <Title>[[ 28 August 2026 ]]</Title>
        <Message
            at="2026-08-28T10:09:20.532731Z"
        >
            <Origin>01a047d8-66a9-70d7-8847-a9baa8619ac3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Прочитай и ответь на грузинском и английский</Paragraph>
            <Attachment>
                Uploaded “4b841491-a4b0-4b77-8d9b-2b23d8ae2723.webp”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-08-28T10:09:50.006520Z"
        >
            <Origin>01a047d8-66a9-70e3-9a2a-7d66fb62c069</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    English
                </Word>
            </Paragraph>
            <Paragraph>
                Yes — use a new sterile needle for every injection. A needle dulls after a single use (and after it
                punctures the vial's rubber stopper), which makes the injection more painful for the cat and raises the
                infection risk. So for 14 days of daily injections you need at least 14 needles. Many people use two per
                dose: one to draw the medicine from the vial, a fresh one to inject. Syringes are single-use too — never
                reuse or rinse them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ქართულად
                </Word>
            </Paragraph>
            <Paragraph>
                დიახ — ყოველი ინექციისთვის ახალი სტერილური ნემსი გჭირდებათ. ერთი გამოყენების შემდეგ (და მას შემდეგ, რაც
                ფლაკონის საცობს გახვრეტს) ნემსი ბლაგვდება, რაც კატისთვის უფრო მტკივნეულს ხდის ინექციას და ზრდის ინფექციის
                რისკს. ამიტომ 14 დღის ყოველდღიური ინექციისთვის მინიმუმ 14 ნემსია საჭირო. ბევრი ადამიანი ორ ნემსს იყენებს ერთ
                დოზაზე: ერთით იღებს პრეპარატს ფლაკონიდან, მეორეთი აკეთებს ინექციას. შპრიცებიც ერთჯერადია — არ გამოიყენოთ
                ხელახლა.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-28T10:10:02.821082Z"
        >
            <Origin>01a047d9-0cb6-7400-9391-6afc00b94b84</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Перевези на грузинский, пожалуйста. Мы возьмем лекарства и четырнадцать шприцев. Спасибо.</Paragraph>
        </Message>
        <Message
            at="2026-08-28T10:10:05.882309Z"
        >
            <Origin>01a047d9-0cb6-740c-9897-f11808689203</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                <Word>
                    <Bold />
                    ქართულად:
                </Word>
            </Paragraph>
            <Paragraph>წამლებს და თოთხმეტ შპრიცს ავიღებთ. მადლობა.</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (Ts'amlebs da totkhmet shprits avighebt. Madloba.)
                </Word>
            </Paragraph>
        </Message>
    </Chapter>
);
