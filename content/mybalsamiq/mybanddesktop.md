---
date: 2015-05-09T16:46:35+02:00
title: "myBalsamiq and Mockups for Desktop"
menu:
  menumybalsamiq:
    parent: mybalsamiq
weight: 10
---

This document aims to answer a few common questions between the interaction between myBalsamiq and Mockups for Desktop.

* * *

## Savings when using both versions

### We already purchased some Mockups for Desktop licenses. Can we save some money on myBalsamiq?

Yes. As existing Mockups for Desktop customers, your myBalsamiq site owner will be able to apply half of what you paid for Mockups for Desktop towards myBalsamiq credit, and you can continue to [keep using](http://support.balsamiq.com/customer/portal/articles/1485219-software-maintenance#when) your Mockups for Desktop license!  

Note: this credit does not apply to free desktop licenses received as part of a purchase of a plugin version of Mockups.

For example:

*   You purchased a 5-pack of Mockups for Desktop for $429.
*   You are interested in signing up for myBalsamiq at the Starter level (10 projects, $24/month).
*   You are eligible for a $429/2 = $214.50 credit towards your myBalsamiq subscription. At Starter level, that's more than 8 months of service for free.

See all the myBalsamiq pricing options [here](https://balsamiq.com/buy/#myb).

To apply for the credit you must be the site owner of a myBalsamiq site with a paid subscription:

1.  Sign up for a myBalsamiq site.
2.  Confirm your email address.
3.  Sign up for a subscription plan from the Site Settings / Payment Info screen. The first month's subscription will be charged to your card when you sign up.
4.  Go to the Site Settings / Desktop Licenses screen and scroll down to the "Existing Mockups for Desktop Customers" section.  
    ![](https://media.balsamiq.com/img/support/docs/myb/apply1.png)
5.  Click on "+ Add another" and enter your License Information exactly as shown in the Mockups for Desktop email receipt you received when you first purchased Mockups for Desktop.  
    ![](https://media.balsamiq.com/img/support/docs/myb/apply2.png)
    If you cannot find that email, you can retrieve your License Information from [here](http://scripts.balsamiq.com/lostkey.php).
6.  Click "Add License" and voila', your myBalsamiq credit will be applied towards future subscription payments.

### We are myBalsamiq customers and want to purchase Mockups for Desktop as well. Can we get a discount?

Yes, you can. Mockups for Desktop is great for when you are offline or need support for more keyboard shortcuts or to take advantage of the higher performance provided by desktop applications.

myBalsamiq site owners and staff members can purchase Mockups for Desktop at $45/user, roughly a 50% discount off the [full price](https://balsamiq.com/buy) of a single user license.  (This pricing is not available for "project members"). You'll be able to continue to use your Mockups for Desktop Companion license even if you stop your myBalsamiq subscription.

To purchase Mockups for Desktop at a discounted rate:

1.  Sign up for a myBalsamiq site.
2.  Confirm your email address.
3.  Sign up for a subscription plan from the Site Settings / Payment Info screen.
4.  Go to the Site Settings / Desktop Licenses screen and click on the "Purchase Mockups for Desktop" button.
5.  Select the number of users and proceed to Checkout. After your purchase, you will receive a single license to share with all your assigned users.

* * *

## Using both versions effectively

{{% alert warning %}}**Heads up!** If you are using Balsamiq Mockups 3 for Desktop (the current version), please read [this article on using Balsamiq Mockups 3 with myBalsamiq](http://support.balsamiq.com/customer/portal/articles/2051535) first.{{% /alert %}}

### Using the same version of Mockups for Desktop 

The current versions of myBalsamiq and Mockups for Desktop use different file formats. You can export between the two, but if you are planning to work on the same projects in both versions you may want to use the [old version of Balsamiq Mockups for Desktop](https://balsamiq.com/download/archives/?prefix=mockups-desktop/2.2.28/) (2.2.28) until myBalsamiq supports the [new file format](https://docs.balsamiq.com/desktop/transition/).

### Starting on the Desktop and moving to myBalsamiq

This workflow is useful when you are offline, or if you are used to the power of the Mockups for Desktop editor and find the myBalsamiq editor too limited (see [below](#roadmap) for our roadmap).

{{% alert info %}}**Note:** If you are using [Balsamiq Mockups 3](https://docs.balsamiq.com/desktop/intro/), refer to [these instructions](https://docs.balsamiq.com/desktop/exporting/) instead.{{% /alert %}}

There are three ways to move your Mockups for Desktop work to myBalsamiq:

1.  **If you already have a single BMML file saved on your Desktop**: you can simply upload it in myBalsamiq. Go to the project you want to upload it to and select "Upload a new mockup..." from the "New Mockup" button menu.  
    ![](https://media.balsamiq.com/img/support/docs/myb/uploadnewmockup.png)
    Select your file, write some notes if you want and hit Upload. Note that this won't work if your mockup uses assets not previously uploaded to myBalsamiq.
2.  **If you are working on a new quick, single screen mockup**: work on the Desktop, then when you're ready use the "Export Mockups XML" feature (CTRL+SHIFT+E) to put the mockup data into the clipboard, then go to myBalsamiq, click on "new mockup", select "Project / Import Mockups XML", paste the mockup data and hit OK. You can now make the final tweaks, write some Mockups Notes ("View / Show Mockups Notes" if it's not already on) and save your mockup.
3.  **If you have a set of mockups**: if you have a set of mockups and maybe use symbols, the quickest way to bring the whole project to myBalsamiq is via the project upload feature on the home page. Simply use "Project > Export > Project to BMMLs Zip,,," in Balsamiq Mockups 3 and upload it via the "Upload new project..." link on the home page: myBalsamiq will create all the necessary assets and mockups for you.  
    ![](https://media.balsamiq.com/img/support/docs/myb/uploadproject.png)

**A note about assets (images, symbols libraries, and custom icons):**

If you are using images, symbols libraries, or custom icons in your Mockups, they will not be uploaded when you import or upload individual BMML files. Your assets will have to be uploaded individually to the project assets in myBalsamiq to work.

BMML files are XML files, and they reference the paths to images where they existed on your computer when you placed them in your Mockup. This is why we recommend using the assets/ subfolder for your images. When following that best practice, you will be able to Zip up an entire project folder with your images in the assets subfolder, and the Mockups will work with images as they did on the Desktop.

### Downloading mockups to work offline

Sometimes you will want to download your data from myBalsamiq onto your desktop in order to work offline or to backup your data. You can either download the whole project or a single mockup.

**To download a whole project**: select "Download Project..." either on the home page (in the menu for the project's book) or in the project page (in the edit menu).  
![](https://media.balsamiq.com/img/support/docs/myb/downloadprojecthome.png) ![](https://media.balsamiq.com/img/support/docs/myb/downloadproject.png)

**To download a single mockup**: select "Download BMML" from the mockup menu in the project page or click on the "Download BMML" link under the mockup image on the single mockup page.  
![](https://media.balsamiq.com/img/support/docs/myb/downloadmockup1.png) ![](https://media.balsamiq.com/img/support/docs/myb/downloadmockup2.png)

{{% alert info %}}**Note:** If you are using [Balsamiq Mockups 3](https://docs.balsamiq.com/desktop/intro/), refer to [these instructions](https://docs.balsamiq.com/desktop/importing/#importing-mockups-from-a-previous-version-bmml-files) for importing files downloaded from myBalsamiq.{{% /alert %}}

### Uploading and replacing individual Mockups

After uploading a project .zip file, you will not be able to re-upload it to replace the project. Using an existing project name will show an error, and you will have to choose a different name.

**Upload individual mockups within the project** instead to replace the existing version. Use the drop down menu under New Mockup > Upload a new mockup... to replace the Mockup.

As long as the file names remained consistent in myBalsamiq and Desktop versions, the links will continue to work. The mockup history will show that a new version has been uploaded.

* * *

## Roadmap to a smoother future

Our goal is to make Mockups for Desktop sync seamlessly with myBalsamiq, so you will be able to work either on the myBalsamiq editor in the browser or in the Mockups for Desktop browser on your Desktop, and your data will automatically be synchronized everywhere.