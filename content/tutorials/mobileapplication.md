---
date: 2015-12-16T12:00:00+01:00
title: "Creating a Mobile Application"
menu:
  menututorials:
    parent: tutorials
weight: 50
---

## Introduction 

In a [previous tutorial](/tutorials/firstmockup/) we learned how to create a mockup for a basic web site. In this tutorial, we'll go through the steps of creating a series of mockups for a (fake) mobile banking application. Some other resources that might be useful in conjunction with this tutorial are the [Mockups Application Overview](https://docs.balsamiq.com/desktop/overview/) and [Tips for Working with Controls](/tutorials/controls/).

Here are the mockups we'll be creating in this tutorial:

[![](https://media.balsamiq.com/img/support/tutorials/mobileapp/all_mockups.png)](https://media.balsamiq.com/img/support/tutorials/mobileapp/all_mockups_big.png "Click to enlarge")

* * *

## Screen 1: Login 

The first mockup is the Login screen.

<div style="float:left;width:250px;">

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/login.png)

</div>

<div style="float:left;clear;none;">

Controls used for this screen:

*   iPhone
*   Title / Headline
*   Text Input / Text Field (x2)
*   Icon (x2)
*   Label / String of Text
*   Button
*   ON/OFF Switch / Toggle
*   Link

</div>

This video shows the steps taken to create this screen:

{{< yt 2fYyzBqxCGk >}}

Start by adding the **iPhone** control to the canvas. To save time, you can type the word "iphone" into the ["quick add"](https://docs.balsamiq.com/desktop/overview/#the-quick-add-tool) box rather than dragging the control from the UI Library. You can press the "/" or "+" key to send focus to quick add.

Next, we'll add a **Title/Headline** control and use the alignment guides to center it within the iPhone control. For the username and password fields, we can add a **Text Input** control, followed by a few tips and tricks. The first is to wrap text in dashes ("-") to show it as disabled. This gives the effect of showing the text as a placeholder that will get overwritten when the user enters their own information. After creating and formatting the username field, you can duplicate that field to quickly create the password field. The shortcut for duplicating controls is CTRL/CMD + D (_[full list of keyboard shortcuts here](https://docs.balsamiq.com/desktop/shortcuts/)_).

Next up is the save username checkbox, which consists of a **Label** and iPhone **On/Off Switch** control. Since this is a mobile app, we'll use the on/off control instead of a regular checkbox. To make it easier you can align and group these controls outside of the iPhone controls so that the other alignment guides don't interfere. Grouping the controls allows you to more easily center align them as a unit inside the iPhone control.

For the login button, we want a big, colorful button, so we can increase the text size, change the background color, and enlarge the dimensions of the **Button** control. For the "forgot password" link, we'll use the **Link** control.

Finally, for the icons, we'll add an **Icon** control and use the icon search to change it to a cloud icon. For the second icon we can again use the duplicate shortcut, and then change its size in the [Property Inspector](https://docs.balsamiq.com/desktop/inspector/).

**Tips and tricks used in this mockup:**

*   Use "/" or "+" to jump to quick add
*   Show text as disabled by surrounding it with -dashes-
*   Use CTRL/CMD + D to duplicate
*   Group controls (CTRL/CMD + G) to make it easier to align them together
*   You can resize both the size of a button and its text

* * *

## Screen 2: Accounts 

Next, the Accounts screen.

<div style="float:left;width:250px;">

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/accounts.png)

</div>

<div style="float:left;clear;none;">

Controls used for this screen:

*   iPhone
*   Icon
*   Icon and Text Label (x2)
*   Paragraph of Text
*   iPhone Menu
*   Pointy Button / iPhone button
*   Label / String of Text (x2)

</div>

This video shows the steps taken to create this screen:

{{< yt n_1nKef2GNY >}}

For this screen we'll have the background pattern of the **iPhone** control set to show the top and bottom toolbar areas, which we'll be using for icons. We'll also be using more iPhone-specific controls (the iPhone menu and iPhone button controls).

After adding, resizing, and centering the **Label** control, we'll add an **iPhone menu** control.

For the iPhone menu, here's the text we'll use:

    Checking, $1397.65 >
    Savings, $2383.41 >

The commas divide the larger, left-aligned text from the smaller, right-aligned text. The ">" symbols create drill-down arrows inside the control. The result looks like this:

![Account list](https://media.balsamiq.com/img/support/tutorials/mobileapp/account_list.png)

We'll then add some "legalese" that is often used in these types of applications. As the designer or developer, we just need to have a placeholder to remind ourselves that this space is reserved for a block of text. We can use the [Lorem Ipsum shorcut](http://support.balsamiq.com/customer/portal/articles/110121#macros) to quickly generate this placeholder text. Do this by typing "lorem" in a **Paragraph** control and it will immediately fill with [Lorem Ipsum](http://www.lipsum.com/) text. We'll then center it and change its color to grey to make it less prominent (because, as we all know, users probably won't read it!).

At this point it looks like this and is starting to come together.

![Account screen, before buttons](https://media.balsamiq.com/img/support/tutorials/mobileapp/accounts_2.png)

We now need to add the logo and some navigation.

For this, we'll start with the **Icon and Text Label** control, which is kind of a two-in-one control that's ideal for iPhone tabs. For the "Accounts" screen (which we're on), we'll use the dollar sign icon. We'll change the color to a light blue to show that this is the active tab. Again, we'll use the duplicate shortcut to create another icon and text label control of the same size, and position it inline with the first one using the alignment guides. We'll use an envelope icon for the "Deposit" tab and set the color to white to show it as not selected.

The last steps are to add an **iPhone/pointy button** for the log out button, and label and icon controls for the logo. We'll remove the pointy arrow, since it's logging the user out, rather than taking them back or forward. We'll set the icon and label colors to white to make them stand out against the grey toolbar background.

**Tips and tricks used in this mockup:**

*   Use the Icon and Text Label control to save time over using two separate controls
*   Use color to indicate selection states
*   Leverage the hidden power of text formatting syntax (in the iPhone Menu control, for example)
*   Use Lorem ipsum for placeholder/legal text
*   There are lots of icons included with Mockups. In most cases what's there is enough. Don't worry if you don't find one that's perfect, at this stage you just want something that'll work (although it is possible to [add your own icons](https://docs.balsamiq.com/desktop/icons/#adding-your-own-custom-icons))

* * *

## Screen 3: Transactions 

<div style="float:left;width:250px;">

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/transactions.png)

</div>

<div style="float:left;clear;none;">

Controls used for this screen:

*   iPhone
*   Pointy Button / iPhone button (x2)
*   Label / String of Text (x2)
*   iPhone Menu
*   Icon and Text Label (x2)
*   Icon

</div>

This video shows the steps taken to create this screen:

{{< yt VZL-mn_dyiQ >}}

This screen is similar to the Accounts screen, but does even more with the iPhone menu control.

Because it is so similar, instead of creating a new mockup from scratch, we can use the "New Clone of Current Mockup" command (_shortcut: CTRL/CMD + SHIFT + N_) to clone the Accounts mockup and work off of it.

Rather than adding controls to the mockup first, we start by removing some controls from the middle of the Accounts screen and renaming the **Label** to "Transactions".

For the transactions list we want the first item to show as greyed-out, since it is a pending transaction (designated as "processing"). We also want the transaction date and vendor to be on separate lines. Like this:

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/transactions_list.png)

We're really getting fancy with the **iPhone menu** control here. This is what the text looks like to generate the transactions list:

    -*Processing*\r_Auto Klub_-, -\-$23.79- >
    *2/25/13*\r_King Burger_, -$10.22 >
    *2/25/13*\r_Jeremy's_, -$44.18 >
    *2/24/13*\r_Home Mart_, -$97.65 >
    *2/24/13*\r_King Burger_, -$9.03 >
    *2/24/13*\r_Coffee Stop_, -$3.83 >

At its most basic, it is just like the syntax we used for the Accounts list. That is: text, a comma, then the ">" character to create an arrow. But, in this case, we've also used some text formatting tricks to modify the way the text looks. We're leveraging several of the [text style shortcuts](https://docs.balsamiq.com/desktop/text/#basic-formatting) in the same control.

Here's a closer look:

*   -dashes- to indicate disabled/greyed-out text
*   _underscores_ for italicized text
*   *asterisks* for bold text
*   "\r" to wrap text onto a new line
*   used the "\" character to escape the minus sign and prevent it from being treated as a formatting character (shown before the dollar amount in the first transaction)

The one other difference is that we've removed the border around the iPhone menu control to make it look like more of a table.

Other than that, there's not really anything new on this screen. We're still in the Accounts category, so the tabs at the bottom don't change. Also, the icon is already there, we're just centering it in the iPhone control. And, since this screen is a drill-down from the Accounts screen, we're using the pointy version of the **iPhone button** to create a back button.

**Tips and tricks used in this mockup:**

*   Use the "New Clone of Current Mockup" command (shortcut: CTRL/CMD + SHIFT + N) to clone an existing mockup
*   More text formatting tricks: bold, italics, line breaks, escaping characters used for formatting
*   You can combine multiple text formatting styles together in one control
*   Remove the border around the iPhone menu control to make it look like a table or grid
*   Pointy (for drill-down pages) vs. non-pointy (for non-breadcrumb links) button states in the iPhone menu control

* * *

## Screen 4: Deposit 

<div style="float:left;width:250px;">

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/deposit.png)

</div>

<div style="float:left;clear;none;">

Controls used for this screen:

*   iPhone
*   Pointy Button / iPhone button
*   Label / String of Text (x2)
*   iPhone Menu
*   Icon (x3)
*   Paragraph of Text
*   Icon and Text Label (x2)

</div>

This video shows the steps taken to create this screen:

{{< yt S-EGudXdETk >}}

This Deposit screen is also similar to the Accounts screen, so we can again use the "New Clone of Current Mockup" command to get it started, as shown in the video.

After changing the screen title, we can update the colors of the icons in the tabs bar at the bottom to indicate that, now, the Deposit category is selected. And now, again, we'll be doing something new with the **iPhone menu** control. This time, we want to show icons next to the text in the menu. To do this, we can do this by using the "space for a big icon" text formatting syntax ("__ "), as shown in the template when the control is added.

This results in text that looks like this:

    __ Front of Check, >
    __ Back of Check, >

After that, we simply shrink down the Lorem Ipsum text and add two more icons. For the icons, we'll add a camera icon, set it to the right size and color and position it using the alignment guides and the arrow keys on the keyboard.

**Tips and tricks used in this mockup:**

*   Use the "__ " placeholder for big icons in the iPhone menu control
*   Use the keyboard arrow keys to move ("nudge") controls by a small amount

* * *

## Screen 5: Camera 

<div style="float:left;width:250px;">

![](https://media.balsamiq.com/img/support/tutorials/mobileapp/camera.png)

</div>

<div style="float:left;clear;none;">

Controls used for this screen:

*   iPhone
*   Rectangle / Canvas / Panel (x4)
*   Label / String of Text
*   Pointy Button / iPhone button (x2)
*   Image

</div>

This video shows the steps taken to create this screen:

{{< yt ONDIRDmXm3A >}}

For the Camera screen, we want to create the effect of a mobile phone camera window looking down at a check. For this screen we'll be using some of the more general-purpose controls, the **Rectangle** control in particular.

For the alignment guides (the "frame" inside the camera window), we want a rectangle with only the corners showing. We can do this quite easily by layering three rectangle controls over each other. The first one will be a white rectangle with a black border. This is what will actually be shown on the screen. Next, we want to cover up the middle parts of each border. So, we'll add two white rectangles and turn off their borders. Now we can lay one across the horizontal borders of the bottom rectangle and another across the vertical borders. Changing the overlay rectangle colors to grey, it looks like this:

![img](https://media.balsamiq.com/img/support/tutorials/mobileapp/rectangle_overlays.png)

It doesn't need to be precise. We just want to demonstrate the effect of guides for positioning the check. Similarly, we don't need to replicate the look of an actual check for this screen. That's why, in the next step, adding the default placeholder for the **Image** control is sufficient. Anyone involved in this project is going to know what it represents.

Finally, for the camera buttons, we'll start with the rectangle control again. This time, we'll change the opacity to allow the check and guides to show through. For the camera button, we'll use the **iPhone button** so that we can get the nice, iPhone-looking rounded corners. Note that you don't have to include text in your buttons. If you add an icon and delete the placeholder text the icon will get centered in the button. The last steps are adding the Cancel button and the grey overlay instruction text.

**Tips and tricks used in this mockup:**

*   The Rectangle control is very versatile, especially when used in multiple layers
*   Only show as much detail as necessary to communicate the design concept
*   You can use icons in buttons (with or without text)

* * *

## Linking them all together 

Finally, we can use the linking feature to link all five mockups together and show them in Full Screen Presentation mode. The [Linking Mockups Together](https://docs.balsamiq.com/desktop/linking/) article describes this feature in more depth. The following video demonstrates the process of locating each button or control that should be connected and linking them to the appropriate mockups.

{{< yt PeV4gF0b-Xk >}}

Using links and presenting a set of mockups to your stakeholders will help you tell the story around what you're trying to build as well as giving you a feel for the workflow and any usability pain points. Using linking, you can also [generate a clickable PDF](https://docs.balsamiq.com/desktop/exporting/#exporting-to-pdf) that you can distribute.

**Tips and tricks for linking:**

*   Link your mockups together at the end of the process, once all your screens have been added and finalized
*   Use the CTRL + Tab keyboard shortcut to quickly switch to the next mockup file

* * *

Lastly, here's the full tutorial in one video (sped up with music added):

{{< yt v8AjVL4ZdS0 >}}