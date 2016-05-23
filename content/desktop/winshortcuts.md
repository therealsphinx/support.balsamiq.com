---
title: Why Doesn't Zoom to Fit All Work on Windows?
date: '2015-05-09T14:46:35.000+00:00'
weight: 240
menu:
  menudesktop:
    weight: 240
draft: ''

---
For users with Windows Vista and above, you may find that the Zoom to Fit All [keyboard shortcut](https://docs.balsamiq.com/desktop/shortcuts/) (CTRL+SHIFT+0) doesn't work. The reason for this is that Windows captures the input before it gets sent to Mockups 3 for Desktop, preventing the app from ever seeing it.

Luckily, the fix is super easy.

## On Windows Vista and Windows 7

You can follow the steps on [Microsoft's Help Center](https://support.microsoft.com/en-us/kb/967893) to disabled the keyboard command.

***

## On Windows 8 and Windows 10

The option for changing the shortcut is in a different place in Windows 8 and Windows 10. You will need to goto **Control Panel > Language > Advance Settings** and then find the **Change language bar hot keys** button.

![](https://media.balsamiq.com/img/support/docs/m4d/b3/ctrl_shift_0-windows_10.png)

From there click **Change Key Sequence...** and then set **Switch Keyboard Layout** to **Not Assigned**.
