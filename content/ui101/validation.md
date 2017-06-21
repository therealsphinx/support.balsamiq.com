---
title: Validation
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 35
---

Validation is often used as a light-weight alternative to [alerts](../alerts/). It is a great way to present feedback or guidance to users with limited interruption.

## When to Use Validation

Validation is sometimes used in place of, or in addition to, [alerts](../alerts) to provide in-context error messages. But it's not just for telling users what they have done wrong. It can also be used to tell users when they are doing something right, or to suggest ideas for improvement (such as password strength).

![](//media.balsamiq.com/img/support/tutorials/ui101/shopify-validation.png)

Validation is often used to help users recover from errors. But even better than providing good validation is preventing the need for it in the first place. 

Following [text input guidelines](../text-input/) and implementing [autocomplete](http://ui-patterns.com/patterns/Autocomplete) or [forgiving formats](http://ui-patterns.com/patterns/ForgivingFormat) can minimize the need for validation. The [Nielsen Norman Group](https://www.nngroup.com/) has a good [article on preventing user errors](https://www.nngroup.com/articles/slips/) that goes into more detail.

---

## How to Use Validation

* Only show error validation messages or styles after a user has interacted with a particular field. ([*U.S. Web Design Standards*](https://standards.usa.gov/components/form-controls/#text-input))
* Try to validate "on-the-fly", before the form is submitted. But if you can't, consider adding a notification to summarize feedback at the top of the page when it reloads.
* Don't clear invalid input data unless users aren't able to correct errors easily. Doing so allows users to correct mistakes without starting over. ([*KDE Visual Design Group/HIG*](https://community.kde.org/KDE_Visual_Design_Group/HIG/LineEdit))
*  Provide guidance on how to fix any errors, don't just tell users what they did wrong.
*  Follow voice and tone guidelines, if you have them. (If you don't have your own, there are [some great examples here](http://voiceandtoneguides.webflow.io/).)

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/validation-example.png)


---

## Types of Validation

### States

There are generally three states for validation components (shown above):

1. **Success** - Tells users that their entry or selection is valid. Not required, but can be helpful for new or novice users.
2. **Warning** - Usually indicates that an entry or selection is valid, but not recommended. A weak password, for example.
3. **Error** - The most common form of validation. Alerts users to an invalid entry and, preferably, suggests how they can fix it.

### Variations

The primary way in which validation components vary is in their presentation or styling. Color is frequently used, although in different ways. It should not be the only indicator, however, because it may not be discernible by color blind users. An icon and/or help text is often used in addition.

![](//media.balsamiq.com/img/support/tutorials/ui101/validation-variations.png)

---

## Related Controls 

* [Alerts](../alerts/)
* [Text Input](../text-input/)
* Notifications