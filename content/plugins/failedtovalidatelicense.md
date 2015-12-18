---
date: 2015-05-09T16:46:35+02:00
title: "Failed to Validate Your Plugin License. Or Your Add-on License Is Invalid. Error When Registering Mockups for Confluence or JIRA"
menu:
  menuplugins:
    parent: plugins
weight: 110
---

You get these errors if you enter a license you purchased from Balsamiq in the plugin's licensing box provided by Atlassian's Universal Plugin Manager.

![](https://media.balsamiq.com/img/support/docs/confluence/upmerror.png)

That text area only accepts Atlassian Marketplace-generated licenses. To enter your Balsamiq-generated license information, click on **Configure**, and you'll see this screen:

![](https://media.balsamiq.com/img/support/docs/confluence/configure.png)

Click on "Balsamiq", and you'll see this screen:

![](https://media.balsamiq.com/img/support/docs/confluence/configurebalsamiq.png)

Enter your license name and key there, and it will work.  

Once you have successfully registered your Balsamiq-generated license, the Atlassian registration screen will still show your plugin as "[Unlicensed](/plugins/atlassianlicensenotshowing/)."

{{% alert warning %}}**Heads up:** If you have a Marketplace trial license installed, you might not see a **Configure** button at all. Delete your Marketplace license key and hit update to make the Configure button re-appear. This will allow you to enter a Balsamiq-issued license instead.{{% /alert %}}
