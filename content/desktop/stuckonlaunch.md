---
date: 2015-05-09T16:46:35+02:00
title: "Mockups for Desktop Stuck on Launch or Opening a BMPR?"
menu: "menudesktop"
weight: 180
---
In some rare cases, Mockups for Desktop will get stuck on launch, only showing the loading screen and not progressing.

When this happens, make you sure you are running the most [up-to-date version of Balsamiq Mockups 3 for Desktop](https://balsamiq.com/download). If updating doesn't solve the issue, the following workaround usually fixes things:

1.  Quit the app (you might have to Force Quit or kill the process).
2.  Find your Local Data Storage Folder following [these instructions](/desktop/localstore/).
3.  Delete the MockupsSettings.db file.
4.  Restart the application.

This will reset Mockups to all the defaults regarding which panels should be open, if markup should be visible or not and other little things, but it will also likely fix the "stuck on launch" issue.

## Trouble Opening a Specific BMPR File?

If you notice that opening a specific project BMPR is what makes Mockups get stuck, please send it to [support@balsamiq.com](mailto:support@balsamiq.com) and we'll see if we can debug the issue. We'll keep your data confidential and only long enough to debug the issue

In addition, starting with Mockups for Desktop 3.2.1, we have added a backup feature to preserve your data. You can read more about it [here](/desktop/backup/). Opening your BMPR's backup may also solve the issue.
