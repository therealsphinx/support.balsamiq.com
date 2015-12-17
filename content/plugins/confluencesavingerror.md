---
date: 2015-05-09T16:46:35+02:00
title: "Error Saving Mockups in Confluence"
menu:
  menuplugins:
    parent: plugins
weight: 120
---

We received some reports of errors while saving mockups on Confluence. To troubleshoot these problems check the error message containing the stack trace.

If the stack trace is similar to the one below, chances are that the error is caused by an outdated version of another plugin called Scaffolding.

To solve the problem you just have to update the Scaffolding plugin to version 3.2 or later.

Here some threads about this error:

*   [http://community.balsamiq.com/balsamiq/topics/ cant_save_mockups_in_confluence_3_1](http://community.balsamiq.com/balsamiq/topics/cant_save_mockups_in_confluence_3_1)
*   [http://forums.atlassian.com/thread.jspa?threadID=42380](http://forums.atlassian.com/thread.jspa?threadID=42380)

<pre>[ERROR] Fri Mar 12 10:17:25 PST 2010 [com.atlassian.confluence.event.ConfluenceEventManager]
An exception was encountered while processing the event: com.atlassian.confluence.event.events.
content.page.PageUpdateEvent[source=com.atlassian.confluence.pages.DefaultPageManager@785afd68] 
Throwable: 
java.lang.NullPointerException

2011-11-16 07:59:11,832 ERROR [http-8080-29] [atlassian.confluence.event.ConfluenceEventManager]
publishEvent An exception was encountered while processing the event: com.atlassian.confluence.event.
events.content.page.PageUpdateEvent[source=com.atlassian.confluence.pages.DefaultPageManager@8439ff]
-- url: /plugins/servlet/mockups | userName: XXXX | referer: http://XXXXXXXX/download/resources/
com.balsamiq.confluence.plugins.mockups/mockups-web.swf
java.lang.NullPointerException 
(...)
net.customware.confluence.plugin.scaffolding.ScaffoldInfo.findSubmittedFields(ScaffoldInfo.java:264) 
at net.customware.confluence.plugin.scaffolding.ScaffoldInfo.findFields(ScaffoldInfo.java:230) 
at net.customware.confluence.plugin.scaffolding.ScaffoldInfo.initFields(ScaffoldInfo.java:133) 
at net.customware.confluence.plugin.scaffolding.ScaffoldInfo.(ScaffoldInfo.java:142) 
at net.customware.confluence.plugin.scaffolding.ScaffoldInfo.(ScaffoldInfo.java:146) 
at net.customware.confluence.plugin.scaffolding.ScaffoldInfo.(ScaffoldInfo.java:111) 
(...)
</pre>
