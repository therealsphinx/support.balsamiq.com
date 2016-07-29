---
title: 'Performance and/or PDF export issues in Mockups 3 for Confluence Cloud'
date: '2015-05-09T14:46:35.000+00:00'
weight: 170
menu:
  menuplugins:
    weight: 170
draft: ''

---

We recently improved the behavior of Mockups 3 for Confluence Cloud so that the tool works more smoothly for our existing Confluence users.

Starting from Version 1.1.0, we now display an image (static PNG file) as a placeholder for your mockups.

## What issues does this address?

After collecting enough feedback about the way people use our tool in the Confluence environment, we made this change to address mainly two issues:

*   **Perfomance issue:** Confluence page would take too much time to load because many mockup macros were included in the page. This is taken care of now that we display an image of your mockup instead of an interactive viewer (option still accessible via the [Full Screen Presentation Mode](https://docs.balsamiq.com/desktop/fullscreen/))

*   **PDF export:** Exporting a PDF of your Confluence page would result in having **no** Mockup included in the file. This is now solved since mockup images are included in the PDF export.

## Awesome! How do I get it?

First, update your Mockups 3 for Confluence Cloud to the latest version.

While new projects will have these improvements by default, existing projects will (at first) still display the interactive mockup macro. You can easily identify the interactive macro:

![](https://media.balsamiq.com/img/support/prodfaqs/oldUX.png)

Keeping the interactive macro can be handy if the performance doesn't suffer from it. If on the other hand, you'd like to "transform" those macros to images (static PNG files), here are the steps to follow:

* Edit the Confluence page, then Edit the macro and launch the Balsamiq editor.

![](https://media.balsamiq.com/img/support/prodfaqs/editconfluence.gif)

* Once in the editor, export all mockups to PNG and quit the editor. Then save the macro and save the Confluence page.

![](https://media.balsamiq.com/img/support/prodfaqs/pngexport.gif)

You know have an PNG macro that you can copy, download and that will be included in your any PDF export of your Confluence page! The page will load much faster and you can now easily add multiple macros on the page if needed.

Please [let us know](https://balsamiq.com/company/contact/#/t/m4c?_k=0mmlaq) if you have any question or comment about this, we're always here to help! :)
