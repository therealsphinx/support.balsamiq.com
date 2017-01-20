---
title: Mockups for Desktop Stuck on Launch or Opening a BMPR?
date: '2015-05-09T14:46:35.000+00:00'
weight: 180
menu:
  menudesktop:
    weight: 180
draft: ''

---

{{% alert info %}}**Note:** If you're getting an error opening a specific BMPR file, check out this [Backup FAQ](https://support.balsamiq.com/desktop/backup/) instead. {{% /alert %}}

In some rare cases, Mockups for Desktop will get stuck on launch, only showing the loading screen and not progressing.

When this happens, make you sure you are running the most [up-to-date version of Balsamiq Mockups 3 for Desktop](https://balsamiq.com/download). If updating doesn't solve the issue, the following workaround usually fixes things:

1.  Quit the app (you might have to Force Quit or kill the process).
2.  Find your Local Data Storage Folder following [these instructions](/desktop/localstore/).
3.  Delete the MockupsSettings.db file.
4.  Restart the application.

This will reset Mockups to all the defaults regarding which panels should be open, if markup should be visible or not and other little things, but it will also likely fix the "stuck on launch" issue.
