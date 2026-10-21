import { Bold, Chapter, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-24T10:16:40.158638Z"
        >
            <Origin>019bef81-7fad-765d-8371-0fa960f7b879</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                A young boy has high eosinofil, low hemoglobin, a little blood in loose stool, smells metallic. The boy is
                three minths old on breast feeding. I need to know likely causes. Is there anything obvious? What are the
                most obvious one and what are alternatives with probability for each and justify your answer? Use medical
                research please
            </Paragraph>
        </Message>
        <Message
            at="2026-01-24T10:17:49.946788Z"
        >
            <Origin>019bef81-7fad-765d-8371-0faaad78c51e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a concerning presentation in a young infant. Let me search for current medical research on this
                specific symptom constellation.
            </Paragraph>
            <Action>Searched the web for “infant eosinophilia bloody stool anemia breastfed diagnosis”</Action>
            <Action>Searched the web for “infant parasitic infection eosinophilia anemia bloody stool hookworm”</Action>
            <Action>Searched the web for “metallic smell stool infant blood iron deficiency”</Action>
            <Paragraph>
                Based on the medical research, this is a significant clinical presentation. The combination of <Word>
                    <Bold />
                    high eosinophils + low hemoglobin + bloody loose stool + metallic smell
                </Word> in a 3-month-old breastfed infant creates a fairly specific diagnostic picture. Let me break down
                the most likely causes with probability estimates.
            </Paragraph>
            <Heading>Most Likely Diagnosis</Heading>
            <Heading>1. Cow's Milk Protein Allergy / Food Protein-Induced Allergic Proctocolitis (FPIAP)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimated probability: 55-65%
                </Word>
            </Paragraph>
            <Paragraph>This is the most likely diagnosis by a significant margin.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Justification:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    A study on 300 neonates with bloody stools found the most common underlying causes were: cow's milk
                    protein allergy (CMPA) at 53.3%
                </Line>
                <Line>
                    The median age to symptom onset ranges from 26 to 60 days old but has been reported to occur up to 6
                    months of age. It most commonly involves blood-streaked and mucus-containing stools in generally healthy
                    infants.
                </Line>
                <Line>
                    About 60% of cases occur in breastfed infants where the immune response results from maternal ingestion
                    of the food allergen, usually cow's milk, which is passed in immunologically recognizable form into the
                    breast milk.
                </Line>
                <Line>
                    Laboratory analysis may show thrombocytosis, hypoalbuminemia and anemia. Stool may be positive for
                    eosinophils and occult (or gross) blood.
                </Line>
                <Line>
                    Microscopic examination of stool revealed eosinophil aggregation and Charcot–Leyden crystals, which are
                    markers of eosinophilic inflammation in non-IgE-mediated food allergies.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why this fits:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Eosinophilia is characteristic</Line>
                <Line>Bloody loose stool is the hallmark presentation</Line>
                <Line>Age (3 months) is within the typical window</Line>
                <Line>Exclusive breastfeeding doesn't protect against it—maternal dietary proteins pass into milk</Line>
                <Line>The metallic smell is from blood (iron) in the stool</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Important caveat:
                </Word> Infants with allergic proctocolitis are generally well-appearing other than the presence of blood
                within the stool. Infants with more concerning symptoms, such as anemia or poor weight gain have health
                problems that are not explained by AP and may have a health problem that is more serious. The presence of
                <Word>
                    <Bold />
                    anemia
                </Word> suggests this may be a more severe case or an additional/alternative diagnosis.
            </Paragraph>
            <Heading>Alternative Diagnoses</Heading>
            <Heading>2. Food Protein-Induced Enterocolitis Syndrome (FPIES) — More Severe Variant</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimated probability: 15-20%
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Justification:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Bloody stools and vomiting that occur in the neonatal period are classified under chronic food
                    protein–induced enterocolitis syndrome, which may lead to worsened nutrient absorption and failure to
                    thrive.
                </Line>
                <Line>
                    A five-week-old infant presented with worsening bloody diarrhea... Laboratory investigations revealed a
                    hemoglobin of 90 g/L. The clinical presentation and response to removal of cow's milk protein were
                    highly suggestive of cow's milk protein allergy.
                </Line>
                <Line>
                    FPIES represents a more severe immune response than simple proctocolitis and more readily explains the
                    anemia
                </Line>
            </Paragraph>
            <Heading>3. Parasitic Infection (Hookworm or other helminths)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimated probability: 5-15%
                </Word> (highly dependent on epidemiological risk factors)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Justification:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Hookworms produce blood loss that can cause a microcytic hypochromic anemia. Eosinophilia has been noted
                    in 30 to 60 percent of infected patients.
                </Line>
                <Line>
                    An Italian 2-month-old infant presented with vomit and weight loss. Her blood exams showed anemia and
                    eosinophilia and stool analysis resulted positive for hookworms' eggs. Since the mother travelled to
                    Vietnam and Thailand during pregnancy, a transplacental transmission was assumed.
                </Line>
                <Line>
                    An unexplained persistent eosinophilia may be a major clue for the presence of a parasitic infection and
                    could justify specific investigations on stools.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Key question:
                </Word> Has the mother (Ana) or anyone in the household traveled to endemic areas (tropical/subtropical
                regions)? If yes, this probability increases substantially. Hookworm can rarely be transmitted through
                breast milk.
            </Paragraph>
            <Heading>4. Infectious Colitis (Bacterial/Viral)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimated probability: 5-10%
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Justification:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Viral enteritis accounted for 9.7% of bloody stool cases in neonates</Line>
                <Line>
                    In a well infant younger than 6 months of age, infective colitis and allergic proctocolitis are the most
                    frequent causes of acutely bloody stools.
                </Line>
                <Line>However, viral enteritis is less commonly associated with eosinophilia, making this less likely</Line>
            </Paragraph>
            <Heading>5. Necrotizing Enterocolitis (NEC)</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Estimated probability: 2-5%
                </Word> (if term, healthy infant)
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Justification:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    NEC &gt; stage II accounted for 8.3% of bloody stool cases, but was more common in preterm infants
                </Line>
                <Line>
                    In a same age ill-appearing infant, late-onset necrotizing enterocolitis must be suspected, especially
                    with prematurity
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Lower probability because:
                </Word> NEC typically presents with a more systemically ill infant, is more common in preterm babies, and
                doesn't typically feature eosinophilia.
            </Paragraph>
            <Heading>The Metallic Smell</Heading>
            <Paragraph>The metallic odor is clinically significant:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Bleeding in your stomach or intestines can cause a metallic smell as blood is rich in iron. If you
                    develop stool with a metallic smell, particularly if associated with other symptoms like abdominal pain
                    or fatigue, it is a good idea to talk with a doctor.
                </Line>
                <Line>
                    The source of poop's metallic smell is likely iron. Iron is naturally found in our blood, therefore if
                    you notice blood in your stool, it likely means that it's the scent of the iron your nose is picking up
                    on.
                </Line>
            </Paragraph>
            <Paragraph>
                This confirms ongoing GI blood loss, consistent with both the visible blood and the anemia.
            </Paragraph>
            <Heading>Summary Table</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Diagnosis</Word>
                    <Word>Probability</Word>
                    <Word>Key Supporting Features</Word>
                </Line>
                <Line>
                    <Word>CMPA/FPIAP</Word>
                    <Word>55-65%</Word>
                    <Word>Eosinophilia + bloody stool + breastfed + age</Word>
                </Line>
                <Line>
                    <Word>FPIES (severe)</Word>
                    <Word>15-20%</Word>
                    <Word>Anemia + more severe symptoms</Word>
                </Line>
                <Line>
                    <Word>Parasitic (hookworm)</Word>
                    <Word>5-15%</Word>
                    <Word>Triad of eosinophilia + anemia + bloody stool (needs exposure history)</Word>
                </Line>
                <Line>
                    <Word>Infectious colitis</Word>
                    <Word>5-10%</Word>
                    <Word>Bloody diarrhea (but eosinophilia less typical)</Word>
                </Line>
                <Line>
                    <Word>NEC</Word>
                    <Word>2-5%</Word>
                    <Word>More common in preterm/ill-appearing infants</Word>
                </Line>
            </Paragraph>
            <Heading>Clinical Recommendation</Heading>
            <Paragraph>
                This child needs <Word>
                    <Bold />
                    urgent pediatric gastroenterology evaluation
                </Word>. The presence of anemia distinguishes this from simple, benign allergic proctocolitis and warrants
                workup including:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Stool studies
                    </Word> — ova and parasites, bacterial culture, fecal calprotectin
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Allergy workup
                    </Word> — though IgE is often negative in FPIAP
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Maternal dietary elimination trial
                    </Word> — strict cow's milk (and possibly soy) elimination
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consider colonoscopy
                    </Word> — Colonoscopy is indicated for patients with clinical or laboratory evidence of chronic
                    inflammation including anemia or hypoalbuminemia
                </Line>
            </Paragraph>
            <Paragraph>
                The anemia needs to be addressed regardless of cause—iron supplementation may be needed once the underlying
                etiology is controlled.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-24T10:22:17.432611Z"
        >
            <Origin>019bef86-a52a-763b-8cf7-0fb52dd06db5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good job. This was an old problem that happened with Ana’s infant son years ago, but we just wanted to see
                if we could’ve figured it out with you . So mothers should be careful to breastfeed while breastfeeding,
                even if the breast-feeding is indirect in a bottle or carton and pasteurized
            </Paragraph>
        </Message>
        <Message
            at="2026-01-24T10:22:32.513600Z"
        >
            <Origin>019bef86-a52a-763b-8cf7-0fb61c9cbc0a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Glad the analysis was useful for this retrospective diagnostic exercise! And yes, that's exactly the
                critical insight that trips up many parents and even some clinicians.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The indirect exposure pathway:
                </Word>
            </Paragraph>
            <Paragraph>
                The cow's milk proteins (primarily casein and beta-lactoglobulin) that the mother consumes — whether from
                fresh milk, pasteurized milk in a carton, cheese, yogurt, butter, or even hidden dairy in processed foods —
                survive her digestion and pass into breast milk in an immunologically intact form. Pasteurization kills
                bacteria but does nothing to denature these allergenic proteins.
            </Paragraph>
            <Paragraph>
                So when people say "exclusively breastfed," they sometimes assume the baby couldn't possibly have a cow's
                milk allergy. But the baby is being exposed to cow's milk proteins indirectly through the mother's diet the
                entire time.
            </Paragraph>
            <Paragraph>
                This is why the treatment for FPIAP in breastfed infants is <Word>
                    <Bold />
                    maternal dietary elimination
                </Word> — the mother must strictly avoid all dairy (and often soy, since up to 50% cross-react). It's not
                about switching to formula; continuing breastfeeding is actually preferred if the mother can maintain the
                elimination diet.
            </Paragraph>
            <Paragraph>
                Did Ana's son improve once she eliminated dairy? And was cow's milk protein allergy ultimately confirmed as
                the diagnosis? It would be interesting to know if our probability estimates matched reality.
            </Paragraph>
        </Message>
    </Chapter>
);
