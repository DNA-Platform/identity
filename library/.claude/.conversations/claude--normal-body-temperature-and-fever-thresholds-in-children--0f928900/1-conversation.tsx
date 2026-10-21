import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 February 2026](2026-02-26)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-26T13:21:53.312567Z"
        >
            <Origin>019c9a1c-e9c9-7e25-ad33-5e01c1665964</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Kids lie. When they say they are sick, what is normal temp in F/C and what constitutes actual evidence for a
                temperature in F/C
            </Paragraph>
        </Message>
        <Message
            at="2026-02-26T13:22:02.175568Z"
        >
            <Origin>019c9a1c-e9c9-7d78-b867-5551bfd444b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Normal body temperature is about <Word>
                    <Bold />
                    98.6°F / 37°C
                </Word>, though it naturally ranges from roughly 97–99°F (36.1–37.2°C) depending on time of day, activity,
                and the individual.
            </Paragraph>
            <Paragraph>A genuine fever — your actual evidence — is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        100.4°F / 38°C
                    </Word> or higher (this is the standard medical threshold)
                </Line>
                <Line>Measured with a thermometer, not by hand-on-forehead</Line>
            </Paragraph>
            <Paragraph>
                Anything between 99–100.3°F is a low-grade fever zone — possibly real, possibly just post-running-around or
                post-blanket-burrito. If they're claiming to be sick but clocking 98.6, they're busted.
            </Paragraph>
            <Paragraph>
                Pro tip: ear or forehead thermometers are fast and hard to fake. The old under-the-tongue trick is easily
                gamed (hot drink, breathing with mouth closed, holding it near a lamp — kids are resourceful).
            </Paragraph>
        </Message>
        <Message
            at="2026-02-26T13:22:31.278670Z"
        >
            <Origin>019c9a1d-7d97-75ab-a549-bdfa97e991e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate that to Russian</Paragraph>
        </Message>
        <Message
            at="2026-02-26T13:22:39.809202Z"
        >
            <Origin>019c9a1d-7d98-7ad6-870e-576695148ff3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Нормальная температура тела — примерно <Word>
                    <Bold />
                    36,6°C / 98,6°F
                </Word>, хотя она естественно колеблется от 36,1 до 37,2°C (97–99°F) в зависимости от времени суток,
                активности и индивидуальных особенностей.
            </Paragraph>
            <Paragraph>Настоящая лихорадка — то есть реальное доказательство — это:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        38°C / 100,4°F
                    </Word> и выше (это стандартный медицинский порог)
                </Line>
                <Line>Измеренная термометром, а не рукой ко лбу</Line>
            </Paragraph>
            <Paragraph>
                Всё, что между 37–37,9°C — зона субфебрильной температуры: может быть реальной, а может быть просто после
                беготни или после закутывания в одеяло. Если ребёнок утверждает, что болеет, а термометр показывает 36,6 —
                попался.
            </Paragraph>
            <Paragraph>
                Совет: ушные или лобные термометры работают быстро, и их сложно обмануть. Старый способ «под язык» легко
                подделать (горячий напиток, дыхание с закрытым ртом, подержать градусник у лампы — дети изобретательны).
            </Paragraph>
        </Message>
    </Chapter>
);
