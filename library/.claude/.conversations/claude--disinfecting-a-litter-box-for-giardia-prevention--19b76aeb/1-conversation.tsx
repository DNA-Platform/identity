import { Bold, Chapter, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-16T11:30:15.140651Z"
        >
            <Origin>019bc691-fdb9-7528-8836-f6aa87d791ad</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Lets say I want to clean a litter box to prevent goardia re-infection. What is the recommendation for this?
                If I remove all the letter, what else do I need to do to make sure it’s safe?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-16T11:30:35.774556Z"
        >
            <Origin>019bc691-fdb9-7528-8836-f6ab9d2a0ada</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll search for the current veterinary recommendations on this to give you the most accurate guidance.
            </Paragraph>
            <Action>Searched the web for “giardia litter box cleaning disinfection prevent reinfection”</Action>
            <Paragraph>
                After removing all the litter, here's what you need to do to properly disinfect the litter box and prevent
                giardia reinfection:
            </Paragraph>
            <Heading>Cleaning steps:</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Scrub with hot soapy water
                    </Word> - Empty the box completely and scrub all surfaces thoroughly with hot water and dish soap
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Disinfect with bleach solution
                    </Word> - Soak the clean box in a dilute bleach solution:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Mix 3/4 cup to 2 cups of bleach per gallon of water</Line>
                    <Line>
                        Let the solution stay in contact with all surfaces for the recommended time (check the bleach
                        product label)
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Rinse thoroughly
                    </Word> - Rinse with clean water until no bleach residue remains
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Let it dry completely
                    </Word> - Giardia cysts are susceptible to drying, so allow the box to air dry fully before adding fresh
                    litter
                </Line>
            </Paragraph>
            <Heading>Additional important steps:</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Scoop twice daily
                    </Word> during treatment (not just once)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Do the deep clean on the last day of treatment
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Clean the scoop
                    </Word> the same way (soak in bleach solution)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consider steam cleaning
                    </Word> if you have a steam cleaner - the high heat is very effective
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Alternative disinfectants:
                </Word> If you can't use bleach on your particular litter box material, quaternary ammonium compounds (like
                some Lysol products) also work against giardia cysts.
            </Paragraph>
            <Paragraph>
                The key is that soap alone isn't enough - you need the disinfectant step to kill the hardy giardia cysts
                that can survive for months in damp environments.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-16T11:31:03.623671Z"
        >
            <Origin>019bc692-bb1d-711b-acdc-3949f2d5f5a1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It sounds safer just to buy new ones</Paragraph>
        </Message>
        <Message
            at="2026-01-16T11:31:13.544790Z"
        >
            <Origin>019bc692-bb1d-711b-acdc-394af5218a5a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That's actually a smart call. Litter boxes are relatively inexpensive, and replacing them eliminates any
                risk of missing cysts in scratches or porous areas that are hard to fully disinfect. Many vets actually
                recommend this approach, especially if you have multiple cats or the boxes are older and scratched up.
            </Paragraph>
            <Paragraph>
                Just make sure to thoroughly clean and disinfect the area where the old boxes were sitting before putting
                down the new ones, and properly dispose of the old boxes (bag them up before throwing away). You'll still
                want to bathe your cat to remove any cysts from their fur and maintain that twice-daily scooping routine
                during treatment to prevent reinfection.
            </Paragraph>
        </Message>
    </Chapter>
);
