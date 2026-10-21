import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-01T10:24:38.411811Z"
        >
            <Origin>019d4893-600c-7569-943a-aea456a91751</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Turkish:</Paragraph>
            <Paragraph>
                Could you please provide me with some report, possibly in PDF form, that are the notes from our sessions?
            </Paragraph>
            <Paragraph>
                We didn’t talk about this, but in America, I am applying for disability insurance to help me and give me
                some time to figure out what to do with my career. I’ve been out of work for a while and I struggled for
                many years while working for American companies as a software engineer. That path is not working out, and
                the disability insurance helps.
            </Paragraph>
            <Paragraph>
                The case manager for my case needs confirmation that I’ve been seeing a licensed psychiatrist recently. I
                think we’ve had three sessions together so if you can provide some sort of report on notes from our session
                so I can send that to her, I would appreciate it
            </Paragraph>
            <Paragraph>
                I’m still in Georgia. I don’t think I’ll be back to Turkey anytime soon, but Ana and I found a nice
                apartment here and we are getting settled
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T10:24:50.992605Z"
        >
            <Origin>019d4893-600c-7080-a8d7-6162a658c1f9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Bana oturumlarımızdan notları içeren bir rapor, mümkünse PDF formatında verebilir misiniz?
            </Paragraph>
            <Paragraph>
                Bunu konuşmamıştık ama Amerika'da, kariyerimle ne yapacağımı anlamam için bana zaman kazandıracak ve
                yardımcı olacak bir maluliyet sigortası başvurusunda bulunuyorum. Bir süredir işsizim ve Amerikan
                şirketlerinde yazılım mühendisi olarak çalışırken uzun yıllar boyunca zorlandım. Bu yol işe yaramıyor ve
                maluliyet sigortası yardımcı oluyor.
            </Paragraph>
            <Paragraph>
                Davamın vaka yöneticisi, yakın zamanda lisanslı bir psikiyatrist görmeye devam ettiğimi doğrulayan bir
                belgeye ihtiyaç duyuyor. Sanırım üç oturumumuz oldu; eğer oturumlarımızın notlarına dair bir tür rapor
                hazırlayabilirseniz, bunu ona iletebilmem için çok memnun olurum.
            </Paragraph>
            <Paragraph>
                Hâlâ Gürcistan'dayım. Yakın zamanda Türkiye'ye döneceğimi sanmıyorum, ama Ana ve ben burada güzel bir daire
                bulduk ve yerleşmeye başlıyoruz.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T14:10:25.849503Z"
        >
            <Origin>019d4962-1cd5-743b-922a-ace90b71b011</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to English, please</Paragraph>
            <Attachment>Uploaded “IMG_3085.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-01T14:10:35.041384Z"
        >
            <Origin>019d4962-1cd5-75b5-b2a4-7b2c69a9bd97</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's the translation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4:43 PM
                </Word> — We can put an official stamp on it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4:44 PM
                </Word> — We'll write it up for you in Word and include the information from the stamp.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6:04 PM
                </Word> — I'm out of the province this week for a scientific congress.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6:04 PM
                </Word> — Remind us next week and we'll send it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    6:04 PM
                </Word> — Have a good day.
            </Paragraph>
            <Paragraph>
                So it sounds like your psychiatrist's office confirmed they can prepare the document with an official stamp,
                but the doctor is out of town this week. You'll need to follow up with them next week.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T14:11:39.076506Z"
        >
            <Origin>019d4963-399b-77b5-bd53-89517afde7a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Turkish:</Paragraph>
            <Paragraph>
                Thank you. A hearing is happening at the end of the month and I think my caseworker needs it soon. Is there
                any way it can be done earlier?
            </Paragraph>
            <Paragraph>
                I’m sorry to bother you, but lawyers are involved and they need to prepare things based on all my medical
                records
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T14:11:44.664112Z"
        >
            <Origin>019d4963-399b-7576-9bda-9992e3b0a552</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Teşekkür ederim. Ayın sonunda bir duruşma var ve vaka yöneticimin buna yakında ihtiyaç duyacağını
                düşünüyorum. Daha erken hazırlanması mümkün olur mu?
            </Paragraph>
            <Paragraph>
                Sizi rahatsız ettiğim için özür dilerim, ancak avukatlar da sürece dahil ve tüm tıbbi kayıtlarıma dayanarak
                hazırlık yapmaları gerekiyor.
            </Paragraph>
        </Message>
    </Chapter>
);
