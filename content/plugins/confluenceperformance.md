---
title: 'Speeding up Mockups 3 for Confluence Cloud'
date: '2015-05-09T14:46:35.000+00:00'
weight: 170
menu:
  menuplugins:
    weight: 170
draft: ''

---

We have gotten a lot of feedback about the performance of Mockups 3 for Confluence Cloud in regards to displaying mockups on the Confluence page. The good news is that, if you update to the latest version of Mockups 3 for Confluence Cloud, new projects should load faster automatically.

If you want to learn how to speed up your existing projects, keep reading!

## Updating Your Existing Projects to the New Mockups Macro

After you have updated to the [latest version of Mockups 3 for Confluence Cloud](https://marketplace.atlassian.com/plugins/com.balsamiq.mockups.confluence/cloud/overview), your new projects will automatically update to the new, faster Mockups Macro.

Existing projects will need to be updated manually, but it's a super quick process. To identify a project using the old macro, look in the upper left corner of the mockup viewer. If you see the mockup browser or the menubar toggle, that's the older macro.

![](https://media.balsamiq.com/img/support/prodfaqs/oldUX.png)

Here are the steps for turning the old macro into the new one:

* In the Confluence page editor, edit the macro, and launch the Balsamiq Editor.

![](https://media.balsamiq.com/img/support/prodfaqs/editconfluence.gif)

* Once in the Mockups Editor, export all mockups to PNG, and then close the editor. The macro will be updated once you save it _and_ the Confluence page.

![](https://media.balsamiq.com/img/support/prodfaqs/pngexport.gif)

{{% alert info %}}**Note:** If your project contains multiple mockups, you can select which mockup will be displayed by selecting the **Starting Mockup** in the macro editor{{% /alert %}}

Once the macro is updated, the Confluence page should load much quicker, and will be completely compatible with Confluence's Export to PDF functionality.

Please [let us know](https://balsamiq.com/company/contact/#/t/m4c?_k=0mmlaq) if you have any questions or comments about this, we're always here to help! :)

---

## You Mentioned Feedback - What Issues Are You Addressing?

We got a lot of feedback from our users about how they use Mockups in Confluence and released this update to address the two biggest issues:

*   **Performance:** A Confluence page could take too much time to load because there were several macros on the page - all of which had to load our new viewer. This has been resolved by displaying a static PNG, rather than an interactive viewer (which is still accessible via the [Full Screen Presentation Mode](https://docs.balsamiq.com/desktop/fullscreen/)). The PNG should load immediately.

*   **PDF export:** Because the viewer was loading images differently, exporting a Confluence page to PDF wouldn't result in any mockups being shown in the export. Again, we have implemented static PNGs to the rescue!
