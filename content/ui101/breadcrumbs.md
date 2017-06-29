---
title: Breadcrumbs
date: '2015-12-16T11:00:00.000+00:00'
menu: menuui101
weight: 50
---

Breadcrumbs are a compact way to show a site or application hierarchy. They not only show users where they are, but provide an easy way to allow them to navigate up multiple levels.

Because they only require a small amount of space, they are unobtrusive and not distracting. The [Nielsen Norman Group writes](https://www.nngroup.com/articles/breadcrumb-navigation-useful/) that "user testing shows **many benefits and no downsides to breadcrumbs** for secondary navigation."


## When to Use Breadcrumbs

As stated above, breadcrumbs are considered *secondary* navigation, meaning that they **shouldn't be provided as the only way for users to navigate** ([*KDE Visual Design Group/HIG*](https://community.kde.org/KDE_Visual_Design_Group/HIG/Breadcrumbs)). This is because they are not as obvious or noticeable as other navigation methods, such as [Tabs](../tabs/).

![](//media.balsamiq.com/img/support/tutorials/ui101/dbc-breadcrumbs.png)

You can use breadcrumbs when there is no visible way to navigate back to the parent page. Breadcrumbs are not needed, for example, with hierarchical vertical navigation, such as a tree control, because the navigation path is always visible.

Breadcrumbs can be preferable to other hierarchical navigation controls when space (especially in the horizontal direction) is constrained, such as on mobile. They might not be ideal for very deep hierarchies, however, where they can become very long. See the [variations](#variations) below for how they can be condensed in these cases.


---

## How to Use Breadcrumbs

* Include the name of the current page as the last item in the breadcrumb, but don't link it. It is generally good practice not to include links to the current page. ([*Nielsen Norman Group*](https://www.nngroup.com/articles/breadcrumb-navigation-useful/))
* Even though the title of the page may be indicated in the breadcrumb, it is good practice to repeat it below, as the breadcrumb itself is often small.
* Use a single character to separate the links. The most common separators for breadcrumbs are the ">" and "/" characters.
* There is some debate about whether breadcrumbs should show the site/application hierarchy or the path that the user has taken (i.e., more akin to the [origin of the name "breadcrumb"](https://en.wikipedia.org/wiki/Hansel_and_Gretel)). However, most guidelines recommend the former, where the links show the site hierarchy, rather than user's path. ([*Nielsen Norman Group*](https://www.nngroup.com/articles/breadcrumb-navigation-useful/))
* Place breadcrumbs above the content, but *not* above any primary navigation (such as a horizontal or header menu). ([*KDE Visual Design Group/HIG*](https://community.kde.org/KDE_Visual_Design_Group/HIG/Breadcrumbs))
* Avoid using multiple sets of breadcrumbs on one page.


### Basic Usage

![](//media.balsamiq.com/img/support/tutorials/ui101/breadcrumbs.png)

---

## Types of Breadcrumbs

### States

Breadcrumbs should be constructed from standard links and text, and should inherit the same states. As with [standard links](https://www.w3schools.com/html/html_links.asp), breadcrumb links may have normal, hover, active, and visited states.

### Variations

**Condensed Breadcrumbs**    
You may use this pattern when the number of items exceeds about 5 or as space requires. Clicking on the "..." can expand the entire list, or only the last few items. 

**Dropdown Breadcrumbs**   
This is a less common pattern that combines breadcrumbs with a vertical menu to allow users to navigate non-linearly. It is not standard and should be used sparingly.

![](//media.balsamiq.com/img/support/tutorials/ui101/breadcrumbs-variations.png)

---

## Related Controls 

* [Dropdown Menu (Combo Box)](../dropdown/)
