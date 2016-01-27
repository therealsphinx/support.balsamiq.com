---
date: 2015-05-09T16:46:35+02:00
title: "Can I Install Mockups from the Command Line?"
menu:
  menuinstallation:
    parent: installation
weight: 210
---
Mockups 3 for Desktop can be registered and unregistered via the command line with the following commands:

## Installing and Uninstalling

To install Mockups 3 for Desktop to the Program Files directory, use the following command. You can change the target directory to the folder of your choosing by replacing "C:\Program Files (x86)" with your chosen directory.

`Balsamiq_Mockups_3.exe -silent -desktopShortcut -programMenu -location "C:\Program files (x86)" -allowDownload`

To uninstall Mockups 3 for Desktop, enter the following commands into an elevated Command Prompt.

`wmic
product where name=”Balsamiq Mockups 3” call uninstall /nointeractive`

* * *

## Registering and Unregistering

Before registering Mockups 3 for Desktop, you will have to locate your registration email. The License Name and License Key can be found there.

To register Mockups 3 for Desktop, use the following command.

`"C:\Program Files (x86)\Balsamiq Mockups 3.exe" register LICENSENAME LICENSEKEY`

If your license name has a space in it, you will need to wrap the name in quotes.

To unregister Mockups 3 for Desktop, use the following command.

`"C:\Program Files (x86)\Balsamiq Mockups 3.exe" unregister`

* * *

## Additional Resources

Looking for information on how to perform a silent installation of Mockups for Desktop on many end-user machines? [Here you go](/installation/silentinstall/).
