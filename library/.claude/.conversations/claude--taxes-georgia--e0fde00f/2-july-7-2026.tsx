import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[7 July 2026](2026-07-07)</Date>
        </Dated>
        <Title>[[ 7 July 2026 ]]</Title>
        <Message
            at="2026-07-07T11:10:38.919083Z"
        >
            <Origin>019f3c45-bae5-798a-8eb4-fb46e49d9406</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>мои бухгалтера добавили меня в чат скажи, что за RS мне нужно им выслать и где это найти?</Paragraph>
            <Attachment>Uploaded “1783422617517_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-07T11:11:41.763791Z"
        >
            <Origin>019f3c45-bae5-7870-846f-b88b8ff7d545</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “rs.ge добавить пользователя бухгалтера доступ авторизованный пользователь”
            </Action>
            <Action>Searched the web for “rs.ge add authorized user accountant access personal ID”</Action>
            <Action>Searched the web for “rs.ge მომხმარებლის დამატება უფლებების მინიჭება ბუღალტერი”</Action>
            <Paragraph>
                Разобралась, Ana. RS - это rs.ge, портал налоговой (Revenue Service). Бухгалтеры просят доступ к твоему
                личному кабинету, чтобы подавать декларации от твоего имени.
            </Paragraph>
            <Paragraph>
                Обрати внимание: в первом сообщении Tamar просила не прислать пароль, а <Word>
                    <Bold />
                    добавить обеих бухгалтеров как пользователей с правами доступа
                </Word> - именно поэтому они прислали свои личные номера (Personal ID). Это правильный и безопасный способ:
                на портале rs.ge есть функция управления пользователями (ქვე-მომხმარებლის უფლებების მართვა - управление
                правами суб-пользователей), где владелец кабинета создает отдельного пользователя - у бухгалтера будет свой
                вход, а ты в любой момент можешь отозвать доступ.
            </Paragraph>
            <Paragraph>Как это выглядит:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Заходишь на <Word>
                        <Bold />
                        eservices.rs.ge
                    </Word> под своим логином (твое имя пользователя - 305861868, вход подтверждается по SMS на грузинский
                    номер)
                </Line>
                <Line>
                    В меню кабинета находишь раздел управления пользователями (User Management / მომხმარებლის მართვა) -
                    интерфейс можно переключить на английский
                </Line>
                <Line>
                    Создаешь суб-пользователя, указав данные бухгалтера (Anna Takidze, Personal ID 61008016456), и выдаешь
                    права
                </Line>
                <Line>
                    Созданные данные для входа (имя пользователя и пароль суб-пользователя) отправляешь Ann в чат - это и
                    есть "RS access details", которые она просит
                </Line>
            </Paragraph>
            <Paragraph>
                Честно скажу: точную последовательность кликов и какие именно галочки прав ставить я по шагам не проверяла -
                интерфейс кабинета виден только после входа. Но это рутинная операция, которую бухгалтеры делают с каждым
                клиентом. Самый простой путь - ответить Ann примерно так:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    "I'd be happy to set this up. Could you walk me through creating the sub-users in my RS.GE account with the right permissions? I haven't done this before."
                </Word>
            </Paragraph>
            <Paragraph>
                Она либо продиктует шаги, либо (часто так делают) созвонится и настроит вместе с тобой за пять минут.
            </Paragraph>
            <Paragraph>
                Одна предосторожность: если Ann вместо этого попросит просто прислать твой основной логин и пароль от rs.ge
                - лучше вежливо настоять на варианте с суб-пользователями. Основной пароль дает полный контроль над
                кабинетом, и его нельзя "частично отозвать".
            </Paragraph>
        </Message>
        <Message
            at="2026-07-07T11:21:38.957949Z"
        >
            <Origin>019f3c4f-e055-7699-a3f0-5ba4c4d83a32</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>как мне это заполнить?</Paragraph>
            <Attachment>Uploaded “1783423293686_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-07T11:22:23.992338Z"
        >
            <Origin>019f3c4f-e055-7f5b-a790-dde1aca3cbec</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Это форма "პირის დამატება" (добавление лица) - судя по заголовку за окном, ты в разделе <Word>
                    <Bold />
                    ნდობით აღჭურვილი პირები
                </Word> - "доверенные лица". Перевожу поля сверху вниз:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        პ/ნ
                    </Word>* - личный номер добавляемого лица. Сюда: <Word>
                        <Bold />
                        61008016456
                    </Word> (Anna Takidze). Галочка рядом ("უცხო ქვეყნის მოქალაქე") - "гражданин иностранного государства",
                    для Anna не ставь
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        სახელი, გვარი
                    </Word> - имя, фамилия. Скорее всего подтянется автоматически после ввода личного номера; если нет -
                    Anna Takidze
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        მობ
                    </Word>* - мобильный: 555 943 223
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ელ-ფოსტა
                    </Word>* - email: anna.takidze77@gmail.com
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        მინდობილობის №
                    </Word> - номер доверенности (без звездочки - необязательно)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        ატვირთე ფაილი
                    </Word>* - загрузить файл, <Word>
                        <Bold />
                        обязательное поле
                    </Word> - и вот тут стоп, об этом ниже
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        დაწყება
                    </Word>* - дата начала действия доступа
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        დასრულება
                    </Word>* - дата окончания; галочка <Word>
                        <Bold />
                        უვადო
                    </Word> = бессрочно
                </Line>
                <Line>
                    Галочка <Word>
                        <Bold />
                        საბაჟო ორგანოებში წარსადგენად
                    </Word> - "для предъявления в таможенные органы" - не ставь, это не твой случай
                </Line>
                <Line>
                    Галочка <Word>
                        <Bold />
                        ვეთანხმები პირობებს
                    </Word> - "согласна с условиями" (პირობები - ссылка на сами условия)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        შენახვა
                    </Word> - зеленая кнопка "Сохранить"
                </Line>
            </Paragraph>
            <Paragraph>
                Теперь важное. Поле загрузки файла обязательное - система ждет документ-основание, то есть доверенность или
                иной документ, подтверждающий полномочия. У тебя такого файла пока нет, и я не знаю, какой именно документ
                Polaris обычно использует - возможно, подойдет ваш договор, возможно, нужна простая письменная доверенность
                по их шаблону.
            </Paragraph>
            <Paragraph>
                И второй момент: "доверенные лица" - это, возможно, не тот раздел, который имела в виду Ann. На rs.ge есть и
                другой механизм - управление суб-пользователями (მომხმარებლის მართვა), где создается отдельный логин без
                загрузки доверенности. Что именно нужно Polaris - зависит от того, как они работают.
            </Paragraph>
            <Paragraph>Поэтому прежде чем заполнять, напиши Ann примерно так:</Paragraph>
            <Paragraph>
                <Word>
                    <Emphasis />
                    "I'm in my RS.GE account. Should I add you under 'Trusted persons' (it asks me to upload an authorization document - which file should I use?), or create a sub-user for you instead? Could you guide me through it?"
                </Word>
            </Paragraph>
            <Paragraph>
                Так ты не потратишь время на не тот раздел, и они пришлют нужный файл или шаблон, если он требуется.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-07T11:23:20.744620Z"
        >
            <Origin>019f3c51-6fe7-7127-88ce-d448d675f3dc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>я просто дам им данные для входа</Paragraph>
        </Message>
        <Message
            at="2026-07-07T11:23:37.293210Z"
        >
            <Origin>019f3c51-6fe7-72d8-9c7b-3ba88e177bc7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Понимаю - это самый быстрый путь, и честно говоря, в Грузии многие ИП работают с бухгалтерами именно так.
                Раз решила, вот три вещи, чтобы сделать это аккуратно:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Поставь уникальный пароль перед отправкой.
                    </Word> Если текущий пароль от rs.ge где-то повторяется (почта, банк, Payoneer) - сначала смени его на
                    новый, который нигде больше не используется. Отдать бухгалтеру одноразовый пароль от одного кабинета -
                    нормально; отдать пароль, который открывает еще что-то - нет.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Помни, что доступ отзывается сменой пароля.
                    </Word> Если когда-нибудь решишь сменить бухгалтера - просто меняешь пароль, и доступ закрыт. Никаких
                    процедур не нужно.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Про SMS.
                    </Word> Если у тебя в кабинете включена двухшаговая авторизация, при каждом входе бухгалтера код будет
                    приходить на твой грузинский номер - тогда либо придется пересылать коды, либо отключить двухшаговый
                    вход. Если она не включена - вопроса нет, вход будет только по логину и паролю.
                </Line>
            </Paragraph>
            <Paragraph>Логин у тебя - 305861868, пароль тот, что ты задавала при регистрации кабинета.</Paragraph>
            <Paragraph>
                И одна мысль напоследок, без нажима: деньги через этот кабинет не ходят - там декларации и налоговая
                информация, так что риск ограничен. Самое ценное, что стоит держать только у себя, - это доступы к Credo и
                Payoneer. Их бухгалтерам не давай никогда - для деклараций им достаточно выписок, которые ты выгружаешь
                сама.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-07T11:27:29.949148Z"
        >
            <Origin>019f3c55-3f53-7cb7-a48c-0eb3de7dea1a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод,  а какой у меня Tax ID?</Paragraph>
        </Message>
        <Message
            at="2026-07-07T11:27:34.514400Z"
        >
            <Origin>019f3c55-3f53-7279-acf0-1bbe5e34d0dd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Твой Tax ID - <Word>
                    <Bold />
                    305861868
                </Word>. В Грузии у ИП налоговый идентификатор совпадает с регистрационным номером - это тот же номер, что в
                выписке из реестра предпринимателей, и он же твой логин на rs.ge. Если форма (например, у Fiverr или
                Payoneer) спрашивает "Tax ID" или "TIN" для Грузии - указывай его.
            </Paragraph>
        </Message>
    </Chapter>
);
