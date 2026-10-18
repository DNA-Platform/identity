import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ TaskbarTest..ahk - Test Suite for Taskbar Library v1 ]]</Title>
        <CodeBox
            language="autohotkey"
        >
            {`${''}; TaskbarTest.ahk - Test suite for Taskbar.ahk library
; Requires AutoHotUnit for test framework

#Include %A_ScriptDir%\\..\\src\\include\\AutoHotUnit.ahk
#Include %A_ScriptDir%\\..\\src\\lib\\v1\\taskbar.ahk

class TaskbarTest extends TestCase {
    ; Setup and teardown
    Begin() {
        ; Create a new taskbar instance before each test
        this.taskbar := new Taskbar()
    }
    
    End() {
        ; Clean up after each test
        this.taskbar := ""
    }
    
    ; Tests for Taskbar class
    TestInitialization() {
        ; Test that taskbar initialization populates basic properties
        this.AssertNotEqual(0, this.taskbar.taskbarHandle, "Taskbar handle should be found")
        this.AssertNotEqual("", this.taskbar.position, "Taskbar position should be detected")
        this.AssertGreater(this.taskbar.width, 0, "Taskbar width should be positive")
        this.AssertGreater(this.taskbar.height, 0, "Taskbar height should be positive")
    }
    
    TestGetItems() {
        ; Test that GetItems returns a non-empty array
        items := this.taskbar.GetItems()
        this.AssertTrue(IsObject(items), "Items should be an object")
        this.AssertGreaterOrEqual(items.Length(), 1, "Should find at least one taskbar item")
        
        ; Test force refresh parameter
        refreshedItems := this.taskbar.GetItems(true)
        this.AssertGreaterOrEqual(refreshedItems.Length(), 1, "Should find items after refresh")
    }
    
    TestFindItem() {
        ; Test finding an item by name (this depends on something being in the taskbar)
        ; Using "Explorer" since it's likely to be on most Windows taskbars
        item := this.taskbar.FindItem("Explorer", false)
        this.TestLog("Checking for Explorer in taskbar")
        ; This is a soft assertion as Explorer might not be present on all systems
        if (item) {
            this.AssertEqual("object", Type(item), "FindItem should return a TaskbarItem object")
            this.TestLog("Found Explorer in taskbar")
        } else {
            this.TestLog("Explorer not found in taskbar - this is not a failure")
        }
        
        ; Test with exact match parameter
        itemExact := this.taskbar.FindItem("ThisShouldNotExist", true)
        this.AssertEqual("", itemExact, "Non-existent item should return empty string")
    }
    
    TestGetRunningAndPinnedApps() {
        ; Test GetRunningApps returns an array
        runningApps := this.taskbar.GetRunningApps()
        this.AssertTrue(IsObject(runningApps), "Running apps should be an array")
        
        ; Test GetPinnedApps returns an array
        pinnedApps := this.taskbar.GetPinnedApps()
        this.AssertTrue(IsObject(pinnedApps), "Pinned apps should be an array")
    }
    
    ; Tests for TaskbarItem class (when available)
    TestTaskbarItemProperties() {
        ; Get at least one item for testing
        items := this.taskbar.GetItems()
        if (items.Length() > 0) {
            item := items[1]
            this.AssertNotEqual("", item.name, "TaskbarItem should have a name")
            this.AssertNotEqual("", item.state, "TaskbarItem should have a state")
            this.AssertTrue(IsObject(item.position), "TaskbarItem should have position info")
            this.AssertTrue(IsObject(item.shortcut), "TaskbarItem should have shortcut info")
        } else {
            this.TestLog("No taskbar items found - skipping TaskbarItem property tests")
        }
    }
    
    ; Tests for mock UI interactions (non-destructive)
    TestMockInteractions() {
        ; Create a mock UI element for testing interactions without modifying the system
        mockElement := this._CreateMockElement()
        mockItem := new TaskbarItem(mockElement)
        
        ; Test click simulation without affecting real UI
        originalClick := mockElement.Click
        clickCalled := false
        mockElement.Click := Func("MockClick").Bind(clickCalled)
        result := mockItem.Click()
        
        ; Restore original function
        mockElement.Click := originalClick
        
        ; This will verify our mocking worked, not actual clicks
        this.AssertTrue(result, "Click should return true when successful")
    }
    
    ; Helper method to create a mock UI element
    _CreateMockElement() {
        mockElement := {}
        mockElement.CurrentName := "Test Application"
        mockElement.CurrentAutomationId := "test-id"
        mockElement.CurrentClassName := "Running"
        mockElement.CurrentBoundingRectangle := {x: 100, y: 100, width: 40, height: 40}
        mockElement.Click := Func("MockClick")
        mockElement.RightClick := Func("MockRightClick")
        return mockElement
    }
}

; Mock functions for UI interaction testing
MockClick(ByRef clickCalled) {
    clickCalled := true
    return true
}

MockRightClick() {
    return true
}

; Helper function for cleaner test output
Type(obj) {
    if IsObject(obj)
        return "object"
    return "string"
}

; Run the tests
test := new TaskbarTest()
test.Run()
`}
        </CodeBox>
    </Chapter>
);
