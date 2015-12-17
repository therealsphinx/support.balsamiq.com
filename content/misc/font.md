---
date: 2015-05-09T16:46:35+02:00
title: "Balsamiq Mockups Font FAQ"
menu:
  menumisc:
    parent: misc
weight: 20
---
## What changed, and why?

**Mockups 2.1 introduces a new embedded font designed to work in all of our versions of Mockups.**

The font replaces Comic Sans on Windows and Linux, and Chalkboard on the Mac.

We made this change because the old fonts had **three major problems**:

### 1\. It rendered differently on different platforms

Take a look at these screenshots:

![](http://media.balsamiq.com/img/support/prodfaqs/fontrendering.png)

Since one of the strengths of Mockups is [collaboration](http://balsamiq.com/products/mockups#collaboration), this was unacceptable. The same wireframe has to be readable in the same way by everyone involved. Starting with Balsamiq Mockups 2.1, the mockup above will look like this, whether you're running Windows, OS X, Linux, Mockups for Desktop, a plugin version or myBalsamiq...

![](http://media.balsamiq.com/img/support/prodfaqs/fontrendering21.png)

### 2\. Text would get clipped

This was an infuriating clipping bug that [affected hundreds of our users](http://community.balsamiq.com/balsamiq/topics/font_rendering_problem_after_upgrading_to_flash_10_2) due to the fact that the Flash Player, which we use, is notoriously buggy when it comes to measuring the widths of system fonts. We now embed the Balsamiq Mockups font in our application, which makes the problem go away.

### 3\. It was Comic Sans and Chalkboard

On Windows and Linux, up to Mockups 2.0, we used Comic Sans. On Mac we switched to Chalkboard, but even that was very close to Comic Sans (aka _the font people love to hate_).

With this new font, your designer friends won't mock you any more.

## My old Mockups have changed. What gives?

It's true, this new font has different metrics (we modelled it after Helvetica, not Comic Sans) and we switched the default weight to be regular instead of bold, so some of the widths are different and some of your old mockups might not align perfectly.

Hopefully this won't be a big problem, as wireframes made with Mockups are supposed to be rough sketches, not pixel-perfect. We barely noticed the change in most of our wireframes after switching ourselves.

If this is a problem for you, there are a number of ways to work around it:

1.  Remember that this problem is temporary, it will go away as you start working on new wireframes.
2.  You can fix your old mockups by tweaking the size and position of your controls.
3.  If you're in the middle of something and don't have time to fix everything, we suggest rolling back to 2.0 until your current project is over. You can download 2.0 from our [builds archive](http://builds.balsamiq.com/archives/).
4.  If you really really like the old fonts, you can specify them using a [configuration file](http://support.balsamiq.com/customer/portal/articles/111759). Note that **this will bring back the clipping bug**, as you'll be using a system font instead of the embedded one. Here's how to set it up:
    *   Download one of these custom configuration files, depending on your operating system: [for Windows or Linux](http://media.balsamiq.com/img/support/prodfaqs/fontcfgwin/BalsamiqMockups.cfg), [for Mac](http://media.balsamiq.com/img/support/prodfaqs/fontcfgosx/BalsamiqMockups.cfg).
    *   Save or move it to your Local Store Folder. You can find this folder by opening the "About" dialog and clicking on the "Open Local Store Folder" link (or go to [this page](http://support.balsamiq.com/customer/portal/articles/1033437) to see folder locations for all operating systems).  

        ![](http://media.balsamiq.com/img/support/docs/m4d/aboutdialog.png) ​
5.  If none of the above is acceptable to you and are willing to share your bmml files with us, send them to [support@balsamiq.com](mailto:support@balsamiq.com) and we'll fix them up manually for you.

## Some characters disappeared! What should I do?

A drawback of using an embedded font is that if a particular character (glyph) is not in the font, it will simply get skipped. Non-embedded fonts don't have this issue because the Operating System knows how to automatically fall back to a different font when this happens.

We embedded a large number of glyphs into our font, as you can see below:

[![](http://media.balsamiq.com/img/support/prodfaqs/fontglyphs.png)](http://balsamiq.com/products/mockups/glyph-viewer)

You can [use our Glyph Viewer](http://balsamiq.com/products/mockups/glyph-viewer) to copy and paste the glyphs we support into Mockups controls.

We can add more in future releases, but we don't want to add too many or the loading time will suffer.

So, what should you do if some of your characters don't show up?

*   The recommended (quickest and easiest) thing to do is to turn on "Use System Fonts" from the View menu. You'll lose the handwritten font, but you'll see every glyph you'll ever need. Note that you may experience clipping of components because you're using a system font rather than our embedded font. If that's the case, a workaround is to add an extra space at the end of your text strings or resize controls to fit.
*   Another option is to use a [configuration file](http://support.balsamiq.com/customer/portal/articles/111759) to switch to a font you like. Note that **this will bring back the clipping bug**, as you'll be using a system font instead of the embedded one. Here's how to set it up:
    *   Download one of these custom configuration files, depending on your operating system: [for Windows or Linux](http://media.balsamiq.com/img/support/prodfaqs/fontcfgwin/BalsamiqMockups.cfg), [for Mac](http://media.balsamiq.com/img/support/prodfaqs/fontcfgosx/BalsamiqMockups.cfg).
    *   Save or move it to your Local Store Folder. You can find this folder by opening the "About" dialog and clicking on the "Open Local Store Folder" link (or go to [this page](http://support.balsamiq.com/customer/portal/articles/1033437) to see folder locations for all operating systems).  

        ![](http://media.balsamiq.com/img/support/docs/m4d/aboutdialog.png)​
