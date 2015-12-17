---
date: 2015-12-16T12:00:00+01:00
title: "User Testing your iPad Wireframes"
menu:
  menututorials:
    parent: tutorials
weight: 200
---

When you're designing wireframes using Balsamiq Mockups you don't need to sweat the details, but _some_ of the details become more important when you start testing your wireframes. On an iPad, in particular, the wireframes have a much more immersive feel when they fit the viewport exactly, like the example below.

![insitu.jpg](https://media.balsamiq.com/img/support/tutorials/ipad/insitu.jpg)

This tutorial will help you ensure that your iPad wireframes are designed so that they fit nicely on an iPad when exported as images or a PDF.

**Note: You can download the file we'll be creating below from our [Mockups To Go site here](https://mockupstogo.mybalsamiq.com/projects/ios/iPad%20User%20Testing%20Template).**

* * *

## Step 1 - Add the iPad control 

First, add an iPad control to the canvas. Click on the iPad control to bring up the [Property Inspector](http://support.balsamiq.com/customer/portal/articles/110114). Exporting to the right dimensions works best with the **Top Bar off**, so turn it off in the Property Inspector. In the examples below we'll also turn the transparent background on, but you can leave it white if you prefer.

![PI-ipad.png](https://media.balsamiq.com/img/support/tutorials/ipad/PI-ipad.png)

This tutorial also assumes that you haven't resized the iPad control, so try to leave it as the default size (or you'll have to do some math in step 2!).

Next, click the Lock button in the Property Inspector (or **Edit > Lock**) to lock the control into place. This step isn't necessary, but it makes it easier to keep it in place when adding other controls on top of it.

Finally, right-click on the iPad control and select "Treat As Markup", as shown below. The reason for this will be explained later.

![markup.png](https://media.balsamiq.com/img/support/tutorials/ipad/markup.png)

* * *

## Step 2 - Add a rectangle control 

Now that we've added the iPad control, we want to make sure that what we put inside it is going to get exported in the same proportions as an actual iPad screen (not the same _dimensions_, but the same _aspect ratio_, which is **4:3** for the iPad).

To do this, add a **Rectangle / Canvas / Panel control** to the canvas. Now, select it and set the following properties in the Property Inspector:

1.  Set the **Size** to **549x732** (you can click inside the box to edit the numbers)
2.  Set the **Border Style** to **No Border** (the first option)

These settings are highlighted below:

![PI-rectangle.png](https://media.balsamiq.com/img/support/tutorials/ipad/PI-rectangle.png)

Next, move the rectangle over the iPad until both the vertical and horizontal center alignment guides appear over the iPad, like the image below. This will ensure that it is lined up with the iPad viewport.

![snap-rectangle.png](https://media.balsamiq.com/img/support/tutorials/ipad/snap-rectangle.png)

Finally, click on the rectangle and Lock it, just as we did with the iPad control. This will prevent it from moving around when you're adding new controls. You shouldn't be able to select either control at this point (you can always unlock a control by right-clicking over it and selecting "Unlock").

**Download this template from our [Mockups To Go site here](https://mockupstogo.mybalsamiq.com/projects/ios/iPad%20User%20Testing%20Template).**

* * *

## Step 3 - Create your mockup 

Now, the fun part. Create your mockup, making sure that all of your controls fit inside the viewport/window of the iPad device (the alignment guides at the edges should help with this).

Here's an example:

![bmockups-sketch.png](https://media.balsamiq.com/img/support/tutorials/ipad/bmockups-sketch.png)

* * *

## Step 4 - Export your mockup 

Now that the mockup is done, you're almost ready to export. Since you don't want to view the iPad device control inside the iPad itself, we need to get rid of the iPad device in Balsamiq Mockups. Instead of deleting it, we can hide it using the [Show/Hide Markup](http://support.balsamiq.com/customer/portal/articles/110418) feature.

We've already set the iPad device as markup in step 1, now we just need to toggle the markup layer to hide it. Go to **View > Show Markup and uncheck it**. Or, click the hide markup button in the upper-right corner (to the left of the full-screen button). The iPad device should disappear.

Now, export your mockup as an [image](http://support.balsamiq.com/customer/portal/articles/111730#exportimage) or [PDF](http://support.balsamiq.com/customer/portal/articles/111730#exportpdf) via the File menu.

If you are exporting as PDF make sure that any other mockups you have open are also iPad mockups and have been treated similarly (so that all the PDF pages will be the same size). Also, set the Export Options to "Optimize for viewing" with no margins, as shown below.

![pdf-export.png](https://media.balsamiq.com/img/support/tutorials/ipad/pdf-export.png)

* * *

## Step 5 - Send to your iPad 

You can transfer your exported mockups to your iPad via email, Dropbox, or a variety of other methods. There are also several applications that you can use to view them on your iPad (these will usually be listed in the "Open in..." menu when you have the image or PDF selected).

We've found that the Apple **Photos** application works well for viewing mockups saved as images and the Apple **iBooks** application (free in the App Store) works well for viewing mockups saved as PDFs. The rectangle control we added in step 2 should ensure that your mockups are sized correctly in either of these applications.

If you've exported a mockup with links to a PDF the link targets should work, allowing you to interact with your mockups like a real product. This is great for user testing or informal review while the design is in progress!