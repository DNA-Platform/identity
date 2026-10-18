import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ TaskbarManualTest..ahk - Manual Testing Script v1 ]]</Title>
        <CodeBox
            language="autohotkey"
        >
            {`${''}; TaskbarManualTest.ahk - Manual testing script for Taskbar library
; This script demonstrates and verifies key functionalities of the Taskbar library

#Include %A_ScriptDir%\\..\\src\\lib\\v1\\taskbar.ahk

; Create GUI for test controls
Gui, New, +AlwaysOnTop, Taskbar Library Manual Tests
Gui, Add, GroupBox, x10 y10 w480 h80, Taskbar Information
Gui, Add, Text, x20 y30 w70 h20, Position:
Gui, Add, Text, x90 y30 w100 h20 vTaskbarPosition
Gui, Add, Text, x20 y50 w70 h20, Dimensions:
Gui, Add, Text, x90 y50 w200 h20 vTaskbarDimensions
Gui, Add, Text, x20 y70 w70 h20, Item Count:
Gui, Add, Text, x90 y70 w50 h20 vTaskbarItemCount

Gui, Add, GroupBox, x10 y100 w480 h120, Taskbar Items
Gui, Add, ListBox, x20 y120 w300 h90 vItemsList gSelectItem
Gui, Add, Button, x330 y120 w150 h25 gRefreshItems, Refresh Items
Gui, Add, Button, x330 y150 w150 h25 gClickSelected, Click Selected Item
Gui, Add, Button, x330 y180 w150 h25 gRightClickSelected, Right-Click Selected Item

Gui, Add, GroupBox, x10 y230 w480 h120, Search and Filter
Gui, Add, Text, x20 y250 w70 h20, Search:
Gui, Add, Edit, x90 y250 w230 h20 vSearchText
Gui, Add, Button, x330 y250 w150 h25 gFindItem, Find Item
Gui, Add, Button, x20 y280 w150 h25 gShowRunningApps, Show Running Apps
Gui, Add, Button, x180 y280 w150 h25 gShowPinnedApps, Show Pinned Apps
Gui, Add, Button, x330 y280 w150 h25 gLaunchSelected, Launch Selected Item

Gui, Add, GroupBox, x10 y360 w480 h100, Item Details
Gui, Add, Text, x20 y380 w60 h20, Name:
Gui, Add, Text, x80 y380 w400 h20 vItemName
Gui, Add, Text, x20 y400 w60 h20, State:
Gui, Add, Text, x80 y400 w150 h20 vItemState
Gui, Add, Text, x240 y400 w60 h20, Target:
Gui, Add, Text, x300 y400 w180 h20 vItemTarget
Gui, Add, Text, x20 y420 w60 h20, Position:
Gui, Add, Text, x80 y420 w400 h20 vItemPosition

Gui, Add, StatusBar, vStatusBar

Gui, Show, w500 h500

; Initialize global variables
global taskbar := new Taskbar()
global selectedItem := ""
global items := []

; Populate initial data
GoSub, RefreshItems
UpdateTaskbarInfo()

return

; === Event handlers ===

RefreshItems:
    GuiControl,, StatusBar, Refreshing taskbar items...
    items := taskbar.GetItems(true)
    PopulateItemsList(items)
    GuiControl,, StatusBar, Found %itemCount% taskbar items.
return

SelectItem:
    Gui, Submit, NoHide
    if (ItemsList) {
        selectedItem := items[ItemsList]
        UpdateItemDetails(selectedItem)
        GuiControl,, StatusBar, Selected item: %selectedItem.name%
    }
return

ClickSelected:
    if (!selectedItem) {
        GuiControl,, StatusBar, No item selected!
        return
    }
    
    GuiControl,, StatusBar, Clicking item: %selectedItem.name%...
    result := selectedItem.Click()
    Sleep, 500
    GuiControl,, StatusBar, % (result ? "Successfully clicked item." : "Failed to click item.")
return

RightClickSelected:
    if (!selectedItem) {
        GuiControl,, StatusBar, No item selected!
        return
    }
    
    GuiControl,, StatusBar, Right-clicking item: %selectedItem.name%...
    result := selectedItem.RightClick()
    Sleep, 500
    GuiControl,, StatusBar, % (result ? "Successfully right-clicked item." : "Failed to right-click item.")
return

FindItem:
    Gui, Submit, NoHide
    if (!SearchText) {
        GuiControl,, StatusBar, No search text entered!
        return
    }
    
    GuiControl,, StatusBar, Searching for "%SearchText%"...
    foundItem := taskbar.FindItem(SearchText)
    if (foundItem) {
        ; Create a new array with just the found item
        foundItems := [foundItem]
        PopulateItemsList(foundItems)
        GuiControl,, StatusBar, Found item: %foundItem.name%
    } else {
        GuiControl,, StatusBar, No items found matching "%SearchText%"
    }
return

ShowRunningApps:
    GuiControl,, StatusBar, Getting running applications...
    runningApps := taskbar.GetRunningApps()
    PopulateItemsList(runningApps)
    GuiControl,, StatusBar, Found %itemCount% running applications.
return

ShowPinnedApps:
    GuiControl,, StatusBar, Getting pinned applications...
    pinnedApps := taskbar.GetPinnedApps()
    PopulateItemsList(pinnedApps)
    GuiControl,, StatusBar, Found %itemCount% pinned applications.
return

LaunchSelected:
    if (!selectedItem) {
        GuiControl,, StatusBar, No item selected!
        return
    }
    
    GuiControl,, StatusBar, Launching %selectedItem.name%...
    result := selectedItem.Launch()
    GuiControl,, StatusBar, % (result ? "Successfully launched application." : "Failed to launch application.")
return

GuiClose:
    ExitApp
return

; === Helper functions ===

UpdateTaskbarInfo() {
    GuiControl,, TaskbarPosition, % taskbar.position
    GuiControl,, TaskbarDimensions, % taskbar.width . " x " . taskbar.height
    GuiControl,, TaskbarItemCount, % items.Length()
}

PopulateItemsList(itemsArray) {
    ; Clear the listbox
    GuiControl,, ItemsList, |
    
    ; Add each item to the list
    itemList := ""
    Loop, % itemsArray.Length() {
        item := itemsArray[A_Index]
        itemList .= item.name . "|"
    }
    
    GuiControl,, ItemsList, % itemList
    global itemCount := itemsArray.Length()
    
    ; Update taskbar info display
    UpdateTaskbarInfo()
}

UpdateItemDetails(item) {
    if (!item) {
        GuiControl,, ItemName, N/A
        GuiControl,, ItemState, N/A
        GuiControl,, ItemTarget, N/A
        GuiControl,, ItemPosition, N/A
        return
    }
    
    GuiControl,, ItemName, % item.name
    GuiControl,, ItemState, % item.state
    GuiControl,, ItemTarget, % item.shortcut.targetPath
    
    posText := "X:" . item.position.x . " Y:" . item.position.y
                . " W:" . item.position.width . " H:" . item.position.height
    GuiControl,, ItemPosition, % posText
}`}
        </CodeBox>
    </Chapter>
);
