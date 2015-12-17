---
date: 2015-05-09T16:46:35+02:00
title: "Mockups OS X Quicklook Plugin"
menu:
  menuplugins:
    parent: plugins
weight: 130
---

The Balsamiq Mockups OS X Quicklook Plugin is a free Quicklook Plugin for OS X, which allows you to preview BMML files directly from Finder, without having to open [Balsamiq Mockups for Desktop](https://balsamiq.com/products/mockups).

{{% alert info %}}**NOTE:** the Balsamiq Mockups OS X Quicklook Plugin is **currently in public beta.** If you find issues with it, please report them [here](https://community.balsamiq.com/balsamiq/topics/mockups_os_x_quicklook_plugin_ready_for_testing) or [via email](mailto:support@balsamiq.com?subject=OSX Quicklook Plugin).{{% /alert %}}

## Installing the plugin

To install the plugin:

1.  Visit our [pre-release downloads page](https://balsamiq.com/download/next) and download the "OS X Quicklook Plugin" (link on the right of the page, under Plugins).
2.  In Finder, in your Downloads folder, double-click on the .tar.gz file you downloaded to expand it (Finder might have done this step for you already).
3.  Open a Terminal window.
4.  Copy/paste this command: <tt>mkdir ~/Library/QuickLook/</tt>(if you get a "File exists" error, you can simply ignore it).
5.  Copy/paste this command: <tt>cp -r ~/Downloads/MockupsQuickLook.qlgenerator ~/Library/QuickLook/</tt>
6.  Wait a few seconds for Finder to notice the new Quicklook plugin
7.  That's it! Try it on a bmml file, it should "just work"! :)

## Using the plugin

The Balsamiq Mockups OS X Quicklook Plugin works just like other Quicklook plugins.

![](https://media.balsamiq.com/img/support/resources/finder.png)

Just select a BMML file in Finder and hit the spacebar. A pop-up will open showing you the mockup. If you have [Mockups for Desktop](https://balsamiq.com/products/mockups) installed, you can also click on "Open with Balsamiq Mockups" to open the file for editing.

![](https://media.balsamiq.com/img/support/resources/popup.png)

The plugin also creates thumbnails of your BMML files, so you can see them at a glance directly from the Finder's icon view:

![](https://media.balsamiq.com/img/support/resources/thumbs.png)

The plugin also works in Spotlight, as shown below:

![](https://media.balsamiq.com/img/support/resources/spotlight.png)

## Updating the plugin

To update the plugin to a newer version, just follow the same installation instructions above, to overwrite the plugin to the new version.

## Uninstalling the plugin

To uninstall the plugin:

1.  Open a Terminal window
2.  Copy/paste this command: <tt>rm -rf ~​/Library/QuickLook/MockupsQuickLook.qlgenerator</tt>

## Reporting issues

The Balsamiq Mockups OS X Quicklook Plugin is **currently in public beta.** If you find issues with it, please report them [here](https://community.balsamiq.com/balsamiq/topics/mockups_os_x_quicklook_plugin_ready_for_testing) or [via email](mailto:support@balsamiq.com?subject=OSX Quicklook Plugin).

Enjoy!
