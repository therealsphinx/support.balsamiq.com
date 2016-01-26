---
date: 2015-05-09T16:46:35+02:00
title: "Can I Install Mockups from the Command Line?"
menu:
  menudesktop:
    parent: desktop
weight: 150
---
Mockups 3 for Desktop can be registered and unregistered via the command line with the following commands:

## Installing and Uninstalling

To install Mockups 3 for Dekstop to the Program Files directory, use the following command. You can change the target directory to the directory of your choosing by replacing "C:\Program Files (x86)" with your chosen directory.

`Balsamiq_Mockups_3.exe -silent -desktopShortcut -programMenu -location "C:\Program files (x86)" -allowDownload`

To uninstall Mockups 3 for Desktop, use the following steps.

`Open an elevated Command Prompt
Type "wmic" (without the quotes)
Type "product where name=”Balsamiq Mockups 3” call uninstall /nointeractive" (without the quotes)`

## Registering and Unregistering

To register Mockups 3 for Desktop, use the following command.

`"C:\Program Files (x86)\Balsamiq Mockups 3.exe" register LICENSENAME LICENSEKEY`

To unregister Mockups 3 for Desktop, use the following command.

`"C:\Program Files (x86)\Balsamiq Mockups 3.exe" unregister`

## Additional Resources

Looking for information on how to perform a silent installation of Mockups for Desktop on many end-user machines? [Here you go](/installation/silentinstall/).
