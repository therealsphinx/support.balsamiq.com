---
title: Alerts
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 40
---

Defining (and designing) an alert is tricky. Any UI control that captures the user's attention can be thought of as an alert. For the purposes of this guide, alerts are characterized by being interruptive and **requiring action to proceed**, unlike notifications or [validation messages](../validation/). 

## When to Use Alerts

Every alert guideline says to use alerts sparingly. Overwhelming users with alerts dilutes their importance and annoys users. The [Microsoft Windows Application Design Guidelines](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742473(v=vs.85).aspx) suggest when to use alerts this way: "Don't overwarn. Limit warnings to conditions that involve risk and are immediately relevant, actionable, not obvious, and infrequent. Otherwise, remove or rephrase the message."

It lists specific reasons for using alerts, such as:

* Awareness
* Error prevention
* Imminent problem
* Risky action confirmation
* Unintended consequence confirmations
* Clarifications

Here are some examples:

![](//media.balsamiq.com/img/support/tutorials/ui101/ios-alert.png)

![](//media.balsamiq.com/img/support/tutorials/ui101/windows-alert.png)

When designing forms, consider using inline [validation](../validation/) instead of (or in addition to) alerts. ([*U.S. Web Design Standards*](https://standards.usa.gov/components/alerts/))

---

## How to Use Alerts

The [macOS Human Interface Guidelines](https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/alerts/) are succinct in their guiding principle: "When an alert is necessary, your most important job is to **explain the situation clearly** and **give users a way to handle it**."

More specifically:

* Create specific, actionable, user-centered error messages. Users should either perform an action or change their behavior as the result of the message. ([*KDE Visual Design Group/HIG*](https://community.kde.org/KDE_Visual_Design_Group/HIG/Messages))
* Use pre-defined or system styles when possible. Don't deviate from familiar.
* Generally, use two-button alerts (for dialogs). ([*iOS Human Interface Guidelines*](https://developer.apple.com/ios/human-interface-guidelines/ui-views/alerts/))
* Express everything in the user’s vocabulary. Use clear language, free from jargon. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/alerts/))
* Ensure that the default button name corresponds to the action you describe. In particular, it’s a good idea to avoid using OK for the default button. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/alerts/))
* They should be easy to dismiss when appropriate (e.g., responding to Escape key or the Close button in a dialog, in addition to an explicit dismiss button or link).
* Refer to your existing style and tone guide if you have one ([you can find some inspiration here](http://voiceandtoneguides.webflow.io/), if you don't). As an example, the [Microsoft Windows Style and Tone guidelines](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742477.aspx) writes this about using "please" and "sorry": 
	* "Use please whenever its absence would be considered curt"
	* "Use sorry only in error messages that result in serious problems for the user"

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/alerts.png)


---

## Types of Alerts

### States

Similar to validation message, alerts can be used to communicate **errors** or provide **warnings** about potentially destructive actions. Unlike validation, however, alerts should generally not be used for **success** messages, unless it is to notify that an important action has completed.

![](//media.balsamiq.com/img/support/tutorials/ui101/alert-states.png)

### Variations

As shown above, alerts vary by operating system and platform. Most software platforms provide built-in alert components. It is best to use default system styles for alerts. Some operating systems allow for icons and/or color to differentiate states or types of alerts.

![](//media.balsamiq.com/img/support/tutorials/ui101/alert-variations.png)

---

## Related Controls 

* [Validation](../validation/)
* Notifications
