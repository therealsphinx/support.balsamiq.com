---
date: 2015-05-09T16:46:35+02:00
title: "Silent Mockups for Desktop Installation"
menu:
  menuinstallation:
    parent: installation
weight: 130
---
This page is for IT administrators who need to install Mockups for Desktop on multiple machines.

One of our customers, Sean of Shogantech, has also written [an excellent article detailing the process he used for successfully installing](http://www.shogan.co.uk/?p=641) and registering Mockups for a Terminal Server (Remote Desktop Server) environment.

**Note:** The file names have been updated for Balsamiq Mockups 3\. The application file is now called "Balsamiq Mockups 3.exe." The installation file name can be found on our [downloads page](https://balsamiq.com/download).

## A note about licensing

You are responsible for complying with our [End User License Agreement](https://balsamiq.com/eulas) and only install Mockups for Desktop for the appropriate number of end-users allowed by the license you purchased.

* * *

## Windows Machines

1.  Make sure Mockups for Desktop is NOT installed on the target machines.
2.  Download MockupsForDesktop.zip _With Adobe Air bundled_ from [our downloads page](https://balsamiq.com/download). It contains a "ready to run" version, with Adobe Air "in its belly".
3.  Copy the zip to the target machine and unpack it (preferably in the Program Files folder)
4.  On the target machine, use this command to register Mockups for Desktop:  
    `"C:\Program Files\Balsamiq Mockups 3.exe" register LICENSENAME LICENSEKEY`  
    replacing LICENSENAME and LICENSEKEY with the license information you received when you purchased. The register command needs to be run as the user that will use the application.

* * *

## Mac Machines

1.  Download and mount MockupsForDesktop.dmg from [our downloads page](https://balsamiq.com/download).
2.  Copy the contained file "MockupsForDesktop.app" to your Applications folder.
3.  to register Mockups for Desktop, run this command on Terminal:  
    `/Applications/Balsamiq\ Mockups\ 3.app/Contents/MacOS/Balsamiq\ Mockups\ 3 register LICENSENAME LICENSEKEY`  
    replacing LICENSENAME and LICENSEKEY with the license information you received when you purchased. The register command needs to be run as the user that will use the application.

* * *

## How to uninstall a previous version before updating

To silently update Mockups to a newer version you first have to uninstall the old version.

*   In OS X, it is enough to drag the "/Applications/Balsamiq Mockups" folder to the trash. To automate that, use the command:  
    `rm -r /Applications/Balsamiq\ Mockups\ 3.app/`
*   In Windows, delete the folder you copied the Mockups for Desktop folder into when you installed it.
