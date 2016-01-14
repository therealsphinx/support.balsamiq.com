---
date: 2015-05-09T16:46:35+02:00
title: "Upgrading From Old Versions of Confluence"
menu:
  menuplugins:
    parent: plugins
weight: 150
---

Due to changes Atassian made to macro handling, upgrading versions of Confluence prior to 3.5.7 is not a cut-and-dry process (as much as we wish it were!)

In order to update Mockups for Confluence, and your older Confluence server, you need to follow these steps:

1. Upgrade your Confluence server to 3.5.7 (if you have already upgraded past this, you will have to downgrade to 3.5.7 temporarily.)
2. Install Mockups for Confluence version 2.2.10 which you can [download here](https://marketplace.atlassian.com/plugins/com.balsamiq.confluence.plugins.mockups/versions).
3. Once Mockups 2.2.10 is installed, you can safely upgrade your Confluence server to the latest version.
4. After the your Confluence server has been upgraded, you can also upgrade Mockups for Confluence to the latest version.

{{% alert warning %}}**Note:** Depending on your current maintenance period, you may have to [update your license](https://balsamiq.com/buy/#c).{{% /alert %}}

Following these steps should allow you to gracefully upgrade your Confluence server, and ensuring that Mockups continues to function properly!
