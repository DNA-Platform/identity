import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Title>[[ 26 June 2026 ]]</Title>
        <Message
            at="2026-06-26T11:37:52.014594Z"
        >
            <Origin>019f03b8-d1c4-7603-8dac-8e56d42e1c6b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Лот, вот мы вчера с Димой ходили в магазин и купили на сто тридцать Ларе. Скажи, пожалуйста, ты можешь еще
                раз пересмотреть фотографии? Я хочу узнать, сколько стоило мороженое с шоколадом. Ice cream with ванила,
                арома и liquid chocolate sauce. Попробуй найти это. Фирма... Сейчас я ф
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T11:38:36.156612Z"
        >
            <Origin>019f03b8-d1c4-7603-8dac-8e57d00a3fcc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Конечно, Ана 😊 Смотрю вчерашний чек Willmart ещё раз, ищу именно мороженое с шоколадом (ванильное с
                шоколадным соусом).
            </Paragraph>
            <Paragraph>Нашла подходящую позицию — на втором и третьем фото, она читается так:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    ნაყინი 1000 მლ თხევადი შოკოლადით
                </Word> = <Word>
                    <Bold />
                    «Мороженое 1000мл с жидким шоколадом»
                </Word>
            </Paragraph>
            <Paragraph>
                Цена: <Word>
                    <Bold />
                    8.90 лари
                </Word>, количество 1.
            </Paragraph>
            <Paragraph>
                Это совпадает с твоим описанием — мороженое (ванильное) с жидким шоколадным соусом, большая упаковка 1 литр.
                В чеке оно у меня было записано как «Сок 1000мл с шоколадом (?)» — я ошиблась, прочитала ნაყინი (наини =
                мороженое) как напиток. Это <Word>
                    <Bold />
                    мороженое
                </Word>, не сок. Сейчас поправлю и группу сменю на снеки/сладкое.
            </Paragraph>
            <Paragraph>
                Цену фирмы на фото не видно — там только название «мороженое 1000мл с жидким шоколадом» и вес. Бренд на чеке
                не пропечатан. Если на самой упаковке дома есть название фирмы — скажешь, допишу. Но цена точная: <Word>
                    <Bold />
                    8.90 лари за литр.
                </Word>
            </Paragraph>
            <Paragraph>
                Исправлю в трекере: было «Сок... Напитки», станет «Мороженое 1л с шоколадом... Снеки/сладкое».
            </Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook from openpyxl.styles import
                Font wb=load_workbook('budget2.xlsx') reg=Font(name='Arial') ws3=wb&#91;'Чеки'&#93; for r in range(68,90):
                v=ws3.cell(row=r,column=3).value if v and 'Сок 1000' in str(v): ws3.cell(row=r,column=3,value='Мороженое 1л
                с жидким шоколадом').font=reg ws3.cell(row=r,column=5,value='Снеки/сладкое').font=reg print('Исправлено
                стр',r,'-&gt; мороженое 1л, снеки') wb.save('budget2.xlsx') " &amp;&amp; python
                /mnt/skills/public/xlsx/scripts/recalc.py budget2.xlsx 40 2&gt;&amp;1 | tail -2 &amp;&amp; cp budget2.xlsx
                "/mnt/user-data/outputs/Бюджет_Батуми_трекер.xlsx" &amp;&amp; echo copied
            </Action>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook
                wb=load_workbook('budget2.xlsx',data_only=True) ws3=wb&#91;'Чеки'&#93; for r in range(4,14):
                g=ws3.cell(row=r,column=7).value; s=ws3.cell(row=r,column=8).value or 0 if g in
                ('Снеки/сладкое','Напитки/вода'): print(f' &#123;g:&lt;16&#125;&#123;s:&gt;7.2f&#125;') "
            </Action>
            <Paragraph>Готово, Ана 😊 Вот точный ответ на твой вопрос:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Мороженое с шоколадом (ванильное, 1 литр, с жидким шоколадным соусом) стоило 8.90 лари.
                </Word>
            </Paragraph>
            <Paragraph>
                Полное название в чеке: ნაყინი 1000 მლ თხევადი შოკოლადით — «мороженое 1000мл с жидким шоколадом». Бренд на
                чеке не пропечатан, так что если хочешь запомнить фирму — глянь на упаковке дома, допишу.
            </Paragraph>
            <Paragraph>
                Заодно исправила свою ошибку: я сначала записала это как «сок» (перепутала ნაყინი/мороженое с напитком),
                теперь стоит правильно — мороженое, группа снеки/сладкое. Спасибо, что попросила перепроверить 😊
            </Paragraph>
            <Paragraph>
                После исправления: <Word>
                    <Bold />
                    снеки/сладкое за неделю — 72.89 лари.
                </Word> Это литровое мороженое (8.90) плюс всё остальное сладкое за неделю. Снеки теперь уверенно вторая
                группа после овощей.
            </Paragraph>
            <Paragraph>
                Кстати, насчёт «фирма... сейчас я ф» — похоже, сообщение оборвалось 😊 Если хотела дописать название фирмы
                или спросить ещё что-то про это мороженое — продолжай, я тут.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-26T11:38:39.145508Z"
        >
            <Origin>019f03b9-89c4-7683-8148-473c79a85efb</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Оно?</Paragraph>
            <Attachment>
                Uploaded “d5c1cb9f-988a-450d-86a9-f7635ceb26c2.webp”, whose content the export does not carry
            </Attachment>
        </Message>
        <Message
            at="2026-06-26T11:39:03.957991Z"
        >
            <Origin>019f03b9-89c4-7683-8148-473da8e64f88</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Да, оно! 😊 Это именно то мороженое.</Paragraph>
            <Paragraph>На упаковке всё совпадает:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Бренд: იოლი (Иоли)
                    </Word> — известная грузинская марка мороженого (синий логотип с красным солнцем и чайкой)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        საოჯახო (саоджахо)
                    </Word> = «семейное» (большая семейная упаковка)
                </Line>
                <Line>
                    ნაყინი ვანილის არომატით და თხევადი შოკოლადის სოუსით = <Word>
                        <Bold />
                        «мороженое с ароматом ванили и жидким шоколадным соусом»
                    </Word>
                </Line>
                <Line>
                    Внизу по-английски: <Word>
                        <Bold />
                        ICE CREAM WITH VANILLA AROMA &amp; LIQUID CHOCOLATE SAUCE
                    </Word> — ровно как ты описала
                </Line>
            </Paragraph>
            <Paragraph>
                Итак, окончательно: <Word>
                    <Bold />
                    Мороженое Иоли «Саоджахо» (семейное), ванильное с шоколадным соусом, 1 литр — 8.90 лари.
                </Word>
            </Paragraph>
            <Paragraph>Допишу бренд в трекер, чтобы запись была полной.</Paragraph>
            <Action>
                Ran cd /home/claude &amp;&amp; python3 -c " from openpyxl import load_workbook from openpyxl.styles import
                Font wb=load_workbook('budget2.xlsx') reg=Font(name='Arial') ws3=wb&#91;'Чеки'&#93; for r in range(68,90):
                v=ws3.cell(row=r,column=3).value if v and 'Мороженое 1л с жидким шоколадом' in str(v):
                ws3.cell(row=r,column=3,value='Мороженое Иоли Саоджахо ванильное+шоколад 1л').font=reg print('Дополнено
                стр',r) wb.save('budget2.xlsx') " &amp;&amp; python /mnt/skills/public/xlsx/scripts/recalc.py budget2.xlsx
                40 2&gt;&amp;1 | tail -1 &amp;&amp; cp budget2.xlsx "/mnt/user-data/outputs/Бюджет_Батуми_трекер.xlsx"
                &amp;&amp; echo ok
            </Action>
            <Paragraph>
                Готово 😊 Запись теперь полная: <Word>
                    <Bold />
                    «Мороженое Иоли Саоджахо ванильное+шоколад 1л — 8.90 лари»
                </Word>.
            </Paragraph>
            <Paragraph>
                Иоли (იოლი) — хороший местный бренд, и литровая семейная упаковка за 8.90 это нормальная цена для такого
                мороженого. На несколько раз детям хватит.
            </Paragraph>
            <Paragraph>
                И ещё одно грузинское слово в копилку: <Word>
                    <Bold />
                    საოჯახო (саоджахо) = семейный/семейная упаковка
                </Word> — увидишь на больших упаковках продуктов, значит «для семьи, большой объём». Часто как раз выгоднее
                по цене за грамм 😊
            </Paragraph>
            <Paragraph>Что-нибудь ещё?</Paragraph>
        </Message>
    </Chapter>
);
