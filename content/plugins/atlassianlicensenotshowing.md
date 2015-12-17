---
date: 2015-05-09T16:46:35+02:00
title: "Mockups for Confluence or Mockups for JIRA says it's Unlicensed, but it is!"
menu:
  menuplugins:
    parent: plugins
weight: 80
---

If you bought a license of Mockups for Confluence or Mockups for JIRA from Balsamiq, installed it, and your instance is still showing the plugin as "Unlicensed" or "Free Trial", this article is for you.

First of all, your plugin is working correctly, you did everything right.

We offer what Atlassian calls "dual licensing" for our plugin, meaning that you can purchase it either from Atlassian via the Atlassian Marketplace or directly from Balsamiq. The pros and cons of each option are described [here](http://support.balsamiq.com/customer/portal/articles/542517).

The problem you are seeing is because the Universal Plugin Manager (what you're using when you go to "Manage Add-Ons" on your Confluence or JIRA installation) ONLY understands Marketplace-issued licenses. It doesn't recognize that the plugin is indeed licensed via the Balsamiq-issued key, so it just treats it as a free trial. You can safely ignore those messages and continue working. If you want to verify the real status of your plugin, go to the Configure link. You'll find lots of accurate info there. :)

[![](https://media.balsamiq.com/img/support/docs/confluence/unlicensed/upmlies.png)](https://media.balsamiq.com/img/support/docs/confluence/unlicensed/upmlies.png)

