---
title: Text Input
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 15
---
Text input fields allow keyboard input from the user. They are frequently used in with other types of input controls in a form, but can be used on their own.

## When to Use Text Input

Text input fields are used when requesting free-form input from a user, such as a username, phone number, password, or comment. They are one of the main components in a form. They are also frequently used for search, comments and chat.

Here is an example:

![Facebook](//media.balsamiq.com/img/support/tutorials/ui101/facebook-text-input.png)

It is arguably more important to know when *not* to use them. Following the usability heuristic ["recognition rather than recall"](https://www.nngroup.com/articles/recognition-and-recall/), if you know in advance the list of possible, valid entries, it is better to use a [dropdown menu (combo box) control](../dropdown/) or other constrained input control to reduce errors and facilitate entry. When asking for a country name, salutation, or payment method, for example.

The [U.S. Web Design Standards](https://standards.usa.gov/components/form-controls/#text-input) suggests using them only when "you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers."


---

## How to Use Text Input



* The text that the user types inside the text field should be sized appropriately so that it can be read legibly inside the control (it usually matches the size of the corresponding label, if present).
* Ensure that the length of a text input field comfortably accommodates the length of the expected input. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/fields-and-labels/text-fields/))
* Text fields should indicate their state – whether enabled or disabled, empty or filled, valid or invalid – with clear label, input, and assistive text. ([*Google Material Design guidelines*](https://material.io/guidelines/components/text-fields.html#text-fields-principles))
* Placeholder text (also called hint text) can be used inside the input field (see the "Website" field below), but it shouldn't take the place of a label in a form, since it should disappear when the user starts typing. (Also see [this note about accessibility of placeholder text](https://standards.usa.gov/components/form-controls/#text-input-docs).)
* Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. ([*U.S. Web Design Standards*](https://standards.usa.gov/components/form-controls/#text-input)) (Try using [Input masks](https://www.lukew.com/ff/entry.asp?756) or [flexible inputs](https://www.lukew.com/ff/entry.asp?755) instead)
* For longer text, use a text area control (also called multi-line entry field), rather than a single line control.

For reference, the [Bootstrap](http://getbootstrap.com/) documentation has some good [examples of different layouts and types of text input fields](http://getbootstrap.com/css/#forms-example). 

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/text-input.png)

---

## Types of Text Input

### States

![](//media.balsamiq.com/img/support/tutorials/ui101/text-input-states.png)



### Variations

![](//media.balsamiq.com/img/support/tutorials/ui101/text-input-variations.png)

Also see ["forgiving format"](http://ui-patterns.com/patterns/ForgivingFormat).

---

## Related Controls 

* [Dropdown Menu (Combo Box)](../dropdown/)





