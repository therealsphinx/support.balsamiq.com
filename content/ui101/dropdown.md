---
title: Dropdown Menu (Combo Box)
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 25
---

The control with many names! Whether you call it a Dropdown menu, Combo Box (or Combobox), Pull Down menu (or Pull-down menu), Picker, Select input, or something else, you use them every day.

A dropdown menu gives you a list of items to select from.

## When to Use Dropdown Menus

Dropdown menus are a great way to present a large number of options without taking up much space on the screen. They can also reduce errors, when compared to [text input fields](../text-input/), because the input is constrained to the options available. [Welie.com](http://www.welie.com/patterns/showPattern.php?patternID=format) writes "The user may be familiar with the data but may not know the exact required syntax."

Drawbacks are that users can't see all the options at once and it can take time and dexterity to scroll. If you have a very long list, you may want to consider an [autocomplete text input field](http://ui-patterns.com/patterns/Autocomplete) instead.

![](//media.balsamiq.com/img/support/tutorials/ui101/print-dialog-dropdown.png)

According to the U.S. Web Design Standards, the [optimal number of items in a dropdown menu is between **seven and 15**](https://standards.usa.gov/components/form-controls/#dropdown). It suggests using [radio buttons or checkboxes](../radio-checkbox/) for shorter lists.

An exception is when the list is familiar so that users can expect to know the contents before opening it, such as days or months of the year, states/provinces, or countries. "For example, if you have an option menu labelled 'Month:' with the item 'January' selected, the user might reasonably infer that the menu contains the 12 months of the year without having to look." ([GNOME Human Interface Guidelines](https://developer.gnome.org/hig/stable/drop-down-lists.html.en))


---

## How to Use Dropdown Menus

* Order the items logically (e.g., sequential for dates/numbers, alphabetical for countries).
* Display a meaningful default selection. ([*macOS Human Interface Guidelines*](https://developer.apple.com/macos/human-interface-guidelines/fields-and-labels/combo-boxes/)) (*Pre-selecting an item can be dangerous, however, since you can't verify whether the user chose it deliberately. When in doubt, default to no selection.*)
* Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another. ([*U.S. Web Design Standards*](https://standards.usa.gov/components/form-controls/#dropdown))
* Allow users to click anywhere on the control to open it, rather than only the arrow.
* Use grouping or categorization when it makes sense (see [option group variation below](#variations)). Group headings or separators should not be selectable, however (*in HTML, this can be achieved using the [&lt;optgroup&gt;](https://www.w3schools.com/tags/tag_optgroup.asp) tag*).

See this [Nielsen Norman Group article about dropdowns](https://www.nngroup.com/articles/drop-down-menus/) for more helpful guidelines.

### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/dropdown.png)



---

## Types of Dropdown Menus

### States

![](//media.balsamiq.com/img/support/tutorials/ui101/dropdown-states.png)

### Variations

* Categorized (Option Group) Dropdown  
![](//media.balsamiq.com/img/support/tutorials/ui101/dropdown-variations.png)
* [Multi-select](http://getbootstrap.com/css/#selects)
* [Custom values](https://developer.gnome.org/hig/stable/drop-down-lists.html.en#custom-values)
* ["True" combo box](https://developer.apple.com/macos/human-interface-guidelines/fields-and-labels/combo-boxes/) (allows editing)

---

## Related Controls 

* [Text Input](../text-input/) 