---
title: Tabs
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 45
---

Using tabs to break up content into sections is a double-edged sword. On the one hand, it focuses attention on a subset of content to make the page easier to take in. On the other hand, it buries other content, making users guess where it is, or if it even exists.

In ["About Face 3: The Essentials of Interaction Design"](https://www.amazon.com/About-Face-Essentials-Interaction-Design/dp/0470084111), Alan Cooper says "navigation is excise" - meaning that any time a user is required to jump from one page to another, it adds a cognitive cost to their experience. The authors write: "the work that users are forced to do to get around in software and on Web sites is seldom aligned with their needs, goals, and desires" and urge designers to minimize the amount of navigation required.

## When to Use Tabs

Tabs are one of the most popular navigation patterns. The biggest advantage of tabs is that they are familiar and persistent, so that even when a user has navigated around in a site or application, they don't feel lost. 

![](//media.balsamiq.com/img/support/tutorials/ui101/bofa-tabs.png)

There are a few considerations to keep in mind when using tabs, however. Such as: 

* Only use tabs when there is a limited number of navigation options available ([up to 5 on mobile](https://www.smashingmagazine.com/2017/05/basic-patterns-mobile-navigation/#tab-bar), [less than seven  on desktop](https://community.kde.org/KDE_Visual_Design_Group/HIG/TabControl)).
* Tab width is usually determined by the text in each tab, so consider the impact of localization and font size adjustments.
* Only use tabs "to present closely related peer areas of content." Content separated by tabs should be related in some way and exist at the same level in a hierarchy. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/tab-views/))
* Avoid using tabs for sequential tasks or "wizards" - tabs should be able to be used independently from each other. ([*Microsoft Windows Desktop Guidelines*](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742441(v=vs.85).aspx))



---

## How to Use Tabs

* Avoid using multiple sets of tabs.
 * If you do, make sure to visually distinguish the second set from the first (see [variations below](#variations))
* Put the most important content in the first tab.
* Make sure the controls within a pane only affect content in the same pane. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/windows-and-views/tab-views/))
* You should never have only one tab. ([*Microsoft Windows Desktop Guidelines*](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742441(v=vs.85).aspx))
* Don't wrap tabs to a new line. If the tabs won't fit, consider using scrolling or drop-down tabs, as shown in the variations below.
* Be wary of using icons alone for tabs on mobile. Adding text above or below is recommended. In ["Basic Patterns For Mobile Navigation: Pros And Cons"](https://www.smashingmagazine.com/2017/05/basic-patterns-mobile-navigation/), the author writes: "for most icons, text labels are necessary to communicate meaning and reduce ambiguity." 
[![](https://www.smashingmagazine.com/wp-content/uploads/2017/05/bottom-navigation-icons-780w-opt.png)](https://www.smashingmagazine.com/2017/05/basic-patterns-mobile-navigation/#tab-bar)
* Consider vertical tabs when the number of horizontal tabs would be too many (or use a different kind of navigation entirely).

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/tabs.png)

---

## Types of Tabs

### States

![](//media.balsamiq.com/img/support/tutorials/ui101/tabs-states.png)

Tabs should have two primary states: **selected** and **non-selected**. A hover state can also be used to invite action, similar to a [button](../buttons/). As shown above, the selected tab should be visually distinct from the non-selected tabs, with the selected tab more prominent (higher contrast) than the others. Bold text can be used to emphasize the selected tab.


### Variations

Here are some common tab variations.

![](//media.balsamiq.com/img/support/tutorials/ui101/tabs-variations.png)

Tabs often have borders around them, but they aren't required.


---

## Related Controls 

* [Dropdown Menu (Combo Box)](../dropdown/)
