import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-25T09:42:13.942158Z"
        >
            <Origin>019dc405-7c4a-77a3-960e-d454767eb4f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is a research task. Is there any precedent in the country of Georgia, so you can expand this to other
                countries if you can’t find the examples there, where in a cross border risk context, a mother has valid
                documents, but one of her children who is under 18 cannot get them renewed, and the country denies residency
                to the child, even though the mother can maintain her valid residency
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:44:35.370606Z"
        >
            <Origin>019dc405-7c4a-707f-a5de-49488de9e76e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Georgia residence permit denied minor child mother valid TRP”</Action>
            <Action>
                Searched the web for “Georgia residence permit refused child expired passport parent valid status”
            </Action>
            <Action>
                Searched the web for “ECHR European Court Human Rights case child residence denied mother granted family
                unity”
            </Action>
            <Action>
                Searched the web for “"residence permit" minor child unable renew passport mother retains residency”
            </Action>
            <Action>
                Searched the web for “stateless child residence permit denied parent valid Russian passport renewal consent”
            </Action>
            <Action>
                Searched the web for “Georgia "residence permit" denied child no consent father custody documents”
            </Action>
            <Action>
                Searched the web for “"residence permit" minor child denied passport expired parent valid Tbilisi Georgia
                case”
            </Action>
            <Action>
                Searched the web for “ECHR Article 8 mother granted residence child denied separated split family decision”
            </Action>
            <Heading>Research findings: Cross-border residency split between parent and minor child</Heading>
            <Heading>What I found in Georgia (the country)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    No published Georgian case precedent surfaced
                </Word> in English-language sources matching the exact scenario — a mother retaining her valid TRP while her
                minor child's renewal is denied because the child's underlying documents (passport from origin country)
                couldn't be obtained or renewed. Georgian administrative court decisions on individual TRP refusals are not
                systematically published in English, so absence in my search is not the same as absence in fact. The
                Georgian Public Defender (Ombudsman) reports and TDI publish migration-related case summaries, but I didn't
                find one matching this fact pattern.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The legal architecture that creates the risk is well-documented
                </Word>, and it's structural, not discretionary:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Each TRP application is <Word>
                        <Bold />
                        individual
                    </Word> — family members submit separately even when reuniting under a sponsor's permit (<Word>
                        <Reference>https://expathub.ge/georgian-legal-residence-permit-consolidated/</Reference>
                        ExpatHub
                    </Word>).
                </Line>
                <Line>
                    Under <Word>
                        <Bold />
                        Article 6 of the Procedures (Order No. 520)
                    </Word>, every applicant — including a minor — must submit "a copy of the alien's travel document"
                    (passport). Georgia gives almost no flexibility here; the passport is the one document that cannot be
                    substituted (<Word>
                        <Reference>https://www.matsne.gov.ge/en/document/view/2483468</Reference>
                        matsne.gov.ge
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Article 15 of the Procedures
                    </Word>: a TRP is "automatically terminated upon expiry." Termination of one family member's permit
                    doesn't cascade to the others. The mother's TRP remains valid until its own expiry; the child's lapses
                    on its own timeline.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Article 18 of the Law on Legal Status of Aliens
                    </Word> lists denial grounds. Inability to produce a valid passport isn't framed as a denial ground —
                    it's an application-completeness failure, which functionally produces the same outcome: no permit.
                </Line>
            </Paragraph>
            <Paragraph>
                So the mechanism in Georgia is: the mother's permit is unaffected by the child's renewal failing, and a
                child without a renewable origin-country passport has no path to renewal regardless of the parent's status.
                The Article 3(5) workaround Doug already knows about (one parent's consent is sufficient for a TRP for a
                minor) <Word>
                    <Bold />
                    does not solve the passport problem
                </Word> — it solves a different problem (consent of the other parent for the residence application itself).
            </Paragraph>
            <Heading>Comparable scenarios in ECHR jurisprudence</Heading>
            <Paragraph>
                I didn't find an ECHR case on the precise pattern (parent's permit valid, child's renewal denied due to
                origin-country document failure). The closest jurisprudence is on the related but distinct question of
                family unity when one member is denied status:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Jeunesse v. Netherlands
                    </Word> (GC, 2014) — Surinamese mother denied a residence permit; ECHR found Article 8 violation because
                    authorities failed to weigh impact on her children. Reverse direction from your scenario, but
                    establishes that immigration authorities must assess the family-unity impact of splitting status, not
                    just the individual applicant (<Word>
                        <Reference>https://hudoc.echr.coe.int/app/conversion/pdf/?library=ECHR&amp;id=003-4890900-5979752&amp;filename=003-4890900-5979752.pdf</Reference>
                        HUDOC
                    </Word>).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Berrehab v. Netherlands
                    </Word> (1988) — parent-child family life is not severed by divorce or geographic separation.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tuquabo-Tekle v. Netherlands
                    </Word> and <Word>
                        <Bold />
                        Sen v. Netherlands
                    </Word> — establish that where children cannot reasonably establish family life elsewhere, the state's
                    margin of appreciation narrows.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Slivenko v. Latvia
                    </Word> (GC, 2003) — the Grand Chamber explicitly noted that the family was expelled <Word>
                        <Emphasis />
                        as a unit
                    </Word>, which is what made the expulsion compatible with Article 8. The implication: splitting a family
                    by denying one member's status raises a stronger Article 8 claim.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important limitation
                </Word>: Georgia is a Council of Europe member and ECHR-bound, but the ECHR does not give a right to family
                reunification in a chosen country, and the bar for finding a violation is "exceptional circumstances." A
                document-failure denial would likely be defended by Georgia as routine administrative process, not a rights
                violation. I couldn't find an ECHR case where document-renewal failure (vs. immigration policy choice) was
                the trigger.
            </Paragraph>
            <Heading>The honest gap</Heading>
            <Paragraph>
                The specific scenario you're describing — a child's residency lost because the <Word>
                    <Emphasis />
                    origin country
                </Word> (not the host country) won't renew the underlying travel document — sits in a jurisdictional dead
                zone:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>The host country (Georgia) treats it as the applicant's failure to produce a required document.</Line>
                <Line>
                    The origin country (e.g., Russia, requiring both parents' consent for a minor's passport renewal) treats
                    it as a domestic family-law matter.
                </Line>
                <Line>
                    ECHR mechanisms generally challenge <Word>
                        <Emphasis />
                        the host country's policy
                    </Word>, but the host country has done nothing irrational — it's applied a generic document requirement.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Statelessness frameworks
                </Word> (1954 and 1961 UN Conventions) are the closest legal instrument that addresses this gap, but a child
                with an unrenewed-but-not-renounced citizenship is typically not deemed <Word>
                    <Emphasis />
                    de jure
                </Word> stateless. UNHCR has documented <Word>
                    <Emphasis />
                    de facto
                </Word> statelessness in exactly this category (children unable to access nationality documents because of
                family conflict or state non-cooperation), but enforceable protections are limited.
            </Paragraph>
            <Heading>What I'd recommend doing with this finding</Heading>
            <Paragraph>Given the consequential nature of this for your family, two concrete next steps:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Ask ExpatHub directly
                    </Word> whether they've seen this specific fact pattern in their casework — they handle hundreds of
                    applications and would know if Georgia's PSDA has any administrative practice (e.g., accepting expired
                    passports plus a notarized statement, or accepting a <Word>
                        <Emphasis />
                        travel document
                    </Word> in lieu of a passport under Article 1(f) of the Law, which defines "travel document" more
                    broadly than "passport").
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Look at Article 1(f) of the Law on Aliens
                    </Word> — "travel document" is defined as "a passport or other travel document serving as a passport
                    substitute, as well as an ID recognised by the legislation or international agreements of Georgia that
                    is valid for travelling." There may be room there for a Convention Travel Document or similar — but
                    whether Georgia issues these to non-refugee minors with unrenewable origin-country passports is a
                    question for ExpatHub or an SDA case officer, not me.
                </Line>
            </Paragraph>
            <Paragraph>
                I'd treat the absence of a clear precedent as itself meaningful: this is a known structural risk in Georgian
                immigration practice that doesn't appear to have been litigated to a published outcome, which usually means
                cases either resolve administratively (passport gets renewed, alternative document accepted) or families
                leave the country before pursuing appeals.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:45:11.505708Z"
        >
            <Origin>019dc408-3ad8-701d-b94a-eff8a7922d1a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Dont use english language sources that is a search query for georgian</Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:46:49.869486Z"
        >
            <Origin>019dc408-3ad8-7c9e-9306-998745a6ce3f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Грузия отказ ВНЖ ребенку мать паспорт несовершеннолетний”</Action>
            <Action>Searched the web for “Грузия отказ ВНЖ ребенку согласие второго родителя суд практика”</Action>
            <Action>Searched the web for “"вид на жительство" Грузия ребенок отказ продление паспорт истек случай”</Action>
            <Action>Searched the web for “"Грузия" "ВНЖ" "ребенок" "отказ" форум опыт без согласия отца паспорт”</Action>
            <Action>
                Searched the web for “российский загранпаспорт ребенок отказ согласие отца за границей получить”
            </Action>
            <Action>Searched the web for “ბინადრობის ნებართვა არასრულწლოვანი უარი მშობლის”</Action>
            <Heading>Что нашлось в русскоязычных и грузинских источниках</Heading>
            <Heading>Прямое подтверждение сценария как известной проблемы</Heading>
            <Paragraph>
                Юридическая фирма <Word>
                    <Reference>https://legal.ge/ru/service/migratsionnoe-i-immigratsionnoe-ru/oformlenie-vnzh-dlya-detey-ru</Reference>
                    Legal.ge
                </Word> явно описывает этот сценарий как часто встречающийся: «часты случаи, когда разведенный родитель
                пытается привезти ребенка без нотариального согласия второго родителя, что создает юридический тупик». То
                есть Legal.ge документирует это именно как структурный «юридический тупик» — не как отдельный казус, а как
                повторяющуюся проблему в их практике.
            </Paragraph>
            <Paragraph>
                При этом на уровне ВНЖ эта проблема смягчается: Постановление №520 (статья 3, пункт 5) позволяет одному
                родителю подавать на ВНЖ ребенка без согласия второго (Дугу это уже известно). Но Постановление №520 решает
                только вопрос согласия на ВНЖ — оно не решает вопрос <Word>
                    <Bold />
                    исходного паспорта
                </Word> ребенка, который выдает страна гражданства.
            </Paragraph>
            <Heading>Грузинская статистика по отказам и обжалованию</Heading>
            <Paragraph>Это то, чего я не нашел в англоязычных источниках:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    По данным <Word>
                        <Bold />
                        TDI
                    </Word> (Толерантность и разнообразие — грузинская НПО), из 2 018 неудовлетворенных заявлений на ВНЖ
                    <Word>
                        <Bold />
                        1 907 (94%)
                    </Word> были отклонены по основанию «угрозы государственной безопасности» (статья 18(a)). Отказы по
                    причине неполного пакета документов — небольшое меньшинство (<Word>
                        <Reference>https://tdi.ge/ge/news/936-ra-icvleba-sakartvelos-kanonshi-ucxoelta-da-mokalakeobis-armkone-pirta-samartlebrivi</Reference>
                        tdi.ge
                    </Word>).
                </Line>
                <Line>
                    По данным пояснительной записки грузинского парламента к проекту изменений в закон: только за <Word>
                        <Bold />
                        август 2020 года
                    </Word> в судах было 201 завершенное дело по спорам о ВНЖ, из которых <Word>
                        <Bold />
                        89 (≈44%)
                    </Word> закончились в пользу заявителя (<Word>
                        <Reference>https://info.parliament.ge/file/1/BillReviewContent/268542</Reference>
                        info.parliament.ge
                    </Word>). Это значит, что обжалование отказов в Тбилисском городском суде — не редкое явление, а
                    массовая практика с высоким процентом успеха.
                </Line>
                <Line>
                    Ресурс <Word>
                        <Reference>https://avezor.ge/saintereso-phakhtebi-sakharthvelos-shesakheb/binadrobis-nebarthvis-migheba-sakharthveloshi/</Reference>
                        avezor.ge
                    </Word> подтверждает: «ზოგიერთმა განმცხადებელმა წარმატებით შეძლო მათი უარი სასამართლოში გაასაჩივროს» —
                    «некоторым заявителям удалось успешно обжаловать свой отказ в суде».
                </Line>
            </Paragraph>
            <Paragraph>
                Конкретного опубликованного решения суда именно по сценарию «у матери ВНЖ продлили, у несовершеннолетнего
                ребенка — отказ из-за невозможности продлить иностранный паспорт» я не нашел ни в матсне (matsne.gov.ge), ни
                на сайтах юрфирм, ни на форумах.
            </Paragraph>
            <Heading>Российский паспортный механизм — нюанс, который меняет картину</Heading>
            <Paragraph>
                Здесь есть важная деталь, которая может быть критичной для Аны. По российскому законодательству (<Word>
                    <Reference>https://www.garant.ru/actual/zagranpasport/</Reference>
                    Гарант
                </Word>, статья 15 ФЗ №114):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Для <Word>
                        <Bold />
                        выдачи
                    </Word> загранпаспорта несовершеннолетнему согласие второго родителя <Word>
                        <Bold />
                        не требуется
                    </Word>. Заявление подает один родитель.
                </Line>
                <Line>
                    Второй родитель может подать <Word>
                        <Bold />
                        «заявление о несогласии на выезд»
                    </Word> — но это блокирует только <Word>
                        <Bold />
                        пересечение российской границы при выезде
                    </Word>, а не выдачу самого паспорта.
                </Line>
                <Line>
                    Если ребенок уже находится за границей, заявление-несогласие отца юридически не препятствует получению
                    нового паспорта в российском консульстве в Тбилиси.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть структурный риск, о котором ты, возможно, беспокоишься, в российской паспортной системе <Word>
                    <Bold />
                    не такой жесткий
                </Word>, как может казаться. Ana может в консульстве РФ в Тбилиси получить новые загранпаспорта для детей
                без согласия отца — при условии, что отец не оспаривает материнство и не имеется судебного решения о лишении
                ее родительских прав или об ограничении ее представительства. Но это формальная теория; на практике
                консульства имеют дискрецию и могут затягивать.
            </Paragraph>
            <Heading>Что я не подтвердил и почему это важно</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Опубликованного дела грузинского суда с фактологией «мать сохранила ВНЖ — ребенку отказано из-за
                    паспортной проблемы» я не нашел. Базы matsne и court.ge на русском индексируют не все решения, а Public
                    Defender (Народный защитник) такие отчеты публикует выборочно.
                </Line>
                <Line>
                    Я не проверил, как именно Sda.gov.ge (АРГУ) трактует случай, когда у ребенка есть <Word>
                        <Bold />
                        просроченный
                    </Word> российский паспорт vs <Word>
                        <Bold />
                        отсутствует возможность получить новый
                    </Word>. Это вопрос административной практики, а не закона, и его может ответить только ExpatHub или
                    прямой запрос в АРГУ.
                </Line>
                <Line>
                    Я не проверил, есть ли у Грузии практика выдачи <Word>
                        <Bold />
                        проездного документа лица без гражданства
                    </Word> ребенку, у которого формально есть гражданство, но нет доступа к паспорту. По грузинскому закону
                    «travel document» определяется шире чем «паспорт» — но как это применяется к детям с фактическим (не
                    юридическим) безпаспортным статусом, я подтвердить не могу.
                </Line>
            </Paragraph>
            <Paragraph>
                Учитывая сказанное в твоей памяти про консервативный подход к консультациям по иммиграционным вопросам —
                практический вывод: это вопрос, который нужно задать <Word>
                    <Bold />
                    напрямую ExpatHub
                </Word> с тремя конкретными подвопросами:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Есть ли в их практике случаи, когда мать получила/продлила ВНЖ, а ребенку отказали по паспортным
                    причинам?
                </Line>
                <Line>
                    Что АРГУ принимает в качестве «travel document» для несовершеннолетнего, если страна гражданства не
                    выдает паспорт?
                </Line>
                <Line>
                    Какой процент успеха они видят в Тбилисском городском суде при обжаловании именно
                    паспортно-документальных отказов (не отказов по статье 18(a))?
                </Line>
            </Paragraph>
            <Paragraph>Эти вопросы дадут конкретные данные, а не общую теорию.</Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:47:16.271006Z"
        >
            <Origin>019dc40a-21fd-7da8-a404-b48ec3fae2a0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You have to write in a different language from what you search in because I can’t speak Russian. Please
                translate that to English and speak to me in English going forward even if you have to use a different
                language to search in.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:47:44.788528Z"
        >
            <Origin>019dc40a-21fd-7a35-a9e0-6c94542b375d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — apologies. Going forward I'll search in Russian/Georgian when needed but always respond in
                English. Here's the translation:
            </Paragraph>
            <Heading>What Russian and Georgian sources revealed</Heading>
            <Heading>Direct confirmation that this scenario is a known problem</Heading>
            <Paragraph>
                The Georgian law firm <Word>
                    <Reference>https://legal.ge/ru/service/migratsionnoe-i-immigratsionnoe-ru/oformlenie-vnzh-dlya-detey-ru</Reference>
                    Legal.ge
                </Word> explicitly describes this scenario as a frequently encountered one: "cases are also frequent when a
                divorced parent tries to bring a child without the notarized consent of the second parent, which creates a
                legal deadlock." Legal.ge documents this as a structural "legal deadlock" — not as a one-off case, but as a
                recurring problem in their practice.
            </Paragraph>
            <Paragraph>
                At the residence-permit level, this is partially mitigated: Ordinance No. 520 (Article 3, paragraph 5)
                allows one parent to apply for the child's TRP without the second parent's consent (you already know this).
                But Ordinance No. 520 only resolves the <Word>
                    <Emphasis />
                    consent-to-TRP
                </Word> issue — it does not resolve the <Word>
                    <Bold />
                    origin-country passport
                </Word> issue, which is determined by the country of citizenship.
            </Paragraph>
            <Heading>Georgian statistics on denials and appeals</Heading>
            <Paragraph>This is what I didn't find in English-language sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Per <Word>
                        <Bold />
                        TDI
                    </Word> (Tolerance and Diversity Institute, a Georgian NGO): out of 2,018 denied TRP applications,
                    <Word>
                        <Bold />
                        1,907 (94%)
                    </Word> were rejected on grounds of "threat to state security" (Article 18(a)). Denials due to
                    incomplete documentation are a small minority (<Word>
                        <Reference>https://tdi.ge/ge/news/936-ra-icvleba-sakartvelos-kanonshi-ucxoelta-da-mokalakeobis-armkone-pirta-samartlebrivi</Reference>
                        tdi.ge
                    </Word>).
                </Line>
                <Line>
                    Per the explanatory note from the Georgian parliament accompanying a draft amendment to the law: in
                    <Word>
                        <Bold />
                        August 2020 alone
                    </Word>, 201 completed court cases on TRP disputes were resolved, of which <Word>
                        <Bold />
                        89 (≈44%)
                    </Word> ended in favor of the applicant (<Word>
                        <Reference>https://info.parliament.ge/file/1/BillReviewContent/268542</Reference>
                        info.parliament.ge
                    </Word>). This means appealing denials in the Tbilisi City Court is not rare — it's a routine practice
                    with a high success rate.
                </Line>
                <Line>
                    <Word>
                        <Reference>https://avezor.ge/saintereso-phakhtebi-sakharthvelos-shesakheb/binadrobis-nebarthvis-migheba-sakharthveloshi/</Reference>
                        Avezor.ge
                    </Word> confirms: "some applicants have successfully appealed their refusals in court."
                </Line>
            </Paragraph>
            <Paragraph>
                I did <Word>
                    <Emphasis />
                    not
                </Word> find a published court decision matching the exact scenario — "the mother's TRP was renewed, the
                minor child was denied because the foreign passport couldn't be renewed" — in matsne.gov.ge, on law firm
                sites, or on forums.
            </Paragraph>
            <Heading>The Russian passport mechanism — a nuance that changes the picture</Heading>
            <Paragraph>
                There's an important detail here that may be critical for Ana's situation. Per Russian legislation (<Word>
                    <Reference>https://www.garant.ru/actual/zagranpasport/</Reference>
                    Garant
                </Word>, Article 15 of Federal Law No. 114):
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    For the <Word>
                        <Bold />
                        issuance
                    </Word> of a foreign passport to a minor, the consent of the second parent is <Word>
                        <Bold />
                        not required
                    </Word>. One parent files the application.
                </Line>
                <Line>
                    The second parent can file a <Word>
                        <Bold />
                        "statement of disagreement with departure"
                    </Word> (заявление о несогласии на выезд) — but this only blocks <Word>
                        <Bold />
                        crossing the Russian border on exit
                    </Word>, not the issuance of the passport itself.
                </Line>
                <Line>
                    If the child is already abroad, the father's statement of disagreement does not legally prevent
                    obtaining a new passport at the Russian consulate in Tbilisi.
                </Line>
            </Paragraph>
            <Paragraph>
                In other words, the structural risk you may be worried about is <Word>
                    <Bold />
                    not as rigid in the Russian passport system
                </Word> as it might seem. Ana can obtain new foreign passports for the children at the Russian consulate in
                Tbilisi without the father's consent — provided the father isn't disputing maternity and there's no court
                order depriving her of parental rights or limiting her representation. That's the formal theory; in practice
                consulates have discretion and may delay.
            </Paragraph>
            <Heading>What I didn't confirm and why it matters</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    I didn't find a published Georgian court decision with the fact pattern "mother retained TRP — child
                    denied due to passport problem." The matsne and court.ge databases don't index every decision in
                    Russian, and the Public Defender (Ombudsman) publishes such reports selectively.
                </Line>
                <Line>
                    I didn't verify how Sda.gov.ge (the PSDA) actually treats cases where a child has an <Word>
                        <Bold />
                        expired
                    </Word> Russian passport vs. <Word>
                        <Bold />
                        no ability to obtain a new one
                    </Word>. That's an administrative-practice question, not a legal one, and only ExpatHub or a direct
                    inquiry to the PSDA can answer it.
                </Line>
                <Line>
                    I didn't verify whether Georgia has practice issuing a <Word>
                        <Bold />
                        stateless person's travel document
                    </Word> to a child who formally has citizenship but no access to a passport. Under Georgian law, "travel
                    document" is defined more broadly than "passport" — but how this applies to children with de facto (not
                    de jure) passportless status, I can't confirm.
                </Line>
            </Paragraph>
            <Paragraph>
                Given the conservative approach to immigration consultations noted in your memory — the practical
                conclusion: this is a question to ask <Word>
                    <Bold />
                    ExpatHub directly
                </Word>, with three specific sub-questions:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Do they have cases in their practice where the mother received/renewed a TRP and the child was denied
                    for passport reasons?
                </Line>
                <Line>
                    What does the PSDA accept as a "travel document" for a minor when the country of citizenship doesn't
                    issue a passport?
                </Line>
                <Line>
                    What success rate do they see in the Tbilisi City Court when appealing specifically
                    passport/documentation-based denials (as opposed to Article 18(a) state-security denials)?
                </Line>
            </Paragraph>
            <Paragraph>These questions will yield concrete data rather than general theory.</Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:51:45.119361Z"
        >
            <Origin>019dc40e-3dce-7ba4-8633-dbcef610b31e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t feel like you’re understanding the situation very well, so it goes like this. Ana is out of the
                country, but one of her children will have a passport expire when there is currently a travel band from the
                father and she has no ability to remove it possibly. In case that happens, then her son is stranded in the
                country without the ability to get a passport. This happens in two years so that’s imagine that she is a
                Georgian resident by then possibly with a long-term residency if we can swing it. Still the child is going
                to have some problems and at some point the residency is going to come up and she will have valid documents
                and he won’t. That’s the scenario.
            </Paragraph>
            <Paragraph>
                I see your thoughts, and you still don’t understand the information. The correction is that both children
                are with her out of the country. Otherwise they wouldn’t be looking for Georgian residency. They are not
                trapped. No one is trapped, but not having a passport in Russia for one of her children might be a problem
                in general, but might be a problem, particularly in getting George residency renewed
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:52:12.541872Z"
        >
            <Origin>019dc40e-3dce-714e-ab0f-9cc3698cc1c7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got it — let me restate the scenario to make sure I have it right, then research the right question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual scenario:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Ana and both children are in Georgia (or will be), pursuing TRP.</Line>
                <Line>In ~2 years, one child's Russian passport will expire.</Line>
                <Line>
                    The biological father in Russia has filed a travel ban (заявление о несогласии на выезд / "statement of
                    disagreement with departure") which she likely cannot remove.
                </Line>
                <Line>
                    The question isn't whether the child is "trapped" — he's already out of Russia. The question is: <Word>
                        <Bold />
                        what happens when his Russian passport expires while he's abroad, and Russia won't reissue it because of the father's objection, and Ana then needs to renew his Georgian TRP?
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>So the operative question is two-stage:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Will the Russian consulate in Tbilisi actually refuse to issue a new passport based on the father's
                    travel ban?
                </Line>
                <Line>
                    If yes, what happens to the child's Georgian TRP renewal when he has no valid travel document, while
                    Ana's own TRP is fine?
                </Line>
            </Paragraph>
            <Paragraph>Let me research both pieces properly.</Paragraph>
            <Action>
                Searched the web for “российское консульство загранпаспорт ребенку запрет выезд отца отказ выдача за
                границей”
            </Action>
            <Action>
                Searched the web for “"загранпаспорт ребенку" консульство РФ за границей "несогласие на выезд" отец отказ”
            </Action>
            <Action>
                Searched the web for “консульство РФ Тбилиси загранпаспорт ребенку "запрет на выезд" отца отказали выдаче”
            </Action>
        </Message>
        <Message
            at="2026-04-25T09:53:00.383002Z"
        >
            <Origin>019dc40f-6473-74b2-8b85-ce3c23d028a2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No card it really is that he’s trapped and in this case he would be trapped in Georgia because if you don’t
                have a passport, you can’t cross borders but as a mitigating factor, if he at least has Georgian documents,
                he can operate there, but he probably needs the passport from his home country to have his residency
                renewed, but in this case we have a situation where the mother can have residency, so would they really deny
                residency to her because one of her children can’t get residency in a scenario like this? If you don’t
                understand the way in which he’s trapped, you don’t understand that you need a passport to leave a country.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:53:47.554651Z"
        >
            <Origin>019dc40f-6473-7cbe-a3b1-409c54e6bdc8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Now I understand the scenario clearly. Let me address your actual question directly, then research the
                missing piece.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Direct answer to your core question: No, Ana's residency would not be denied because her child's was denied.
                </Word> Georgian TRP applications are individual — each family member submits separately, and one denial
                doesn't cascade to others. The mother's renewal is evaluated on the mother's facts alone (her business
                turnover or whatever ground she's renewing under), and her own valid passport. The child's failure to renew
                his TRP creates problems <Word>
                    <Emphasis />
                    for the child
                </Word>, not for her status.
            </Paragraph>
            <Paragraph>
                The harder question is what happens to the child. Let me check the one piece I haven't researched: Georgia's
                stateless-person procedure for someone who is de facto without travel documents.
            </Paragraph>
            <Action>
                Searched the web for “Georgia statelessness determination procedure de facto unable obtain passport home
                country”
            </Action>
        </Message>
        <Message
            at="2026-04-25T09:54:29.592236Z"
        >
            <Origin>019dc410-b5a8-754e-8b38-775a31ca0174</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You are still having trouble because I care a lot less about the situation where Ana’s residency is denied
                because she can go to other countries. Her getting her residency doesn’t matter. The point is that if she
                gets her residency will they deny one of her children because he doesn’t have a valid passport? He’s in
                trouble. Get it?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T09:55:18.454895Z"
        >
            <Origin>019dc410-b5a8-7733-ac46-5837cbadec28</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Got it. The real question is about the child's TRP, not Ana's. Here's the direct answer:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    By default rule, yes — Georgia would deny the child's TRP renewal without a valid passport.
                </Word> The Law on the Legal Status of Aliens (Article 6) and Order No. 520 (Article 4) treat the travel
                document as a non-substitutable requirement. Ana's valid status doesn't shield him; her renewal goes
                through, his doesn't, and he becomes an overstayer with no exit option. That's the trap.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But Georgia has two formal escape hatches built into the law that exist for precisely this kind of dead end:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Statelessness Determination Procedure (SDP), Articles 22–24.
                </Word> Once granted, this gives the child:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>A renewable 3-year residence permit (Article 15(e))</Line>
                <Line>
                    A Georgian-issued travel document — a "travel passport for stateless persons" issued by the PSDA, which
                    Georgia recognizes as a valid travel document for entry/exit
                </Line>
                <Line>During the procedure (up to 9 months), he gets a temporary ID and cannot be removed</Line>
                <Line>No fee, no lawful-stay requirement to apply, applies even if he's already overstaying</Line>
            </Paragraph>
            <Paragraph>
                The catch: the 1954 Convention definition Georgia adopted is "not considered as a national by any State
                under the operation of its law" — that's <Word>
                    <Emphasis />
                    de jure
                </Word> statelessness. A child who is still legally Russian but can't get a passport is <Word>
                    <Emphasis />
                    de facto
                </Word> stateless, not de jure. Whether Georgia's PSDA stretches the SDP to cover the de facto case — where
                the country of nationality refuses to issue documents because of a parental dispute — is the actual unknown.
                UNHCR's partner NGO in Georgia for SDP appeals is the <Word>
                    <Bold />
                    Innovations and Reforms Center
                </Word> (Tbilisi, +995 32 255 20 01) — they would know if any such case has been adjudicated. ENS (European
                Network on Statelessness) and Rights Georgia maintain Georgia's country profile and would also know.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Special residence permit by ministerial initiative, Article 15(j).
                </Word> A member of the Georgian government can submit a written initiative for a TRP to be issued. This is
                a discretionary humanitarian path — not denied for failure to produce a passport — but it requires a sponsor
                inside the government and is not a right.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cross-jurisdiction analogue worth knowing about: Hoti v. Croatia
                </Word> (ECHR, 2018, application no. 63311/14). Mr. Hoti was born in former Yugoslavia, could not establish
                nationality with any successor state, and Croatia repeatedly denied him regularization. The ECHR found a
                violation of Article 8 because Croatia failed to provide an "effective and accessible procedure" to
                regularize his stay given the impossibility of obtaining documents elsewhere. The principle: when a person
                is genuinely unable to obtain documents from any other state through no fault of their own, the host state
                has a positive obligation to provide a regularization route. Georgia, as an ECHR signatory, is bound by
                this. It's the precedent that would be invoked on appeal if the SDP route were denied.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I haven't been able to confirm and what matters most for your scenario:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Whether Georgia's PSDA applies the SDP to children whose citizenship of origin is intact but documents
                    are inaccessible due to a parental travel ban. This is the make-or-break factual question and only
                    Innovations and Reforms Center, Rights Georgia, or ExpatHub will have direct knowledge.
                </Line>
                <Line>
                    Whether Russia's consulate would actually refuse to issue a passport in this specific case (father's
                    travel ban filed, child abroad) — earlier sources suggested the travel ban legally only blocks border
                    exit, not passport issuance, but consulate practice may differ. This is worth pinning down because if
                    the consulate would issue, the trap doesn't form in the first place.
                </Line>
            </Paragraph>
            <Paragraph>
                The bottom line for your two-year planning horizon: the child has a legal path that is not "deny TRP, become
                an overstayer, get stranded." It's "deny TRP under default rules → apply for SDP → get stateless residence
                permit + Georgian travel document." Whether that path actually opens depends on PSDA's interpretation of
                "stateless" in his specific situation, and that's what's worth getting answered now while you have time, not
                in two years.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T10:10:37.921692Z"
        >
            <Origin>019dc41f-866e-7b80-984b-55f9e24629ea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In Georgia, are there not ways to buy citizenship if you do something like investing in property? Is that
                citizenship for a whole family?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T10:11:19.315591Z"
        >
            <Origin>019dc41f-866e-7fe3-bb12-4cc4367ba102</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “Georgia citizenship by investment exceptional naturalization 2026 family members”
            </Action>
            <Action>
                Searched the web for “"Georgia" "exceptional citizenship" "Article 17.2" investment family children spouse
                included”
            </Action>
            <Paragraph>
                Short answer: <Word>
                    <Bold />
                    Real "buy citizenship" doesn't quite exist in Georgia, and what does exist would not automatically cover the kids — that's the part that matters for your situation.
                </Word>
            </Paragraph>
            <Paragraph>Here's how it actually works:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Property purchase ($100K) gets only a residence permit, not citizenship.
                </Word> A short-term TRP (renewable, 1-year terms initially), valid for the buyer plus spouse and minor
                children. After 10 years of continuous residence on this basis, the family becomes eligible to apply for
                permanent residency, then naturalization with the language/history exam. So the property route doesn't
                shortcut the passport problem at all — the children still need valid travel documents to maintain residency
                along the way.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    $300K investment also gets residency, not citizenship.
                </Word> A 5-year investment residence permit for the principal plus spouse and minor children, which can
                convert to permanent residency after 5 years if turnover thresholds are met ($50K year 1, $100K year 2,
                $120K years 3–5). Still requires 10 years total residence to apply for citizenship, still requires language
                and history.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The actual citizenship-by-investment route is Article 17(2) "exceptional citizenship"
                </Word> — discretionary, granted by Presidential decree. The Special Contribution Citizenship Program
                launched in 2025 has three tiers: €3M business investment with 10 jobs created, €2M refundable fund
                contribution held 5 years, or €300K non-refundable government donation (currently discounted to €250K for
                early applicants). This route waives the residency, language, and history requirements, and explicitly
                permits dual citizenship (the only legal route in Georgia that does, aside from Presidential grant).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On your actual question — does it cover the family?
                </Word> This is where it gets unfavorable for your scenario. Article 17 of the Organic Law on Georgian
                Citizenship grants citizenship "by way of exception to a citizen of another country" — it's framed as an
                individual grant, not a family grant. The various law-firm marketing pages talk about "family inclusion" but
                don't cite a legal mechanism, and the actual statute doesn't have a dependent-inclusion clause the way
                investor residency programs do.
            </Paragraph>
            <Paragraph>
                In practice, what I've seen described is that a successful Article 17 applicant's <Word>
                    <Bold />
                    spouse and minor children would still need to apply separately
                </Word> — typically through naturalization with the spouse-of-citizen 5-year track, or through the
                children-of-citizen permanent residency route. Some advisors claim dependents can be added to the Article 17
                application, but I haven't found this in the statute itself, and it would be at Presidential discretion case
                by case. <Word>
                    <Bold />
                    The structural problem: an Article 17 grant to Ana doesn't automatically make her son a Georgian citizen, and her son still needs valid documents (presumably his Russian passport) to apply for derivative status — which puts you back at the original trap.
                </Word>
            </Paragraph>
            <Paragraph>
                There is one nuance that could matter: under Article 17 of the older citizenship law (the "child upon change
                of citizenship of either parent" provision), if a parent acquires Georgian citizenship and the other parent
                remains a foreign citizen, the child <Word>
                    <Emphasis />
                    may
                </Word> become Georgian "at the parents' joint request." Joint request is the operative phrase — meaning the
                Russian father's consent could again be the bottleneck. There may be a workaround if Ana has sole custody
                under Russian law, but that's a fact-specific legal question.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Bottom line for your two-year planning horizon:
                </Word>
            </Paragraph>
            <Paragraph>
                The €250K Special Contribution route would give Ana a Georgian passport in 3–6 months without residency
                requirements, but it doesn't solve the children's problem on its own. The children still need either (a)
                their own valid Russian passports for derivative TRP, or (b) Georgian citizenship via parental request —
                which under the older statute appears to require both parents' consent, or (c) the SDP/statelessness route I
                described before.
            </Paragraph>
            <Paragraph>
                If the budget is there, the most defensible play is probably: Ana gets exceptional citizenship →
                simultaneously pursue Georgian citizenship for the children via Article 17 or the parental-acquisition
                route, with a Georgian family-law attorney addressing the joint-consent problem in advance. ExpatHub is fine
                for residency questions but this is more specialized — you'd want a citizenship lawyer who has handled
                Article 17(2) applications with custody complications. Legal.ge and the immigration-georgia.com firm both
                advertise this specialty.
            </Paragraph>
            <Paragraph>
                The actual statutory text on family inclusion under Article 17(2) is the thing I haven't been able to
                definitively pin down, so verify it before assuming the children come along automatically.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-25T10:12:12.873967Z"
        >
            <Origin>019dc420-f1f3-73c3-a2f5-15ebdd6fb1e7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So can we buy this child his citizenship for about €250 if we apply early?</Paragraph>
        </Message>
        <Message
            at="2026-04-25T10:13:38.830447Z"
        >
            <Origin>019dc420-f1f3-77b7-8c6c-68cad75871fd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check this specifically — whether the €250K covers family or just the principal applicant, since this
                is the make-or-break detail.
            </Paragraph>
            <Action>
                Searched the web for “Georgia "Special Contribution" citizenship €250,000 €300,000 family included spouse
                children dependents”
            </Action>
            <Paragraph>
                Probably not, and here are the four reasons stacked against it, in descending order of severity:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. The program may not be fully legitimate.
                </Word> Investment Migration Insider — the trade publication of record for citizenship-by-investment —
                flagged in February 2025 that they "received conflicting reports about the program's legality, as some
                sources question its authenticity." The program operates through a private operator (Georgia Growth Fund
                LLC) under an MoU with the Ministry of Economy, and uses Article 17(2) of the existing citizenship law as
                its statutory hook rather than dedicated legislation. It's not been tested at scale. Paying €250K into a
                program that gets unwound or rejected by a future president is a real risk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Family inclusion is not clearly authorized for the 2025 program.
                </Word> Article 17(2) of the Organic Law grants citizenship "to a citizen of another country who has made a
                contribution of exceptional merit." It speaks of <Word>
                    <Emphasis />
                    the
                </Word> applicant, not their family. The official program materials (residencepermits.ge, the Beijing
                presentation) describe procedures for individual applicants — "passport, birth certificate, background
                check, investment plan" — without a dependent-inclusion framework. A 2018 one-off program tied to the Chess
                Olympiad explicitly covered family up to age 26, but that was a different initiative. Some law firms imply
                family coverage for the current program, but I cannot find statutory authority for it. This would need to be
                confirmed in writing with the Public Service Development Agency before transferring funds.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Even if the program covers family, you still need the child's documents to apply.
                </Word> The application requires "passport, birth certificate (apostilled), background check." A child whose
                Russian passport has expired and who can't get a new one cannot complete the application. The €250K doesn't
                bypass that requirement — it bypasses residency, language, and history, not identity documents. So if the
                passport problem materializes before you apply, the program door closes for the child specifically.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. The child is the harder applicant, not the easier one.
                </Word> The framing of "exceptional contribution" doesn't fit a minor — children don't make economic
                contributions. Realistically, Ana would be the named applicant (since she'd be the one whose investment
                justifies the grant), and the question becomes whether the children are added as derivatives. That puts you
                back in the territory of Article 22 of the Citizenship Law (parental change of citizenship) which references
                the parents' <Word>
                    <Emphasis />
                    joint
                </Word> request — meaning the Russian father's consent could re-enter the picture.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest framing:
                </Word> if you're going to spend €250K, the actually-defensible play is to apply <Word>
                    <Emphasis />
                    now
                </Word> — well before the passport expires — and have a Georgian citizenship lawyer structure the
                application with explicit dependent inclusion negotiated up front, in writing, before funds transfer. Make
                Ana the principal, name the children as dependents, get the Citizenship Commission's pre-clearance opinion
                on whether dependents are accepted under this program, and use a legal structure where the donation is
                contingent on approval of the entire family unit (the 2018 Chess Olympiad program reportedly did this —
                funds held in escrow until decision).
            </Paragraph>
            <Paragraph>
                You'd want a lawyer who has actually closed an Article 17(2) case under the 2025 program — not just one who
                advertises it. That's probably 2–3 firms in Tbilisi at this stage. ExpatHub doesn't specialize in this;
                you'd want someone like Legal.ge, BLC Law Office, or Mgaloblishvili Kipiani Dzidziguri (MKD) — though I
                haven't independently verified which of those have actually closed cases. That's the verification step worth
                doing before treating this as a real option.
            </Paragraph>
            <Paragraph>
                Even with all of that, this is a "maybe" not a "yes." If the structural goal is making sure the child has a
                valid travel document at age 18 regardless of what happens with Russia, the SDP route I mentioned earlier is
                more defensible legally even if it produces a less prestigious passport — because it's grounded in a UN
                convention Georgia has ratified, not in a discretionary presidential program of contested legitimacy.
            </Paragraph>
        </Message>
    </Chapter>
);
