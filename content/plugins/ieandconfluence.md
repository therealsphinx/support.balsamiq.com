---
date: 2015-05-09T16:46:35+02:00
title: "Old Mockups for Confluence Mockups Not Working in IE after Confluence Upgrade"
menu:
  menuplugins:
    parent: plugins
weight: 90
---

If you are a Confluence administrator and old mockups created with Mockups for Confluence have stopped working in IE after updating your Confluence installation, this document is for you.

![](https://media.balsamiq.com/img/support/docs/confluence/ie/pngbroken.png)​

**The problem:** old versions of Mockups for Confluence erroneously saved mockup image attachments with the wrong mime type (application/png or img/png). This was fine in older versions of Confluence, because they ignored the mime type we set and just inferred it from the image extension. Newer versions of Confluence now read the mime type from the attachment properties and return it, which breaks Internet Explorer (note that it doesn't break other browsers, they still understand that the content of the image is a real png and display it).

**The solutions:** first of all, make sure you are running a recent version of Mockups for Confluence (version 2.2.2 and above), since it now properly sets images to "image/png".

**To fix old images:** we suggest connecting to the Confluence database and updating all the wrong attachments in one go. Make sure you follow Atlassian's guidelines on how to connect to your DB (specifically make sure your DB is backed up and Confluence is not running), then connect to the database directly and run the following simple SQL query:

<pre>update attachments set contenttype = 'image/png'
  where contenttype = 'application/png' or contenttype = 'img/png'</pre>

This will fix all existing attachments. Restart Confluence, tell your users to clear their browsers' cache, and all the old image will show up. Problem solved! :)

* * *

Running a select to see how many attachments will be updated.:  
[![](https://media.balsamiq.com/img/support/docs/confluence/ie/pngselect.png)](/customer/portal/attachments/132444.png)

Running the update query.  
[![](https://media.balsamiq.com/img/support/docs/confluence/ie/pngupdate.png)](/customer/portal/attachments/132445.png)
