---
title: Creating Your First Mockup
date: '2015-12-16T11:00:00.000+00:00'
weight: 40
menu:
  menututorials:
    weight: 40
draft: ''

---

This tutorial is designed to guide you through creating your first **Mockup**. It will cover a basic overview of the product as well as some of the **features** and UI **controls**.

Here is the Mockup that you will create in this tutorial:

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-final_mockup.png)

​If you're new to the idea of Mockups (also called wireframes), you may want to check out [UX Apprentice](http://www.uxapprentice.com/) to start with an overview of what Mockups are, and where they fit into a UX Design process. 

* * *

## Basic Concepts and Terminology

Here are some of the basic components of Balsamiq Mockups:

*   **UI Control** - A standard user interface "widget" (e.g., Button, Image, Dialog Window). The building blocks of any Mockup.
*   **Canvas** - The grid-lined area where UI Controls are placed.
*   **UI Library** - A row of UI Controls that can be dragged onto the Canvas.
*   **[Property Inspector](https://docs.balsamiq.com/desktop/inspector/ "Page describing the Property Inspector")** - A configuration panel that contains common actions (e.g., alignment, layering) and properties that are specific to each UI Control.


{{% alert info %}}**Note:** The [Mockups Application Overview](https://docs.balsamiq.com/desktop/overview/) has more information about the elements and controls in Balsamiq Mockups.{{% /alert %}}


![](https://media.balsamiq.com/img/support/docs/m4d/b3/ui-overview.png)

* * *

## Adding the First Few Controls

To create the Mockup shown above, begin by dragging the **Browser** UI Control onto the Canvas.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-browser_window.png) ![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-edit_browser.png)

The content of nearly all controls in Balsamiq Mockups is defined by simple text. When a control is first added to the canvas, it will be shown in edit mode, often with hints about how to use it. For the Browser control, you can specify the title bar and URL text, or just use the default.

{{% alert info %}}**Tip:** To edit a control at any time, double-click on it, or press Enter when it is selected.{{% /alert %}}

Next, resize the control to the desired size using the resize cursor controls at the edges and corners of the control.

Continue by adding the following controls to the canvas: **Title**, **Text**, and **Image** as shown below. Note that alignment guides appear just inside the edges of the Browser Window control when you move them toward the edges and that the controls "snap" to these guides.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-3_controls.png)

{{% alert info %}}**Tip:** Controls can also be added using the [**Quick Add**](https://docs.balsamiq.com/desktop/overview/#the-quick-add-tool) box by typing the first few letters of the name of the control and pressing Enter.{{% /alert %}}

To change the size of the text for the product name label, select the **Title** control and change the font size using the **Property Inspector**.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-resize_text.png)

For the product description placeholder text in the **Text** control, enter your own placeholder text, or begin typing "lorem" and [Lorem Ipsum](http://www.lipsum.com "Description of 'Lorem Ipsum' text") text will automatically be generated.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-lore.png)![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-lorem_ipsum.png)

After resizing the Image control, your Mockup should look something like this:

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-phase1.png)

{{% alert info %}}**Tip:** If you have trouble selecting a control that is in front of another control, try ["locking"](https://docs.balsamiq.com/desktop/controls/#locking-ui-controls) the background control using the lock icon in the toolbar to prevent it from being selected.{{% /alert %}}

* * *

## Creating and Aligning the Image Pager Controls

The next step is to add the little dots beneath the Image that indicate a rotating content or image control.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-image_pager.png)

In this part of the tutorial you will learn about adding **Icons** and **Grouping** and **Aligning** controls.

Begin by adding the **Icon** control to the canvas.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-icon_search.png)

Next, click the arrow inside the "Icon Search" box to open the **Icon Library**.

