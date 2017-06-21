---
title: Radio Buttons and Checkboxes
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 30
---

Radio button and checkbox controls each allow users to select items from a list. Deciding when to use which one can be challenging, so this article explains the differences between them and when and how to use each. 

## When to Use Radio Buttons and Checkboxes

Like [dropdown menus](../dropdown/), radio buttons and checkboxes are appropriate when there is a pre-defined range of selection options. The difference between them is that radio buttons are for cases where **only a single selection is valid** (marital status, gender, etc.), whereas checkboxes support **zero or more selections** (preferred activities or interests, for example).

Unlike [dropdown menus](../dropdown/), radio buttons and checkboxes let users see all options at once. This can make selection faster. Their primary limitation is the amount of space they take up. Because of this, the [GNOME Human Interface Guidelines](https://developer.gnome.org/hig/stable/radio-buttons.html.en) recommend no more than "about eight" choices for a single group.

![](//media.balsamiq.com/img/support/tutorials/ui101/date-time-radio-checkbox.png)

The most difficult scenario for choosing between radio buttons and checkboxes is when there is a binary (e.g., yes/no) choice, since both controls could be used. The deciding factor should be whether the *second choice becomes obvious from the first one*. In the example above, radio buttons are used for Digital vs. Analog in the time options. These alternatives are familiar, but there could still be some doubt if only one were used with a checkbox. The alternative to "Show AM/PM", when using a checkbox, becomes *don't* show AM/PM, which is unambiguous.


---

## How to Use Radio Buttons and Checkboxes

### Guidelines for Both

* Use a label to describe the group of choices *and* a label for each option within it, unless it is a single checkbox (see examples below)
* Vertical alignment is easier to read and parse. Use horizontal or rectangular alignments only if they greatly improve the layout of the window. ([*GNOME Human Interface Guidelines*](https://developer.gnome.org/hig/stable/check-boxes.html.en))
* These controls shouldn't initiate actions on their own. Use a [button](../buttons/) instead. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/buttons/radio-buttons/))
* Users should be able to click/tap the button/checkbox *or* its label to activate it
* Be considerate when setting the default selection. Avoid [dark patterns](https://darkpatterns.org/).

### Guidelines for Radio Buttons

* Always use at least two radio buttons together. It doesn't make sense to use only one.
* Some guidelines state that one option in a radio button group should always be selected by default. If unsure which option that should be, add an explicit no choice option (such as "Unsure", "None", "Decline to State").

### Guidelines for Checkboxes

* Avoid using negative language in labels as they can be counterintuitive, e.g., "Don't sign me up". ([*U.S. Web Design Standards*](https://standards.usa.gov/components/form-controls/#checkboxes))

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/radio-checkbox.png)

---

## Types of Radio Buttons and Checkboxes

### States

As with most form controls, radio buttons and checkboxes can be disabled as needed. One state that is unique to radio buttons and checkboxes is the non-binary **indeterminate** (also called mixed) state (neither on nor off).

The indeterminate state should *only* be used "to indicate that an option is set for some, but not all, child objects. [It] must not be used to represent a third state." ([*KDE Visual Design Group/HIG*](https://community.kde.org/KDE_Visual_Design_Group/HIG/CheckBox))

The example below shows all states:

![](//media.balsamiq.com/img/support/tutorials/ui101/radio-checkbox-states.png)


### Variations

A **scrolling checkbox** group can be used when the number of items isn't known in advance or can be customized by the user and space is limited.
![](//media.balsamiq.com/img/support/tutorials/ui101/radio-checkbox-scrolling-checkbox.png)

On **mobile**, radio buttons and checkboxes can look different in order to be optimized for touch. On iOS, for example, check marks can be used for mutually exclusive options instead of radio buttons. And checkbox functionality may be indicated by a toggle switch instead.

![](//media.balsamiq.com/img/support/tutorials/ui101/radio-checkbox-mobile-variations.png)

---

## Related Controls 

* [Dropdown menus](../dropdown/)
