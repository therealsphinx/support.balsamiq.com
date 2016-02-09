---
date: 2015-05-09T16:46:35+02:00
title: "What Should I Do If Mockups Crashes for Me?"
menu: "menudesktop"
weight: 220
---
{{% alert info %}}**Note:** If you are experiencing crashes or freezes when you start Mockups 3, see [this FAQ](/desktop/stuckonlaunch/) instead.{{% /alert %}}

We sometimes get reports of Balsamiq Mockups crashing. It's pretty rare, and we built [auto-save](/desktop/autosave/) into our products exactly to mitigate this issue.

Sometimes it's the Mockups for Desktop application that crashes, sometimes it's the browser that's running the Mockups editor.

Here's what to do if Mockup crashes for you more than once or twice.

---

## Update Mockups

*   If you're running myBalsamiq or the web demo, you're always be running the latest version automatically.
*   In all other cases, it might help to update to the latest version of Mockups, which you can find [on our download page](https://balsamiq.com/download).

---

## Update Your Adobe Software

The first thing to do in this case is to make sure you're running the latest Flash Player or Adobe Air.

**If you're running myBalsamiq, a plugin version of Mockups or the web demo**

Update the Flash Player from [http://get.adobe.com/flashplayer](http://get.adobe.com/flashplayer)

Follow the instructions on that page and try again.

**If you are running Mockups for Desktop on Windows**

Update Adobe Air from [http://get.adobe.com/air](http://get.adobe.com/air/)

_(We bundle a version of Adobe Air with Mockups 3 for Desktop on the Mac, so updating Air isn't necessary.)_

---

## If the Problem Persists

Software should never, under any circumstance, be able to crash the underlying platform technology it relies on. Regular HTML or Javascript pages should never be able to crash the browser, Java applications should never be able to crash the JVM, and our software should never be able to crash the Flash Player or Adobe Air.

If a crash happens, Adobe wants to know about it. Crash bug repors are prioritized above everything else. Trust me, I used to work  there. :)

You can report a crash bug here: [https://bugbase.adobe.com/index.cfm?event=newBug](https://bugbase.adobe.com/index.cfm?event=newBug).

You can also report your issue on the [Flash Player Community Forums](http://forums.adobe.com/community/flashplayer) or on the [Adobe Air Community Forums](http://forums.adobe.com/community/air).

---

## If All Else Fails

If Mockups for Desktop really doesn't work for you, why don't you give myBalsamiq a try? It is our web application and has all the features of Mockups, with the addition of project-based collaboration and communication, and it runs in the browser. Read more about it [here](https://balsamiq.com/products/mockups/mybalsamiq).

If instead it's the web version that's giving you trouble, try [Mockups for Desktop](https://balsamiq.com/products/mockups)! You can upload and download your files to myBalsamiq and the plugin versions if you need to.

* * *

## Known Crash Issues and Workarounds

### Air Crash Due to Graphic Switching (Macbook pro) on OS X

This problem seems to be related to Adobe AIR, OS X 10.7.2 (and newer), and the automatic switching between integrated and discrete graphics cards in recent Macbook Pros. Launching Chrome or Firefox works because they force the switch to the discrete graphics card.

If you turn off the **“Automatic graphics switching” option under "Energy saver" preferences** it may work...

Related links: [one](http://jmilbery.com/2011/10/26/getting-adobe-air-3-x-to-work-on-lion-10-7-2/) and [two](http://www.youneedabudget.com/forum/ynab-f38/ynab-crashing-some-macs-after-updating-t13475.html#p91745).

### Adobe Air License Agreement Keeps Showing up on Windows

Some users reported that when they try to open Mockups for Desktop, the Adobe Air License Agreement comes up. After clicking on AGREE the window closes but nothing happens. Launching Mockups again, the License agreement window is presented another time, and so on…

The problem seems related to AIR not being able to save a file that records that you accepted the License Agreement. You can try this fix:

1.  Go to folder c:\users\my-user\Appdata\Roaming\Adobe\AIR (replace my-user with your login name)
2.  Rename eulaAccepted file to eulaAccepted-old
3.  Restart Mockups. After the License Agreement, the app should launch.
