---
date: 2015-05-09T16:46:35+02:00
title: "Failed to validate your plugin license. or Your add-on license is invalid. error when registering Mockups for Confluence or JIRA"
menu:
  menuplugins:
    parent: plugins
weight: 110
---

You get these errors if you enter a license you purchased from Balsamiq in the plugin's licensing box provided by Atlassian's Universal Plugin Manager.

![](/customer/portal/attachments/50780)

That text area only accepts Atlassian Marketplace-generated licenses. To enter your Balsamiq-generated license information, click on **Configure**, and you'll see this screen:

![](/customer/portal/attachments/50781)

Click on "Balsamiq", and you'll see this screen:

![](/customer/portal/attachments/50782)

Enter your license name and key there, and it will work.  

Once you have successfully registered your Balsamiq-generated license, the Atlassian registration screen will still show your plugin as "[Unlicensed](/plugins/atlassianlicensenotshowing/)."

{{% alert warning %}}**Heads up:** If you have a Marketplace trial license installed, you might not see a **Configure** button at all. Delete your Marketplace license key and hit update to make the Configure button re-appear. This will allow you to enter a Balsamiq-issued license instead.{{% /alert %}}