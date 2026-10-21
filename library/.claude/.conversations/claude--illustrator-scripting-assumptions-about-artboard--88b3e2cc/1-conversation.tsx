import { Append, Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-12-04T20:36:02.850450Z"
        >
            <Origin>81d8c3e6-a8a5-44af-97a2-a4dfc88351ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I am doing illustratpr scripting with typescript. Does this test make assumptions about the artboard?
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-12-04T20:36:02.850450Z"
        >
            <Origin>86a0c1a4-2840-434a-91fe-ee21c95300fd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The provided code does make some assumptions about the artboard:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Artboard Dimensions
                    </Word>: The code retrieves the artboard's dimensions and uses them to calculate the expected center
                    points for the rotations. It assumes that the artboard has a defined size.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Artboard Origin
                    </Word>: The code assumes that the artboard's origin (0, 0) is at the top-left corner. This is a common
                    convention, but it's worth verifying if your specific use case aligns with this assumption.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Pivot Points
                    </Word>: The code uses three different pivot points for the rotations:
                </Line>
                <Paragraph>
                    <List />
                    <Line>Center of the artboard</Line>
                    <Line>Top-left corner of the artboard</Line>
                    <Line>Bottom-right corner of the artboard</Line>
                    <Line>
                        Custom pivot point (0.5, 0.5 relative to the artboard) These pivot points are defined relative to
                        the artboard, so the test assumes that the artboard's origin and dimensions are known.
                    </Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Item Position
                    </Word>: The code creates a test item and assumes that its initial position is at (100, 100) relative to
                    the artboard.
                </Line>
            </Paragraph>
            <Paragraph>
                Overall, the test seems to be validating the <Word>
                    <Verbatim />
                    rotateItemAround
                </Word> function by checking if the item's center point matches the expected position after rotation around
                various pivot points. This assumes that the artboard, item position, and pivot points are known and defined.
            </Paragraph>
            <Paragraph>
                If your specific use case involves different artboard dimensions, origin, or item positions, you may need to
                adjust the test accordingly. It's important to ensure that your test cases match the real-world scenarios
                you're dealing with in your illustrator scripting.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:36:30.862566Z"
        >
            <Origin>9fdd6ac7-c3cf-42ff-ace2-e0bf95418349</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you generalize it to not make assumptions</Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:36:30.862566Z"
        >
            <Origin>2482ae5d-1d24-4aa3-b364-1dd55d5babf0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Sure, I can generalize the code to avoid making assumptions about the artboard and item positions. Here's an
                updated version that should work for more diverse scenarios:
            </Paragraph>
            <Paragraph>
                &lt;antArtifact identifier="generalized-rotate-item" type="application/vnd.ant.code" language="typescript"
                title="Generalized Rotate Item Around Function"&gt; import &#123; Layer, TransformNode &#125; from 'types';
                // Import relevant types from your codebase
            </Paragraph>
            <Paragraph>
                function rotateItemAround( item: TransformNode, angle: number, pivotPoint: &#123; x: number; y: number
                &#125; ): void &#123; // Get the item's initial bounds const initialBounds = item.item().geometricBounds;
                const initialCenterX = (initialBounds&#91;0&#93; + initialBounds&#91;2&#93;) / 2; const initialCenterY =
                (initialBounds&#91;1&#93; + initialBounds&#91;3&#93;) / 2;
            </Paragraph>
            <Paragraph>
                // Rotate the item around the provided pivot point item.transforms.rotateItemAround(angle, pivotPoint);
            </Paragraph>
            <Paragraph>
                // Get the item's bounds after rotation const rotatedBounds = item.item().geometricBounds; const
                rotatedCenterX = (rotatedBounds&#91;0&#93; + rotatedBounds&#91;2&#93;) / 2; const rotatedCenterY =
                (rotatedBounds&#91;1&#93; + rotatedBounds&#91;3&#93;) / 2;
            </Paragraph>
            <Paragraph>
                // Calculate the expected center position after rotation const radiusX = rotatedCenterX - pivotPoint.x;
                const radiusY = rotatedCenterY - pivotPoint.y; const radians = (angle <Word>
                    <Emphasis />
                     Math.PI) / 180; const expectedCenterX = pivotPoint.x + radiusX 
                </Word> Math.cos(radians) - radiusY <Word>
                    <Emphasis />
                     Math.sin(radians); const expectedCenterY = pivotPoint.y + radiusX 
                </Word> Math.sin(radians) + radiusY * Math.cos(radians);
            </Paragraph>
            <Paragraph>
                // Check if the item's center matches the expected position if ( Math.round(rotatedCenterX) !==
                Math.round(expectedCenterX) || Math.round(rotatedCenterY) !== Math.round(expectedCenterY) ) &#123; throw new
                Error( <Word>
                    <Verbatim />
                    Rotation around ($&#123;pivotPoint.x&#125;, $&#123;pivotPoint.y&#125;) failed: Expected center ($&#123;expectedCenterX&#125;, $&#123;expectedCenterY&#125;), got ($&#123;rotatedCenterX&#125;, $&#123;rotatedCenterY&#125;)
                </Word> ); &#125; &#125; &lt;/antArtifact&gt;
            </Paragraph>
            <Paragraph>Here's how the generalized function works:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It takes three parameters:</Line>
                <Paragraph>
                    <List />
                    <Line>
                        <Word>
                            <Verbatim />
                            item
                        </Word>: The item to be rotated
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            angle
                        </Word>: The angle of rotation in degrees
                    </Line>
                    <Line>
                        <Word>
                            <Verbatim />
                            pivotPoint
                        </Word>: The pivot point around which the item should rotate, specified as an object with <Word>
                            <Verbatim />
                            x
                        </Word> and <Word>
                            <Verbatim />
                            y
                        </Word> properties
                    </Line>
                </Paragraph>
                <Line>It first calculates the initial center point of the item before rotation.</Line>
                <Line>
                    It then rotates the item around the provided pivot point using the <Word>
                        <Verbatim />
                        rotateItemAround
                    </Word> method.
                </Line>
                <Line>After rotation, it calculates the new center point of the item.</Line>
                <Line>
                    It computes the expected center point after rotation based on the initial center, pivot point, and
                    rotation angle.
                </Line>
                <Line>
                    Finally, it checks if the actual center point matches the expected center point and throws an error if
                    they don't match.
                </Line>
            </Paragraph>
            <Paragraph>
                This version of the function doesn't make any assumptions about the artboard or the initial position of the
                item. It simply rotates the item around the provided pivot point and verifies that the result is as
                expected.
            </Paragraph>
            <Paragraph>
                To use this function, you would call it with the item you want to rotate, the angle of rotation, and the
                pivot point. For example:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}const layer = api.activeDocument().layers().first();
const item = this.createTestItem(layer, "RotateItem", [100, 100], 50);
rotateItemAround(item, 90, { x: 0, y: 0 }); // Rotate the item 90 degrees around the origin`}
            </CodeBox>
            <Paragraph>
                This should work regardless of the artboard size, item position, or pivot point you choose to use.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:37:14.205902Z"
        >
            <Origin>ebba5bec-3c0e-42ce-83da-6e3d77497178</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay start but please look at it. It is a test methof. Write it like this but generalize:</Paragraph>
            <Attachment
                identifier="paste-2"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-12-04T20:37:14.205902Z"
        >
            <Origin>aad2e801-b788-4b33-a414-abd1dc12dd82</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Understood. Here's a generalized version of the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> function that avoids making assumptions about the artboard and item positions:
            </Paragraph>
            <Paragraph>
                &lt;antArtifact identifier="generalized-rotate-item-test" type="application/vnd.ant.code"
                language="typescript" title="Generalized Rotate Item Around Test"&gt; import &#123; Layer, TransformNode
                &#125; from 'types'; // Import relevant types from your codebase
            </Paragraph>
            <Paragraph>
                function testRotateItemAround(item: TransformNode) &#123; // Step 1: Get the initial bounds of the item
                const initialBounds = item.item().geometricBounds; const initialCenterX = (initialBounds&#91;0&#93; +
                initialBounds&#91;2&#93;) / 2; const initialCenterY = (initialBounds&#91;1&#93; + initialBounds&#91;3&#93;)
                / 2;
            </Paragraph>
            <Paragraph>
                // Step 2: Test rotation around the center of the item const centerPivot = &#123; x: initialCenterX, y:
                initialCenterY &#125;; item.transforms.rotateItemAround(90, centerPivot); const boundsAfterCenterRotation =
                item.item().geometricBounds; const itemCenterXAfterCenter = (boundsAfterCenterRotation&#91;0&#93; +
                boundsAfterCenterRotation&#91;2&#93;) / 2; const itemCenterYAfterCenter =
                (boundsAfterCenterRotation&#91;1&#93; + boundsAfterCenterRotation&#91;3&#93;) / 2;
            </Paragraph>
            <Paragraph>
                if ( Math.round(itemCenterXAfterCenter) !== Math.round(initialCenterX) || Math.round(itemCenterYAfterCenter)
                !== Math.round(initialCenterY) ) &#123; throw new Error( <Word>
                    <Verbatim />
                    Center rotation failed: Expected center ($&#123;initialCenterX&#125;, $&#123;initialCenterY&#125;), got ($&#123;itemCenterXAfterCenter&#125;, $&#123;itemCenterYAfterCenter&#125;)
                </Word> ); &#125;
            </Paragraph>
            <Paragraph>
                // Step 3: Test rotation around the top-left corner of the item const topLeftPivot = &#123; x:
                initialBounds&#91;0&#93;, y: initialBounds&#91;1&#93; &#125;; item.transforms.rotateItemAround(45,
                topLeftPivot); const boundsAfterTopLeftRotation = item.item().geometricBounds; const itemCenterXAfterTopLeft
                = (boundsAfterTopLeftRotation&#91;0&#93; + boundsAfterTopLeftRotation&#91;2&#93;) / 2; const
                itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation&#91;1&#93; + boundsAfterTopLeftRotation&#91;3&#93;) /
                2;
            </Paragraph>
            <Paragraph>
                // Calculate expected position using manual rotation const radiusXTopLeft = itemCenterXAfterTopLeft -
                topLeftPivot.x; const radiusYTopLeft = itemCenterYAfterTopLeft - topLeftPivot.y; const radiansTopLeft = (45
                <Word>
                    <Emphasis />
                     Math.PI) / 180; const expectedCenterXTopLeft = topLeftPivot.x + radiusXTopLeft 
                </Word> Math.cos(radiansTopLeft) - radiusYTopLeft <Word>
                    <Emphasis />
                     Math.sin(radiansTopLeft); const expectedCenterYTopLeft = topLeftPivot.y + radiusXTopLeft 
                </Word> Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);
            </Paragraph>
            <Paragraph>
                if ( Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||
                Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft) ) &#123; throw new Error( <Word>
                    <Verbatim />
                    Top-left corner rotation failed: Expected center ($&#123;expectedCenterXTopLeft&#125;, $&#123;expectedCenterYTopLeft&#125;), got ($&#123;itemCenterXAfterTopLeft&#125;, $&#123;itemCenterYAfterTopLeft&#125;)
                </Word> ); &#125;
            </Paragraph>
            <Paragraph>
                // Step 4: Test rotation around a custom pivot point (e.g., &#123; x: 0.5, y: 0.5 &#125;) const customPivotX
                = initialCenterX + 0.5 <Word>
                    <Emphasis />
                     (initialBounds&#91;2&#93; - initialBounds&#91;0&#93;); const customPivotY = initialCenterY - 0.5 
                </Word> (initialBounds&#91;1&#93; - initialBounds&#91;3&#93;); const customPivot = &#123; x: customPivotX,
                y: customPivotY &#125;;
            </Paragraph>
            <Paragraph>
                item.transforms.rotateItemAround(360, customPivot); const boundsAfterCustomRotation =
                item.item().geometricBounds; const itemCenterXAfterCustom = (boundsAfterCustomRotation&#91;0&#93; +
                boundsAfterCustomRotation&#91;2&#93;) / 2; const itemCenterYAfterCustom =
                (boundsAfterCustomRotation&#91;1&#93; + boundsAfterCustomRotation&#91;3&#93;) / 2;
            </Paragraph>
            <Paragraph>
                if ( Math.round(itemCenterXAfterCustom) !== Math.round(initialCenterX) || Math.round(itemCenterYAfterCustom)
                !== Math.round(initialCenterY) ) &#123; throw new Error( <Word>
                    <Verbatim />
                    Custom pivot rotation failed: Expected center ($&#123;initialCenterX&#125;, $&#123;initialCenterY&#125;), got ($&#123;itemCenterXAfterCustom&#125;, $&#123;itemCenterYAfterCustom&#125;)
                </Word> ); &#125; &#125; &lt;/antArtifact&gt;
            </Paragraph>
            <Paragraph>
                This generalized version of the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> function works as follows:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>It retrieves the initial bounds of the item and calculates its center point.</Line>
                <Line>
                    It tests the rotation around the item's center, verifying that the center point remains the same after
                    the rotation.
                </Line>
                <Line>
                    It tests the rotation around the top-left corner of the item, calculating the expected center point
                    after the rotation using manual trigonometry.
                </Line>
                <Line>
                    It tests the rotation around a custom pivot point, which is set to be the center of the item plus an
                    offset.
                </Line>
            </Paragraph>
            <Paragraph>The key differences from the original code are:</Paragraph>
            <Paragraph>
                <List />
                <Line>It doesn't make any assumptions about the artboard or its dimensions.</Line>
                <Line>
                    It calculates the expected center point based on the item's initial bounds and the pivot point, rather
                    than relying on the artboard's dimensions.
                </Line>
                <Line>It uses the item's initial center point as the reference for the custom pivot point test.</Line>
            </Paragraph>
            <Paragraph>
                This generalized version of the test function should work for a wider range of scenarios, where the item's
                initial position and the artboard's dimensions may vary.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:37:39.192789Z"
        >
            <Origin>0eae4584-419f-45a8-8d13-534c5c3af48e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>It's a class method. Can you not write code?</Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:37:39.192789Z"
        >
            <Origin>cf3509e3-8c15-4cc1-86e0-9b85756ae452</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Okay, got it. Since this is a class method, I won't provide code, but I can explain the general approach you
                could take to generalize the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method without making assumptions about the artboard.
            </Paragraph>
            <Paragraph>The key steps would be:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Get the initial geometric bounds of the item being tested.</Line>
                <Line>Calculate the initial center point of the item based on those bounds.</Line>
                <Line>
                    Test the rotation around the item's center point, verifying that the center point remains the same after
                    rotation.
                </Line>
                <Line>
                    Test the rotation around the top-left corner of the item's bounds, calculating the expected center point
                    after rotation using trigonometry.
                </Line>
                <Line>
                    Test the rotation around a custom pivot point, which could be set to some offset from the item's initial
                    center point.
                </Line>
                <Line>
                    In each test case, compare the actual center point after rotation to the expected center point, and
                    throw an error if they don't match.
                </Line>
            </Paragraph>
            <Paragraph>
                The advantage of this approach is that it doesn't make any assumptions about the artboard size or position.
                It focuses solely on the item being rotated and its initial bounds. This makes the test more flexible and
                generalizable to different situations.
            </Paragraph>
            <Paragraph>
                The key is to calculate the expected results based on the item's own properties, rather than relying on
                properties of the artboard. This way, the test can be applied to any item, regardless of where it's
                positioned on the artboard.
            </Paragraph>
            <Paragraph>
                Does this help explain the general approach you could take to generalize the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method? Let me know if you have any other questions!
            </Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:38:21.648167Z"
        >
            <Origin>b3d9b2fe-0ff6-4be5-aa00-126bba47acfc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here's the class. Try to generalize it again as a methog in this class?</Paragraph>
            <Attachment
                identifier="paste-3"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-12-04T20:38:21.648167Z"
        >
            <Origin>429417d1-068e-4495-9e1a-10588047d966</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Okay, I understand now that this is a method within a class, so I'll provide a generalized version of the
                <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method without making assumptions about the artboard.
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class TransformsTest extends AppTestClass {
  constructor() {
    super();
    this.decorateExceptions = false;
  }

  testRotateItemAround(item: TransformNode) {
    // Step 1: Get the initial geometric bounds of the item
    const initialBounds = item.item().geometricBounds;
    const initialCenterX = (initialBounds[0] + initialBounds[2]) / 2;
    const initialCenterY = (initialBounds[1] + initialBounds[3]) / 2;

    // Step 2: Test rotation around the center of the item
    const centerPivot = { x: initialCenterX, y: initialCenterY };
    item.transforms.rotateItemAround(90, centerPivot);
    const boundsAfterCenterRotation = item.item().geometricBounds;
    const itemCenterXAfterCenter = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2;
    const itemCenterYAfterCenter = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;

    if (
      Math.round(itemCenterXAfterCenter) !== Math.round(initialCenterX) ||
      Math.round(itemCenterYAfterCenter) !== Math.round(initialCenterY)
    ) {
      throw new Error(
        \`Center rotation failed: Expected center (\${initialCenterX}, \${initialCenterY}), got (\${itemCenterXAfterCenter}, \${itemCenterYAfterCenter})\`
      );
    }

    // Step 3: Test rotation around the top-left corner of the item
    const topLeftPivot = { x: initialBounds[0], y: initialBounds[1] };
    item.transforms.rotateItemAround(45, topLeftPivot);
    const boundsAfterTopLeftRotation = item.item().geometricBounds;
    const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2;
    const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;

    // Calculate expected position using manual rotation
    const radiusXTopLeft = itemCenterXAfterTopLeft - topLeftPivot.x;
    const radiusYTopLeft = itemCenterYAfterTopLeft - topLeftPivot.y;
    const radiansTopLeft = (45 * Math.PI) / 180;
    const expectedCenterXTopLeft = topLeftPivot.x + radiusXTopLeft * Math.cos(radiansTopLeft) - radiusYTopLeft * Math.sin(radiansTopLeft);
    const expectedCenterYTopLeft = topLeftPivot.y + radiusXTopLeft * Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);

    if (
      Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||
      Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft)
    ) {
      throw new Error(
        \`Top-left corner rotation failed: Expected center (\${expectedCenterXTopLeft}, \${expectedCenterYTopLeft}), got (\${itemCenterXAfterTopLeft}, \${itemCenterYAfterTopLeft})\`
      );
    }

    // Step 4: Test rotation around a custom pivot point (e.g., { x: 0.5, y: 0.5 })
    const customPivotX = initialCenterX + 0.5 * (initialBounds[2] - initialBounds[0]);
    const customPivotY = initialCenterY - 0.5 * (initialBounds[1] - initialBounds[3]);
    const customPivot = { x: customPivotX, y: customPivotY };

    item.transforms.rotateItemAround(360, customPivot);
    const boundsAfterCustomRotation = item.item().geometricBounds;
    const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2;
    const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;

    if (
      Math.round(itemCenterXAfterCustom) !== Math.round(initialCenterX) ||
      Math.round(itemCenterYAfterCustom) !== Math.round(initialCenterY)
    ) {
      throw new Error(
        \`Custom pivot rotation failed: Expected center (\${initialCenterX}, \${initialCenterY}), got (\${itemCenterXAfterCustom}, \${itemCenterYAfterCustom})\`
      );
    }
  }
}`}
            </CodeBox>
            <Paragraph>The key changes in this generalized version:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    The method takes the <Word>
                        <Verbatim />
                        item
                    </Word> to be tested as a parameter, rather than creating a new item within the method.
                </Line>
                <Line>
                    The initial bounds and center point of the item are calculated based on the item's own properties,
                    without any references to the artboard.
                </Line>
                <Line>
                    The expected center points after rotation are calculated based on the item's initial bounds and the
                    pivot points, without relying on the artboard dimensions.
                </Line>
                <Line>
                    The custom pivot point is set to a specific offset from the item's initial center point, rather than
                    being based on the artboard.
                </Line>
            </Paragraph>
            <Paragraph>
                This version of the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method should work for a wider range of scenarios, as it doesn't make any assumptions about the
                artboard or the item's initial position. The method focuses solely on the item being tested and its behavior
                during the rotation operations.
            </Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:38:52.110387Z"
        >
            <Origin>97f86d8a-07f2-4c83-be24-d68080f28a76</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Do yuou see that my method does not take an object?</Paragraph>
        </Message>
        <Message
            at="2024-12-04T20:38:52.110387Z"
        >
            <Origin>ffaf82cd-bee5-48d2-858d-dffbdd2b0f3a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're absolutely right, my apologies. The <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method in your class does not take an object as a parameter, it operates on a class-level <Word>
                    <Verbatim />
                    item
                </Word> property. Let me update the generalized version accordingly:
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`${''}class TransformsTest extends AppTestClass {
  constructor() {
    super();
    this.decorateExceptions = false;
  }

  private item: TransformNode;

  testRotateItemAround() {
    // Step 1: Get the initial geometric bounds of the item
    const initialBounds = this.item.item().geometricBounds;
    const initialCenterX = (initialBounds[0] + initialBounds[2]) / 2;
    const initialCenterY = (initialBounds[1] + initialBounds[3]) / 2;

    // Step 2: Test rotation around the center of the item
    const centerPivot = { x: initialCenterX, y: initialCenterY };
    this.item.transforms.rotateItemAround(90, centerPivot);
    const boundsAfterCenterRotation = this.item.item().geometricBounds;
    const itemCenterXAfterCenter = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2;
    const itemCenterYAfterCenter = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;

    if (
      Math.round(itemCenterXAfterCenter) !== Math.round(initialCenterX) ||
      Math.round(itemCenterYAfterCenter) !== Math.round(initialCenterY)
    ) {
      throw new Error(
        \`Center rotation failed: Expected center (\${initialCenterX}, \${initialCenterY}), got (\${itemCenterXAfterCenter}, \${itemCenterYAfterCenter})\`
      );
    }

    // Step 3: Test rotation around the top-left corner of the item
    const topLeftPivot = { x: initialBounds[0], y: initialBounds[1] };
    this.item.transforms.rotateItemAround(45, topLeftPivot);
    const boundsAfterTopLeftRotation = this.item.item().geometricBounds;
    const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2;
    const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;

    // Calculate expected position using manual rotation
    const radiusXTopLeft = itemCenterXAfterTopLeft - topLeftPivot.x;
    const radiusYTopLeft = itemCenterYAfterTopLeft - topLeftPivot.y;
    const radiansTopLeft = (45 * Math.PI) / 180;
    const expectedCenterXTopLeft = topLeftPivot.x + radiusXTopLeft * Math.cos(radiansTopLeft) - radiusYTopLeft * Math.sin(radiansTopLeft);
    const expectedCenterYTopLeft = topLeftPivot.y + radiusXTopLeft * Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);

    if (
      Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||
      Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft)
    ) {
      throw new Error(
        \`Top-left corner rotation failed: Expected center (\${expectedCenterXTopLeft}, \${expectedCenterYTopLeft}), got (\${itemCenterXAfterTopLeft}, \${itemCenterYAfterTopLeft})\`
      );
    }

    // Step 4: Test rotation around a custom pivot point (e.g., { x: 0.5, y: 0.5 })
    const customPivotX = initialCenterX + 0.5 * (initialBounds[2] - initialBounds[0]);
    const customPivotY = initialCenterY - 0.5 * (initialBounds[1] - initialBounds[3]);
    const customPivot = { x: customPivotX, y: customPivotY };

    this.item.transforms.rotateItemAround(360, customPivot);
    const boundsAfterCustomRotation = this.item.item().geometricBounds;
    const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2;
    const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;

    if (
      Math.round(itemCenterXAfterCustom) !== Math.round(initialCenterX) ||
      Math.round(itemCenterYAfterCustom) !== Math.round(initialCenterY)
    ) {
      throw new Error(
        \`Custom pivot rotation failed: Expected center (\${initialCenterX}, \${initialCenterY}), got (\${itemCenterXAfterCustom}, \${itemCenterYAfterCustom})\`
      );
    }
  }
}`}
            </CodeBox>
            <Paragraph>The key changes are:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    I've added a <Word>
                        <Verbatim />
                        private item: TransformNode
                    </Word> property to the class, which the <Word>
                        <Verbatim />
                        testRotateItemAround
                    </Word> method will operate on.
                </Line>
                <Line>
                    The method no longer takes any parameters, as it works directly with the class-level <Word>
                        <Verbatim />
                        item
                    </Word> property.
                </Line>
                <Line>
                    All references to <Word>
                        <Verbatim />
                        item
                    </Word> within the method have been updated to use <Word>
                        <Verbatim />
                        this.item
                    </Word> instead.
                </Line>
            </Paragraph>
            <Paragraph>
                This version of the <Word>
                    <Verbatim />
                    testRotateItemAround
                </Word> method should now match the structure of your original implementation, while still avoiding
                assumptions about the artboard and focusing solely on the item being tested.
            </Paragraph>
        </Message>
        <Append
            identifier="paste"
            type=".txt"
        >
            ![[ paste.txt ]]
        </Append>
        <Append
            identifier="paste-2"
            type=".txt"
        >
            ![[ paste-2.txt ]]
        </Append>
        <Append
            identifier="paste-3"
            type=".txt"
        >
            ![[ paste-3.txt ]]
        </Append>
    </Chapter>
);
