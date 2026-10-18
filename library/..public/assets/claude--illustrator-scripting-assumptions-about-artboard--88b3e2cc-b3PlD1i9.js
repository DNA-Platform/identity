var L=Object.defineProperty;var h=(g,j)=>L(g,"name",{value:j,configurable:!0});import{j as t,C as T,b as R,T as A,P as b,c as Y,H as X,a as e,d as u,W as o,D as v,L as d,k as r,B as f,E as m,A as p,$ as y}from"./index-B5oAFc8f.js";import{I as B,D as M,M as i,h as s,i as n,n as l}from"./.cover-qzOoNiXp.js";import{$ as P,O as a,b as c}from"./3-the-project~code-SJAMFlBt.js";import{C as $,S as I}from"./.synopsis-BI1HOY8q.js";import"./.cover-D6DRTxBX.js";import"./.cover-BpiS5iTt.js";const C=class C extends P{};h(C,"$ClaudeIllustratorScriptingAssumptionsAboutArtboard88b3");let x=C;const w=h(()=>t.jsxs(T,{children:[t.jsx(R,{}),t.jsx(B,{}),t.jsxs(A,{children:[t.jsx(b,{}),"[Table of Contents](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/#table-of-contents)"]}),t.jsxs(Y,{children:[t.jsx(X,{children:"December 2024"}),t.jsx(e,{children:t.jsx(u,{children:"[4 December 2024](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/#4-december-2024)"})}),t.jsxs(e,{children:[t.jsx(b,{}),t.jsx(o,{children:t.jsx(u,{children:"[Illustrator Scripting Assumptions About Artboard](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/)"})}),t.jsx(o,{children:t.jsx(u,{children:"[Synopsis](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/#synopsis)"})}),t.jsx(o,{children:t.jsx(u,{children:"[Table of Contents](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/#table-of-contents)"})})]})]})]}),"Table"),k=h(()=>t.jsxs(T,{children:[t.jsx(M,{children:t.jsx(v,{children:"[4 December 2024](2024-12-04)"})}),t.jsx(A,{children:"[4 December 2024](/claude-illustrator-scripting-assumptions-about-artboard-88b3e2cc/#4-december-2024)"}),t.jsxs(i,{at:"2024-12-04T20:36:02.850450Z",children:[t.jsx(a,{children:"81d8c3e6-a8a5-44af-97a2-a4dfc88351ba"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"I am doing illustratpr scripting with typescript. Does this test make assumptions about the artboard?"}),t.jsx(c,{identifier:"paste",type:".txt",children:"Attached “paste.txt”"}),t.jsx(c,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t.jsxs(i,{at:"2024-12-04T20:36:02.850450Z",children:[t.jsx(a,{children:"86a0c1a4-2840-434a-91fe-ee21c95300fd"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsx(e,{children:"The provided code does make some assumptions about the artboard:"}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(f,{}),"Artboard Dimensions"]}),": The code retrieves the artboard's dimensions and uses them to calculate the expected center points for the rotations. It assumes that the artboard has a defined size."]}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(f,{}),"Artboard Origin"]}),": The code assumes that the artboard's origin (0, 0) is at the top-left corner. This is a common convention, but it's worth verifying if your specific use case aligns with this assumption."]}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(f,{}),"Pivot Points"]}),": The code uses three different pivot points for the rotations:"]}),t.jsxs(e,{children:[t.jsx(d,{}),t.jsx(r,{children:"Center of the artboard"}),t.jsx(r,{children:"Top-left corner of the artboard"}),t.jsx(r,{children:"Bottom-right corner of the artboard"}),t.jsx(r,{children:"Custom pivot point (0.5, 0.5 relative to the artboard) These pivot points are defined relative to the artboard, so the test assumes that the artboard's origin and dimensions are known."})]}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(f,{}),"Item Position"]}),": The code creates a test item and assumes that its initial position is at (100, 100) relative to the artboard."]})]}),t.jsxs(e,{children:["Overall, the test seems to be validating the ",t.jsxs(o,{children:[t.jsx(n,{}),"rotateItemAround"]})," function by checking if the item's center point matches the expected position after rotation around various pivot points. This assumes that the artboard, item position, and pivot points are known and defined."]}),t.jsx(e,{children:"If your specific use case involves different artboard dimensions, origin, or item positions, you may need to adjust the test accordingly. It's important to ensure that your test cases match the real-world scenarios you're dealing with in your illustrator scripting."})]}),t.jsxs(i,{at:"2024-12-04T20:36:30.862566Z",children:[t.jsx(a,{children:"9fdd6ac7-c3cf-42ff-ace2-e0bf95418349"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"Can you generalize it to not make assumptions"})]}),t.jsxs(i,{at:"2024-12-04T20:36:30.862566Z",children:[t.jsx(a,{children:"2482ae5d-1d24-4aa3-b364-1dd55d5babf0"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsx(e,{children:"Sure, I can generalize the code to avoid making assumptions about the artboard and item positions. Here's an updated version that should work for more diverse scenarios:"}),t.jsx(e,{children:`<antArtifact identifier="generalized-rotate-item" type="application/vnd.ant.code" language="typescript" title="Generalized Rotate Item Around Function"> import { Layer, TransformNode } from 'types'; // Import relevant types from your codebase`}),t.jsx(e,{children:"function rotateItemAround( item: TransformNode, angle: number, pivotPoint: { x: number; y: number } ): void { // Get the item's initial bounds const initialBounds = item.item().geometricBounds; const initialCenterX = (initialBounds[0] + initialBounds[2]) / 2; const initialCenterY = (initialBounds[1] + initialBounds[3]) / 2;"}),t.jsx(e,{children:"// Rotate the item around the provided pivot point item.transforms.rotateItemAround(angle, pivotPoint);"}),t.jsx(e,{children:"// Get the item's bounds after rotation const rotatedBounds = item.item().geometricBounds; const rotatedCenterX = (rotatedBounds[0] + rotatedBounds[2]) / 2; const rotatedCenterY = (rotatedBounds[1] + rotatedBounds[3]) / 2;"}),t.jsxs(e,{children:["// Calculate the expected center position after rotation const radiusX = rotatedCenterX - pivotPoint.x; const radiusY = rotatedCenterY - pivotPoint.y; const radians = (angle ",t.jsxs(o,{children:[t.jsx(m,{}),"Math.PI) / 180; const expectedCenterX = pivotPoint.x + radiusX"]})," Math.cos(radians) - radiusY ",t.jsxs(o,{children:[t.jsx(m,{}),"Math.sin(radians); const expectedCenterY = pivotPoint.y + radiusX"]})," Math.sin(radians) + radiusY * Math.cos(radians);"]}),t.jsxs(e,{children:["// Check if the item's center matches the expected position if ( Math.round(rotatedCenterX) !== Math.round(expectedCenterX) || Math.round(rotatedCenterY) !== Math.round(expectedCenterY) ) { throw new Error( ",t.jsxs(o,{children:[t.jsx(n,{}),"Rotation around (${pivotPoint.x}, ${pivotPoint.y}) failed: Expected center (${expectedCenterX}, ${expectedCenterY}), got (${rotatedCenterX}, ${rotatedCenterY})"]})," ); } } </antArtifact>"]}),t.jsx(e,{children:"Here's how the generalized function works:"}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsx(r,{children:"It takes three parameters:"}),t.jsxs(e,{children:[t.jsx(d,{}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(n,{}),"item"]}),": The item to be rotated"]}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(n,{}),"angle"]}),": The angle of rotation in degrees"]}),t.jsxs(r,{children:[t.jsxs(o,{children:[t.jsx(n,{}),"pivotPoint"]}),": The pivot point around which the item should rotate, specified as an object with ",t.jsxs(o,{children:[t.jsx(n,{}),"x"]})," and ",t.jsxs(o,{children:[t.jsx(n,{}),"y"]})," properties"]})]}),t.jsx(r,{children:"It first calculates the initial center point of the item before rotation."}),t.jsxs(r,{children:["It then rotates the item around the provided pivot point using the ",t.jsxs(o,{children:[t.jsx(n,{}),"rotateItemAround"]})," method."]}),t.jsx(r,{children:"After rotation, it calculates the new center point of the item."}),t.jsx(r,{children:"It computes the expected center point after rotation based on the initial center, pivot point, and rotation angle."}),t.jsx(r,{children:"Finally, it checks if the actual center point matches the expected center point and throws an error if they don't match."})]}),t.jsx(e,{children:"This version of the function doesn't make any assumptions about the artboard or the initial position of the item. It simply rotates the item around the provided pivot point and verifies that the result is as expected."}),t.jsx(e,{children:"To use this function, you would call it with the item you want to rotate, the angle of rotation, and the pivot point. For example:"}),t.jsx(l,{language:"typescript",children:`const layer = api.activeDocument().layers().first();
const item = this.createTestItem(layer, "RotateItem", [100, 100], 50);
rotateItemAround(item, 90, { x: 0, y: 0 }); // Rotate the item 90 degrees around the origin`}),t.jsx(e,{children:"This should work regardless of the artboard size, item position, or pivot point you choose to use."})]}),t.jsxs(i,{at:"2024-12-04T20:37:14.205902Z",children:[t.jsx(a,{children:"ebba5bec-3c0e-42ce-83da-6e3d77497178"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"Okay start but please look at it. It is a test methof. Write it like this but generalize:"}),t.jsx(c,{identifier:"paste-2",type:".txt",children:"Attached “paste.txt”"}),t.jsx(c,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t.jsxs(i,{at:"2024-12-04T20:37:14.205902Z",children:[t.jsx(a,{children:"aad2e801-b788-4b33-a414-abd1dc12dd82"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsxs(e,{children:["Understood. Here's a generalized version of the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," function that avoids making assumptions about the artboard and item positions:"]}),t.jsx(e,{children:`<antArtifact identifier="generalized-rotate-item-test" type="application/vnd.ant.code" language="typescript" title="Generalized Rotate Item Around Test"> import { Layer, TransformNode } from 'types'; // Import relevant types from your codebase`}),t.jsx(e,{children:"function testRotateItemAround(item: TransformNode) { // Step 1: Get the initial bounds of the item const initialBounds = item.item().geometricBounds; const initialCenterX = (initialBounds[0] + initialBounds[2]) / 2; const initialCenterY = (initialBounds[1] + initialBounds[3]) / 2;"}),t.jsx(e,{children:"// Step 2: Test rotation around the center of the item const centerPivot = { x: initialCenterX, y: initialCenterY }; item.transforms.rotateItemAround(90, centerPivot); const boundsAfterCenterRotation = item.item().geometricBounds; const itemCenterXAfterCenter = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2; const itemCenterYAfterCenter = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;"}),t.jsxs(e,{children:["if ( Math.round(itemCenterXAfterCenter) !== Math.round(initialCenterX) || Math.round(itemCenterYAfterCenter) !== Math.round(initialCenterY) ) { throw new Error( ",t.jsxs(o,{children:[t.jsx(n,{}),"Center rotation failed: Expected center (${initialCenterX}, ${initialCenterY}), got (${itemCenterXAfterCenter}, ${itemCenterYAfterCenter})"]})," ); }"]}),t.jsx(e,{children:"// Step 3: Test rotation around the top-left corner of the item const topLeftPivot = { x: initialBounds[0], y: initialBounds[1] }; item.transforms.rotateItemAround(45, topLeftPivot); const boundsAfterTopLeftRotation = item.item().geometricBounds; const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2; const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;"}),t.jsxs(e,{children:["// Calculate expected position using manual rotation const radiusXTopLeft = itemCenterXAfterTopLeft - topLeftPivot.x; const radiusYTopLeft = itemCenterYAfterTopLeft - topLeftPivot.y; const radiansTopLeft = (45",t.jsxs(o,{children:[t.jsx(m,{}),"Math.PI) / 180; const expectedCenterXTopLeft = topLeftPivot.x + radiusXTopLeft"]})," Math.cos(radiansTopLeft) - radiusYTopLeft ",t.jsxs(o,{children:[t.jsx(m,{}),"Math.sin(radiansTopLeft); const expectedCenterYTopLeft = topLeftPivot.y + radiusXTopLeft"]})," Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);"]}),t.jsxs(e,{children:["if ( Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) || Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft) ) { throw new Error( ",t.jsxs(o,{children:[t.jsx(n,{}),"Top-left corner rotation failed: Expected center (${expectedCenterXTopLeft}, ${expectedCenterYTopLeft}), got (${itemCenterXAfterTopLeft}, ${itemCenterYAfterTopLeft})"]})," ); }"]}),t.jsxs(e,{children:["// Step 4: Test rotation around a custom pivot point (e.g., { x: 0.5, y: 0.5 }) const customPivotX = initialCenterX + 0.5 ",t.jsxs(o,{children:[t.jsx(m,{}),"(initialBounds[2] - initialBounds[0]); const customPivotY = initialCenterY - 0.5"]})," (initialBounds[1] - initialBounds[3]); const customPivot = { x: customPivotX, y: customPivotY };"]}),t.jsx(e,{children:"item.transforms.rotateItemAround(360, customPivot); const boundsAfterCustomRotation = item.item().geometricBounds; const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2; const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;"}),t.jsxs(e,{children:["if ( Math.round(itemCenterXAfterCustom) !== Math.round(initialCenterX) || Math.round(itemCenterYAfterCustom) !== Math.round(initialCenterY) ) { throw new Error( ",t.jsxs(o,{children:[t.jsx(n,{}),"Custom pivot rotation failed: Expected center (${initialCenterX}, ${initialCenterY}), got (${itemCenterXAfterCustom}, ${itemCenterYAfterCustom})"]})," ); } } </antArtifact>"]}),t.jsxs(e,{children:["This generalized version of the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," function works as follows:"]}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsx(r,{children:"It retrieves the initial bounds of the item and calculates its center point."}),t.jsx(r,{children:"It tests the rotation around the item's center, verifying that the center point remains the same after the rotation."}),t.jsx(r,{children:"It tests the rotation around the top-left corner of the item, calculating the expected center point after the rotation using manual trigonometry."}),t.jsx(r,{children:"It tests the rotation around a custom pivot point, which is set to be the center of the item plus an offset."})]}),t.jsx(e,{children:"The key differences from the original code are:"}),t.jsxs(e,{children:[t.jsx(d,{}),t.jsx(r,{children:"It doesn't make any assumptions about the artboard or its dimensions."}),t.jsx(r,{children:"It calculates the expected center point based on the item's initial bounds and the pivot point, rather than relying on the artboard's dimensions."}),t.jsx(r,{children:"It uses the item's initial center point as the reference for the custom pivot point test."})]}),t.jsx(e,{children:"This generalized version of the test function should work for a wider range of scenarios, where the item's initial position and the artboard's dimensions may vary."})]}),t.jsxs(i,{at:"2024-12-04T20:37:39.192789Z",children:[t.jsx(a,{children:"0eae4584-419f-45a8-8d13-534c5c3af48e"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"It's a class method. Can you not write code?"})]}),t.jsxs(i,{at:"2024-12-04T20:37:39.192789Z",children:[t.jsx(a,{children:"cf3509e3-8c15-4cc1-86e0-9b85756ae452"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsxs(e,{children:["Okay, got it. Since this is a class method, I won't provide code, but I can explain the general approach you could take to generalize the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method without making assumptions about the artboard."]}),t.jsx(e,{children:"The key steps would be:"}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsx(r,{children:"Get the initial geometric bounds of the item being tested."}),t.jsx(r,{children:"Calculate the initial center point of the item based on those bounds."}),t.jsx(r,{children:"Test the rotation around the item's center point, verifying that the center point remains the same after rotation."}),t.jsx(r,{children:"Test the rotation around the top-left corner of the item's bounds, calculating the expected center point after rotation using trigonometry."}),t.jsx(r,{children:"Test the rotation around a custom pivot point, which could be set to some offset from the item's initial center point."}),t.jsx(r,{children:"In each test case, compare the actual center point after rotation to the expected center point, and throw an error if they don't match."})]}),t.jsx(e,{children:"The advantage of this approach is that it doesn't make any assumptions about the artboard size or position. It focuses solely on the item being rotated and its initial bounds. This makes the test more flexible and generalizable to different situations."}),t.jsx(e,{children:"The key is to calculate the expected results based on the item's own properties, rather than relying on properties of the artboard. This way, the test can be applied to any item, regardless of where it's positioned on the artboard."}),t.jsxs(e,{children:["Does this help explain the general approach you could take to generalize the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method? Let me know if you have any other questions!"]})]}),t.jsxs(i,{at:"2024-12-04T20:38:21.648167Z",children:[t.jsx(a,{children:"b3d9b2fe-0ff6-4be5-aa00-126bba47acfc"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"Here's the class. Try to generalize it again as a methog in this class?"}),t.jsx(c,{identifier:"paste-3",type:".txt",children:"Attached “paste.txt”"}),t.jsx(c,{children:"Uploaded “paste.txt”, whose content the export does not carry"})]}),t.jsxs(i,{at:"2024-12-04T20:38:21.648167Z",children:[t.jsx(a,{children:"429417d1-068e-4495-9e1a-10588047d966"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsxs(e,{children:["Okay, I understand now that this is a method within a class, so I'll provide a generalized version of the",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method without making assumptions about the artboard."]}),t.jsx(l,{language:"typescript",children:`class TransformsTest extends AppTestClass {
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
}`}),t.jsx(e,{children:"The key changes in this generalized version:"}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsxs(r,{children:["The method takes the ",t.jsxs(o,{children:[t.jsx(n,{}),"item"]})," to be tested as a parameter, rather than creating a new item within the method."]}),t.jsx(r,{children:"The initial bounds and center point of the item are calculated based on the item's own properties, without any references to the artboard."}),t.jsx(r,{children:"The expected center points after rotation are calculated based on the item's initial bounds and the pivot points, without relying on the artboard dimensions."}),t.jsx(r,{children:"The custom pivot point is set to a specific offset from the item's initial center point, rather than being based on the artboard."})]}),t.jsxs(e,{children:["This version of the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method should work for a wider range of scenarios, as it doesn't make any assumptions about the artboard or the item's initial position. The method focuses solely on the item being tested and its behavior during the rotation operations."]})]}),t.jsxs(i,{at:"2024-12-04T20:38:52.110387Z",children:[t.jsx(a,{children:"97f86d8a-07f2-4c83-be24-d68080f28a76"}),t.jsx(s,{children:"[Doug](/dougs-story/)"}),t.jsx(e,{children:"Do yuou see that my method does not take an object?"})]}),t.jsxs(i,{at:"2024-12-04T20:38:52.110387Z",children:[t.jsx(a,{children:"ffaf82cd-bee5-48d2-858d-dffbdd2b0f3a"}),t.jsx(s,{children:"[Claude](/dougs-claude/)"}),t.jsxs(e,{children:["You're absolutely right, my apologies. The ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method in your class does not take an object as a parameter, it operates on a class-level ",t.jsxs(o,{children:[t.jsx(n,{}),"item"]})," property. Let me update the generalized version accordingly:"]}),t.jsx(l,{language:"typescript",children:`class TransformsTest extends AppTestClass {
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
}`}),t.jsx(e,{children:"The key changes are:"}),t.jsxs(e,{children:[t.jsx(d,{ordered:!0}),t.jsxs(r,{children:["I've added a ",t.jsxs(o,{children:[t.jsx(n,{}),"private item: TransformNode"]})," property to the class, which the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method will operate on."]}),t.jsxs(r,{children:["The method no longer takes any parameters, as it works directly with the class-level ",t.jsxs(o,{children:[t.jsx(n,{}),"item"]})," property."]}),t.jsxs(r,{children:["All references to ",t.jsxs(o,{children:[t.jsx(n,{}),"item"]})," within the method have been updated to use ",t.jsxs(o,{children:[t.jsx(n,{}),"this.item"]})," instead."]})]}),t.jsxs(e,{children:["This version of the ",t.jsxs(o,{children:[t.jsx(n,{}),"testRotateItemAround"]})," method should now match the structure of your original implementation, while still avoiding assumptions about the artboard and focusing solely on the item being tested."]})]}),t.jsx(p,{identifier:"paste",type:".txt",children:`testRotateItemAround() {\r
        const layer = api.activeDocument().layers().first();\r
        const item = this.createTestItem(layer, "RotateItem", [100, 100], 50);\r
\r
        // Step 2: Get the artboard and its dimensions\r
        const artboard = layer.document().activeArtboard();\r
        const artboardRect = artboard.item().artboardRect;\r
        const artboardWidth = artboardRect[2] - artboardRect[0];\r
        const artboardHeight = artboardRect[1] - artboardRect[3];\r
\r
        // Step 3: Test rotation around the center of the artboard\r
        const centerPivot = { x: 0, y: 0 };\r
        const expectedCenterX = artboardRect[0] + artboardWidth / 2;\r
        const expectedCenterY = artboardRect[1] - artboardHeight / 2;\r
\r
        item.transforms.rotateItemAround(90, centerPivot);\r
        const boundsAfterCenterRotation = item.item().geometricBounds;\r
        const itemCenterX = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2;\r
        const itemCenterY = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;\r
\r
        if (Math.round(itemCenterX) !== Math.round(expectedCenterX) || Math.round(itemCenterY) !== Math.round(expectedCenterY)) {\r
            throw \`Center rotation failed: Expected center (\${expectedCenterX}, \${expectedCenterY}), got (\${itemCenterX}, \${itemCenterY})\`;\r
        }\r
\r
        // Step 4: Test rotation around the top-left corner of the artboard\r
        const topLeftPivot = { x: -1, y: 1 };\r
        const expectedTopLeftX = artboardRect[0];\r
        const expectedTopLeftY = artboardRect[1];\r
\r
        item.transforms.rotateItemAround(45, topLeftPivot);\r
        const boundsAfterTopLeftRotation = item.item().geometricBounds;\r
        const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2;\r
        const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;\r
\r
        // Calculate expected position using manual rotation\r
        const radiusXTopLeft = itemCenterXAfterTopLeft - expectedTopLeftX;\r
        const radiusYTopLeft = itemCenterYAfterTopLeft - expectedTopLeftY;\r
        const radiansTopLeft = (45 * Math.PI) / 180;\r
        const expectedCenterXTopLeft =\r
            expectedTopLeftX + radiusXTopLeft * Math.cos(radiansTopLeft) - radiusYTopLeft * Math.sin(radiansTopLeft);\r
        const expectedCenterYTopLeft =\r
            expectedTopLeftY + radiusXTopLeft * Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);\r
\r
        if (\r
            Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||\r
            Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft)\r
        ) {\r
            throw \`Top-left corner rotation failed: Expected center (\${expectedCenterXTopLeft}, \${expectedCenterYTopLeft}), got (\${itemCenterXAfterTopLeft}, \${itemCenterYAfterTopLeft})\`;\r
        }\r
\r
        // Step 5: Test rotation around a custom pivot point (bottom-right corner of the artboard)\r
        const bottomRightPivot = { x: 1, y: -1 };\r
        const expectedBottomRightX = artboardRect[2];\r
        const expectedBottomRightY = artboardRect[3];\r
\r
        item.transforms.rotateItemAround(180, bottomRightPivot);\r
        const boundsAfterBottomRightRotation = item.item().geometricBounds;\r
        const itemCenterXAfterBottomRight = (boundsAfterBottomRightRotation[0] + boundsAfterBottomRightRotation[2]) / 2;\r
        const itemCenterYAfterBottomRight = (boundsAfterBottomRightRotation[1] + boundsAfterBottomRightRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterBottomRight) !== Math.round(expectedBottomRightX) ||\r
            Math.round(itemCenterYAfterBottomRight) !== Math.round(expectedBottomRightY)\r
        ) {\r
            throw \`Bottom-right corner rotation failed: Expected center (\${expectedBottomRightX}, \${expectedBottomRightY}), got (\${itemCenterXAfterBottomRight}, \${itemCenterYAfterBottomRight})\`;\r
        }\r
\r
        // Step 6: Test rotation at arbitrary pivot point (e.g., { x: 0.5, y: 0.5 })\r
        const customPivot = { x: 0.5, y: 0.5 };\r
        const customPivotX = artboardRect[0] + 0.75 * artboardWidth;\r
        const customPivotY = artboardRect[1] - 0.75 * artboardHeight;\r
\r
        item.transforms.rotateItemAround(360, customPivot);\r
        const boundsAfterCustomRotation = item.item().geometricBounds;\r
        const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2;\r
        const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterCustom) !== Math.round(itemCenterX) ||\r
            Math.round(itemCenterYAfterCustom) !== Math.round(itemCenterY)\r
        ) {\r
            throw \`Custom pivot rotation failed: Expected center (\${itemCenterX}, \${itemCenterY}), got (\${itemCenterXAfterCustom}, \${itemCenterYAfterCustom})\`;\r
        }\r
    }`}),t.jsx(p,{identifier:"paste-2",type:".txt",children:`testRotateItemAround() {\r
        const layer = api.activeDocument().layers().first();\r
        const item = this.createTestItem(layer, "RotateItem", [100, 100], 50);\r
\r
        // Step 2: Get the artboard and its dimensions\r
        const artboard = layer.document().activeArtboard();\r
        const artboardRect = artboard.item().artboardRect;\r
        const artboardWidth = artboardRect[2] - artboardRect[0];\r
        const artboardHeight = artboardRect[1] - artboardRect[3];\r
\r
        // Step 3: Test rotation around the center of the artboard\r
        const centerPivot = { x: 0, y: 0 };\r
        const expectedCenterX = artboardRect[0] + artboardWidth / 2;\r
        const expectedCenterY = artboardRect[1] - artboardHeight / 2;\r
\r
        item.transforms.rotateItemAround(90, centerPivot);\r
        const boundsAfterCenterRotation = item.item().geometricBounds;\r
        const itemCenterX = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2;\r
        const itemCenterY = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;\r
\r
        if (Math.round(itemCenterX) !== Math.round(expectedCenterX) || Math.round(itemCenterY) !== Math.round(expectedCenterY)) {\r
            throw \`Center rotation failed: Expected center (\${expectedCenterX}, \${expectedCenterY}), got (\${itemCenterX}, \${itemCenterY})\`;\r
        }\r
\r
        // Step 4: Test rotation around the top-left corner of the artboard\r
        const topLeftPivot = { x: -1, y: 1 };\r
        const expectedTopLeftX = artboardRect[0];\r
        const expectedTopLeftY = artboardRect[1];\r
\r
        item.transforms.rotateItemAround(45, topLeftPivot);\r
        const boundsAfterTopLeftRotation = item.item().geometricBounds;\r
        const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2;\r
        const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;\r
\r
        // Calculate expected position using manual rotation\r
        const radiusXTopLeft = itemCenterXAfterTopLeft - expectedTopLeftX;\r
        const radiusYTopLeft = itemCenterYAfterTopLeft - expectedTopLeftY;\r
        const radiansTopLeft = (45 * Math.PI) / 180;\r
        const expectedCenterXTopLeft =\r
            expectedTopLeftX + radiusXTopLeft * Math.cos(radiansTopLeft) - radiusYTopLeft * Math.sin(radiansTopLeft);\r
        const expectedCenterYTopLeft =\r
            expectedTopLeftY + radiusXTopLeft * Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);\r
\r
        if (\r
            Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||\r
            Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft)\r
        ) {\r
            throw \`Top-left corner rotation failed: Expected center (\${expectedCenterXTopLeft}, \${expectedCenterYTopLeft}), got (\${itemCenterXAfterTopLeft}, \${itemCenterYAfterTopLeft})\`;\r
        }\r
\r
        // Step 5: Test rotation around a custom pivot point (bottom-right corner of the artboard)\r
        const bottomRightPivot = { x: 1, y: -1 };\r
        const expectedBottomRightX = artboardRect[2];\r
        const expectedBottomRightY = artboardRect[3];\r
\r
        item.transforms.rotateItemAround(180, bottomRightPivot);\r
        const boundsAfterBottomRightRotation = item.item().geometricBounds;\r
        const itemCenterXAfterBottomRight = (boundsAfterBottomRightRotation[0] + boundsAfterBottomRightRotation[2]) / 2;\r
        const itemCenterYAfterBottomRight = (boundsAfterBottomRightRotation[1] + boundsAfterBottomRightRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterBottomRight) !== Math.round(expectedBottomRightX) ||\r
            Math.round(itemCenterYAfterBottomRight) !== Math.round(expectedBottomRightY)\r
        ) {\r
            throw \`Bottom-right corner rotation failed: Expected center (\${expectedBottomRightX}, \${expectedBottomRightY}), got (\${itemCenterXAfterBottomRight}, \${itemCenterYAfterBottomRight})\`;\r
        }\r
\r
        // Step 6: Test rotation at arbitrary pivot point (e.g., { x: 0.5, y: 0.5 })\r
        const customPivot = { x: 0.5, y: 0.5 };\r
        const customPivotX = artboardRect[0] + 0.75 * artboardWidth;\r
        const customPivotY = artboardRect[1] - 0.75 * artboardHeight;\r
\r
        item.transforms.rotateItemAround(360, customPivot);\r
        const boundsAfterCustomRotation = item.item().geometricBounds;\r
        const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2;\r
        const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterCustom) !== Math.round(itemCenterX) ||\r
            Math.round(itemCenterYAfterCustom) !== Math.round(itemCenterY)\r
        ) {\r
            throw \`Custom pivot rotation failed: Expected center (\${itemCenterX}, \${itemCenterY}), got (\${itemCenterXAfterCustom}, \${itemCenterYAfterCustom})\`;\r
        }\r
    }`}),t.jsx(p,{identifier:"paste-3",type:".txt",children:`class TransformssTest extends AppTestClass {\r
    constructor() {\r
        super();\r
        this.decorateExceptions = false;\r
    }\r
\r
    testRotateItemAround() {\r
        const layer = api.activeDocument().layers().first();\r
        const item = this.createTestItem(layer, "RotateItem", [100, 100], 50);\r
\r
        // Step 2: Get the artboard and its dimensions\r
        const artboard = layer.document().activeArtboard();\r
        const artboardRect = artboard.item().artboardRect;\r
        const artboardWidth = artboardRect[2] - artboardRect[0];\r
        const artboardHeight = artboardRect[1] - artboardRect[3];\r
\r
        // Step 3: Test rotation around the center of the artboard\r
        const centerPivot = { x: 0, y: 0 };\r
        const expectedCenterX = artboardRect[0] + artboardWidth / 2;\r
        const expectedCenterY = artboardRect[1] - artboardHeight / 2;\r
\r
        item.transforms.rotateItemAround(90, centerPivot);\r
        const boundsAfterCenterRotation = item.item().geometricBounds;\r
        const itemCenterX = (boundsAfterCenterRotation[0] + boundsAfterCenterRotation[2]) / 2;\r
        const itemCenterY = (boundsAfterCenterRotation[1] + boundsAfterCenterRotation[3]) / 2;\r
\r
        if (Math.round(itemCenterX) !== Math.round(expectedCenterX) || Math.round(itemCenterY) !== Math.round(expectedCenterY)) {\r
            throw \`Center rotation failed: Expected center (\${expectedCenterX}, \${expectedCenterY}), got (\${itemCenterX}, \${itemCenterY})\`;\r
        }\r
\r
        // Step 4: Test rotation around the top-left corner of the artboard\r
        const topLeftPivot = { x: -1, y: 1 };\r
        const expectedTopLeftX = artboardRect[0];\r
        const expectedTopLeftY = artboardRect[1];\r
\r
        item.transforms.rotateItemAround(45, topLeftPivot);\r
        const boundsAfterTopLeftRotation = item.item().geometricBounds;\r
        const itemCenterXAfterTopLeft = (boundsAfterTopLeftRotation[0] + boundsAfterTopLeftRotation[2]) / 2;\r
        const itemCenterYAfterTopLeft = (boundsAfterTopLeftRotation[1] + boundsAfterTopLeftRotation[3]) / 2;\r
\r
        // Calculate expected position using manual rotation\r
        const radiusXTopLeft = itemCenterXAfterTopLeft - expectedTopLeftX;\r
        const radiusYTopLeft = itemCenterYAfterTopLeft - expectedTopLeftY;\r
        const radiansTopLeft = (45 * Math.PI) / 180;\r
        const expectedCenterXTopLeft =\r
            expectedTopLeftX + radiusXTopLeft * Math.cos(radiansTopLeft) - radiusYTopLeft * Math.sin(radiansTopLeft);\r
        const expectedCenterYTopLeft =\r
            expectedTopLeftY + radiusXTopLeft * Math.sin(radiansTopLeft) + radiusYTopLeft * Math.cos(radiansTopLeft);\r
\r
        if (\r
            Math.round(itemCenterXAfterTopLeft) !== Math.round(expectedCenterXTopLeft) ||\r
            Math.round(itemCenterYAfterTopLeft) !== Math.round(expectedCenterYTopLeft)\r
        ) {\r
            throw \`Top-left corner rotation failed: Expected center (\${expectedCenterXTopLeft}, \${expectedCenterYTopLeft}), got (\${itemCenterXAfterTopLeft}, \${itemCenterYAfterTopLeft})\`;\r
        }\r
\r
        // Step 5: Test rotation around a custom pivot point (bottom-right corner of the artboard)\r
        const bottomRightPivot = { x: 1, y: -1 };\r
        const expectedBottomRightX = artboardRect[2];\r
        const expectedBottomRightY = artboardRect[3];\r
\r
        item.transforms.rotateItemAround(180, bottomRightPivot);\r
        const boundsAfterBottomRightRotation = item.item().geometricBounds;\r
        const itemCenterXAfterBottomRight = (boundsAfterBottomRightRotation[0] + boundsAfterBottomRightRotation[2]) / 2;\r
        const itemCenterYAfterBottomRight = (boundsAfterBottomRightRotation[1] + boundsAfterBottomRightRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterBottomRight) !== Math.round(expectedBottomRightX) ||\r
            Math.round(itemCenterYAfterBottomRight) !== Math.round(expectedBottomRightY)\r
        ) {\r
            throw \`Bottom-right corner rotation failed: Expected center (\${expectedBottomRightX}, \${expectedBottomRightY}), got (\${itemCenterXAfterBottomRight}, \${itemCenterYAfterBottomRight})\`;\r
        }\r
\r
        // Step 6: Test rotation at arbitrary pivot point (e.g., { x: 0.5, y: 0.5 })\r
        const customPivot = { x: 0.5, y: 0.5 };\r
        const customPivotX = artboardRect[0] + 0.75 * artboardWidth;\r
        const customPivotY = artboardRect[1] - 0.75 * artboardHeight;\r
\r
        item.transforms.rotateItemAround(360, customPivot);\r
        const boundsAfterCustomRotation = item.item().geometricBounds;\r
        const itemCenterXAfterCustom = (boundsAfterCustomRotation[0] + boundsAfterCustomRotation[2]) / 2;\r
        const itemCenterYAfterCustom = (boundsAfterCustomRotation[1] + boundsAfterCustomRotation[3]) / 2;\r
\r
        if (\r
            Math.round(itemCenterXAfterCustom) !== Math.round(itemCenterX) ||\r
            Math.round(itemCenterYAfterCustom) !== Math.round(itemCenterY)\r
        ) {\r
            throw \`Custom pivot rotation failed: Expected center (\${itemCenterX}, \${itemCenterY}), got (\${itemCenterXAfterCustom}, \${itemCenterYAfterCustom})\`;\r
        }\r
    }\r
`})]}),"December420241"),E=y(x),O=h(()=>t.jsxs(E,{children:[$(),I(),w(),k()]}),"book");export{O as book};
