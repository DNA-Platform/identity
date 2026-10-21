import { Append, Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-07-06T10:09:08.922565Z"
        >
            <Origin>019f36e7-11ea-7616-9e32-6696a11ca08f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я получила еше одно сообщение от компании, которая помогает с Налогами. переведи, пожалуйста
            </Paragraph>
            <Paragraph>
                Sharkyyy &lt;hello@sharkyyy.com&gt; 1:41 PM (25 minutes ago) to me Hello! Thank you for your inquiry! We
                apologize for the delayed response. In the future, we recommend that you contact us through the website chat
                (available after registration). We respond much more quickly there—usually within an hour.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The price of our service subscription is 60 GEL per month, or 480 GEL per year (40 GEL per month on a
                    yearly billing).
                </Line>
                <Line>Yes, the service is capable of declaring reverse-charge VAT.</Line>
                <Line>
                    The service does not submit any declarations automatically. You will need to confirm that you did not
                    have any income, since the service itself cannot know whether you had any income other than that
                    received through banking integrations or not.
                </Line>
                <Line>
                    If you received the Small Business status in June, you are obliged to file the first declaration in July
                    (before the 15th of July). This declaration will reflect your June earnings.
                </Line>
                <Line>
                    The service calculates the taxes and prepares the form. You will still have to log in into RS.GE to
                    submit the declaration. With our service, it literally takes a couple of clicks.
                </Line>
            </Paragraph>
            <Paragraph>
                The website will also automatically generate an income and expense ledger—a simplified accounting document
                that the revenue service can request. We also have integration with RS.GE, which allows you to view your tax
                account status directly in your personal account (whether you have any debt, any write-offs, tax accruals,
                penalties, etc.). However, the integration currently doesn't allow you to directly pass declarations. We're
                working on it. Please let us know if you have any additional questions! Sharkyyy &lt;hello@sharkyyy.com&gt;
                1:41 PM (25 minutes ago) to me Hello! Thank you for your inquiry! We apologize for the delayed response. In
                the future, we recommend that you contact us through the website chat (available after registration). We
                respond much more quickly there—usually within an hour.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The price of our service subscription is 60 GEL per month, or 480 GEL per year (40 GEL per month on a
                    yearly billing).
                </Line>
                <Line>Yes, the service is capable of declaring reverse-charge VAT.</Line>
                <Line>
                    The service does not submit any declarations automatically. You will need to confirm that you did not
                    have any income, since the service itself cannot know whether you had any income other than that
                    received through banking integrations or not.
                </Line>
                <Line>
                    If you received the Small Business status in June, you are obliged to file the first declaration in July
                    (before the 15th of July). This declaration will reflect your June earnings.
                </Line>
                <Line>
                    The service calculates the taxes and prepares the form. You will still have to log in into RS.GE to
                    submit the declaration. With our service, it literally takes a couple of clicks.
                </Line>
            </Paragraph>
            <Paragraph>
                The website will also automatically generate an income and expense ledger—a simplified accounting document
                that the revenue service can request. We also have integration with RS.GE, which allows you to view your tax
                account status directly in your personal account (whether you have any debt, any write-offs, tax accruals,
                penalties, etc.). However, the integration currently doesn't allow you to directly pass declarations. We're
                working on it. Please let us know if you have any additional questions!
            </Paragraph>
            <Paragraph>0--- А еще я потеряла наш с тобой чат, где мы сравнивали фирмы(</Paragraph>
        </Message>
        <Message
            at="2026-07-06T10:09:46.361472Z"
        >
            <Origin>019f36e7-11ea-70fc-b20a-196bf734c1e4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Привет, Ana! Вот перевод письма:</Paragraph>
            <Paragraph>Здравствуйте!</Paragraph>
            <Paragraph>
                Спасибо за ваш запрос! Приносим извинения за задержку с ответом. В будущем рекомендуем связываться с нами
                через чат на сайте (доступен после регистрации) - там мы отвечаем гораздо быстрее, обычно в течение часа.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Стоимость подписки на наш сервис - 60 GEL в месяц, или 480 GEL в год (то есть 40 GEL в месяц при годовой
                    оплате).
                </Line>
                <Line>
                    Да, сервис умеет декларировать reverse-charge VAT (НДС по обратному начислению - это НДС на услуги,
                    купленные у иностранных компаний, например комиссии Fiverr).
                </Line>
                <Line>
                    Сервис не подает никакие декларации автоматически. Вам нужно будет самостоятельно подтверждать, что
                    дохода не было, - сервис сам не может знать, был ли у вас доход помимо того, что виден через банковские
                    интеграции.
                </Line>
                <Line>
                    Если вы получили статус малого бизнеса в июне, вы обязаны подать первую декларацию в июле (до 15 июля).
                    Эта декларация будет отражать ваш июньский доход.
                </Line>
                <Line>
                    Сервис рассчитывает налоги и готовит форму. Вам все равно нужно будет войти в RS.GE, чтобы подать
                    декларацию, - но с нашим сервисом это буквально пара кликов.
                </Line>
            </Paragraph>
            <Paragraph>
                Сайт также автоматически формирует журнал доходов и расходов - упрощенный бухгалтерский документ, который
                может запросить налоговая служба. У нас есть интеграция с RS.GE, которая позволяет видеть состояние вашего
                налогового счета прямо в личном кабинете (есть ли задолженность, списания, начисления, штрафы и т.д.).
                Однако интеграция пока не позволяет напрямую отправлять декларации - мы над этим работаем.
            </Paragraph>
            <Paragraph>Дайте знать, если будут дополнительные вопросы!</Paragraph>
            <Paragraph>Сейчас поищу наш чат со сравнением фирм.</Paragraph>
            <Action>Searched past conversations for “бухгалтер сравнение фирм ИП”</Action>
            <Paragraph>
                Нашла! Вот он: <Word>
                    <Reference>https://claude.ai/chat/7f89c8d2-5911-489e-b5a6-d9cb8eeb673d</Reference>
                    Georgia IE residency income threshold
                </Word> - там мы сравнивали агентства. Коротко, на чем остановились:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        ExpatHub
                    </Word> - ~200 GEL/мес (вам с Дагом показалось дорого)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Expertos
                    </Word> (expertos.ge) - 150 GEL/мес, или 100 GEL/мес при оплате за год
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        relocup.com
                    </Word> - от ~135 GEL/мес
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        helperge.ge
                    </Word> - цена по запросу
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Частник с servisebi.ge
                    </Word> - от ~50 GEL/мес, но в основном на грузинском
                </Line>
                <Line>
                    Незавершенный шаг: я предлагала составить двуязычное письмо для рассылки частникам - мы его так и не
                    отправили
                </Line>
            </Paragraph>
            <Paragraph>
                Теперь как Sharkyyy вписывается в эту картину. Важно понимать: это другая категория. Все варианты выше - это
                люди, которые ведут учет за тебя. Sharkyyy - это программа-помощник: она считает налог, готовит форму и
                ведет журнал доходов-расходов, но подаешь на rs.ge ты сама, и подтверждать нулевые месяцы тоже ты. По сути
                это "вариант Б" (делаю сама) с удобной оберткой за 40-60 GEL/мес.
            </Paragraph>
            <Paragraph>Что в письме хорошо под твой случай:</Paragraph>
            <Paragraph>
                <List />
                <Line>Умеет reverse-charge VAT - это был один из наших четырех проверочных вопросов, и они его прошли</Line>
                <Line>
                    Автоматический журнал доходов и расходов - тот самый документ, который налоговая может запросить
                </Line>
                <Line>Интеграция с rs.ge для просмотра задолженностей и начислений</Line>
            </Paragraph>
            <Paragraph>
                И одно важное: пункт 4 у них совпадает с тем, что мы выясняли - статус с июня означает первую декларацию
                <Word>
                    <Bold />
                    до 15 июля
                </Word>. Это уже на следующей неделе. Так что решение по бухгалтеру (или по Sharkyyy, или подать самой)
                лучше принять в ближайшие дни, чтобы не упереться в дедлайн.
            </Paragraph>
            <Paragraph>
                Хочешь, помогу сравнить Sharkyyy с Expertos по сути: за 100 GEL/мес Expertos делает все сам, за 40-60 GEL
                Sharkyyy помогает делать самой?
            </Paragraph>
        </Message>
        <Message
            at="2026-07-06T11:47:33.471618Z"
        >
            <Origin>019f3741-38e1-794a-bb46-c2a2923d275c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, помоиг мне написать пиьсмо Nini (прикрепляю нашу переписку для контекста), что я подписала договор.
                Какие наши следующие действия? какую информацию я должна предоставить, чтобы Поларис мог подать мою нулевую
                декларацию за июнь? поблагодари ее за звонок и за содейсвие!
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-07-06T11:47:55.796267Z"
        >
            <Origin>019f3741-38e1-7289-bcf8-9b17764dbd14</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Отлично, Ana, поздравляю с подписанием! Вот письмо для Nini:</Paragraph>
            <Action>Used message compose v1</Action>
            <Paragraph>В письме:</Paragraph>
            <Paragraph>
                <List />
                <Line>Благодарность за звонок и содействие (и отдельно - за русскоязычного бухгалтера)</Line>
                <Line>Подтверждение, что договор подписан через Signify</Line>
                <Line>Вопрос о следующих шагах и о том, что нужно от тебя для нулевой декларации за июнь</Line>
                <Line>Напоминание про дедлайн 15 июля - чтобы они точно успели</Line>
                <Line>Предложение сразу выслать сертификат SBS и выписку из реестра</Line>
            </Paragraph>
            <Paragraph>
                Один момент на будущее: скорее всего, для нулевой декларации им понадобится минимум - вероятно, доступ или
                подтверждение, что дохода не было, плюс данные для входа в rs.ge (или доверенность, если они подают от
                твоего имени через свой доступ). Спросят сами на онбординге, но будь готова, что попросят логин rs.ge.
            </Paragraph>
            <Paragraph>
                И не забудь - для июльской декларации (за июль, подается в августе) уже понадобится выписка из Credo и
                данные по Payoneer, если в июле придет доход.
            </Paragraph>
        </Message>
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
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