![](https://media.balsamiq.com/img/support/docs/m4d/b3/icon-library.png)

This window shows the list of all the icons included with Balsamiq Mockups. You can filter them by category or search by name. Once you have chosen an icon you can choose from one of six sizes. For this tutorial, select the Circle icon and set the size to "XS" and click "Select".

{{% alert info %}}**Tip:** The "Icon Search" box in the **Icon** Property Inspector behaves like the "Quick Add" box and displays icons matching the text you enter (try typing "arrow", for example). (More about using icons can be found on the [Working with Icons](https://docs.balsamiq.com/desktop/icons/) page.){{% /alert %}}

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-1_icon.png)

Add three more icons to the right of the Circle icon (use the Circle Outlined this time). You can also copy and paste once you've added the second icon. Using your mouse, position the icons next to each other. You can see that alignment guides appear both horizontally and vertically, helping you place them appropriately.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-4_icons.png)

{{% alert info %}}**Tip:** Use the Duplicate keyboard shortcut (CTRL + D on Windows; CMD + D on Mac) to quickly replicate items on the canvas. ([More keyboard shortcuts here](https://docs.balsamiq.com/desktop/shortcuts/)){{% /alert %}}

Zooming out, your mockup should now look something like this.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-4_controls.png)

The next step is to center-align the four icons below the Image control. The procedure for doing this is to first group the icons and then align the icon group with the image control.

To group a set of controls, select them by drawing a boundary around them with your cursor or holding down SHIFT and selecting each one with your mouse. Then click the **Group** command in the Toolbar or press CTRL+G (on Windows; CMD + G on Mac).

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-group.png)

{{% alert info %}}**Tip:** Another way to select only controls that are in the foreground (besides "locking" background controls) is to hold down the ALT/OPTION key while dragging the mouse. This will prevent background controls from being selected.{{% /alert %}}

Grouped controls can be identified by a light purple color and will remain grouped until Ungrouped (shortcut: CTRL/CMD + SHIFT + G). To align the grouped icons with the Image control, select them both and use the **Align Center** icon in the Property Inspector.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-align_center.png)

You can move the pager controls closer to the Image control either by using the keyboard arrow keys or by using the mouse and the alignment guides.

{{% alert info %}}**Tip:** Holding down SHIFT while moving controls with the arrow keys will move them 10 pixels at a time (instead of the usual 1 pixel).{{% /alert %}}

The Mockup so far, with the pager controls added.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-4_controls_aligned.png)

* * *

## Completing the Mockup

The remainder of the Mockup consists of a set of tabs, more text, and a chart.

Add a **Tabs Bar** control and place it in the bottom half of the Mockup.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-tabs_edit.png)

Commas are used to create tabs in this control, so you can create as many tabs as you like simply by entering additional text separated by a comma. Entering the text "Overview, Features, Design, Specs", for example, will create the tabs shown below.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-tabs.png)

To show the "Overview" tab as selected or highlighted, use the **Selection** property as shown below.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-selection.png)

After resizing the Tabs Bar control to match the width of the page, add **Label** and **Text** controls to create something like this:

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-phase3.png)

You can format text as **bold**, _italic_, or [hyperlinked](# "This Link Doesn't Go Anywhere") in Many Controls by Enclosing the Text with Special Characters. Use \*text\* for Bold, \_text\_ for Italics, or [text] for Hyperlinks.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-paragraph_formatting.png) ![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-formatted_text.png)

{{% alert info %}}**Tip:** Learn more formatting tips on the [Working with Text](https://docs.balsamiq.com/desktop/text/#basic-formatting) page.{{% /alert %}}

Finally, drag a **Chart: Column** control into the empty area inside the Tabs Bar as a finishing touch to complete the Mockup.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-chart.png)

* * *

## Exporting and next Steps

Now that the Mockup is finished, you can easily export it as an image via the Project > Export > Mockup to PNG... (shortcut: CTRL/CMD + R) menu. Other export options are described in the [Exporting your Mockups](https://docs.balsamiq.com/desktop/exporting/) article.

![](https://media.balsamiq.com/img/support/tutorials/firstmockup/FirstMockup-export.png)

* * *

Congratulations! You have now completed your first wireframe with [Balsamiq Mockups](https://balsamiq.com/products/mockups)! You are on your way to become an User Experience (UX) expert! :)

For more information on any of the topics covered here, see the [Full Mockups Documentation](https://docs.balsamiq.com/desktop/).
