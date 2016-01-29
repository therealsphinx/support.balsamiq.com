---
date: 2015-05-09T16:46:35+02:00
title: "How to Use Both the Confluence and JIRA Server Plugins and Manage My Users via LDAP"
menu: "menuplugins"
weight: 100
---

This article is for IT administrators whose companies:

*   bought both Balsamiq Mockups for Confluence and Balsamiq Mockups for JIRA Server
*   do not use the built-in user management of Confluence and JIRA

## How Does Plugin Authentication Work in General? 

As specified in our [Confluence Admin Guide](https://docs.balsamiq.com/confluence/admin-guide/#selecting-mockup-editors) and in our [Mockups for JIRA Server Admin Guide](https://docs.balsamiq.com/jira/admin-guide/#selecting-mockup-editors) the plugin looks for a user group called _balsamiq-mockups-editors_ to decide which users should have access to create and edit mockups.

## What If I Want My JIRA Server Editor Group and My Confluence Editor Group to Be Separate?

Say you bought a 10-editor license of Mockups for Confluence and a 3-editor license of Mockups for JIRA Server.

If you added your 10 wiki editors to the balsamiq-mockups-editors group, the JIRA Server plugin would complain that you're going over your 3-user limit.

There is a solution to this tricky problem!

1.  Delete the _balsamiq-mockups-editors_ group
2.  Create a new _balsamiq-mockups-editors-confluence_ group and add your chosen wiki editors to it
3.  Create a new _balsamiq-mockups-editors-jira_ group and add your chosen bug tracker editors to it

That's it! Each plugin will now look at its own group, and live happily ever after. :)
