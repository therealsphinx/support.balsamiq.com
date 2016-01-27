---
date: 2015-12-16T12:00:00+01:00
title: "Multiple Selection in Mockups Controls"
menu:
  menututorials:
    parent: tutorials
weight: 250
---

If you ever wanted to show more than one line selected in your lists, you've come to the right place.

Balsamiq Mockups only supports single selection in list controls right now, but there are two easy ways to simulate multiple selection. Watch the video below to see them in action, or read on.

{{< yt 1EwG8o92yVs >}}

The tricks below work for any kind of list control: List, Data Grid, Accordions, Combo Boxes, Menus...

## Technique #1: Use a Semi-Opaque Borderless Rectangle 

Here's how to simulate multiple selection by using a semi-opaque borderless rectangle:

1.  Select your list control
2.  In the Property Inspector, set the Selection to "None"
3.  Add a Rectangle control
4.  Set its Border Style to "No Border"
5.  Set its background color to "blue"
6.  Set its opacity to 25%
7.  Move and resize the rectangle so that it overlays the line of your list control you want to show as selected
8.  Duplicate the rectangle and move and resize it again, to show other list lines selected.

You can even group the semi-opaque rectangle and transform it to a symbol (call it something like "Selection Overlay," for instance). This will make it easier to use from the UI library or Quick Add.

* * *

## Technique #2: Duplicate and Crop 

Here's how to simulate multiple selection by using the "duplicate and crop" trick:

1.  Select your list control
2.  In the Property Inspector, set the Selection to the first row you want selected
3.  Duplicate the list control (CTRL+D)
4.  In the Property Inspector, set the Selection of this duplicate control to the next row you want selected
5.  Group the duplicate (CTRL+G)
6.  Crop it, selecting an area that shows the selected row but not the selected row of the original control
7.  Move the duplicate to overlay it over the original
8.  (optional) Group the two together for easier moving/resizing

That's it! We will support multiple selection natively one day, but hopefully these two tricks will help in the meantime.