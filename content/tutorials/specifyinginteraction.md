---
date: 2015-12-16T12:00:00+01:00
title: "Specifying Interaction with Mockups"
menu:
  menututorials:
    parent: tutorials
weight: 120
---

## About this Tutorial 

<div style="float:right; width:250px; margin-left: 20px;">[![Film Storyboard](https://media.balsamiq.com/img/support/tutorials/interaction/film-storyboard.jpg)](https://media.balsamiq.com/img/support/tutorials/interaction/film-storyboard.jpg)
<span class="t10">Example storyboard depicting motion in the film, _The Forbidden Kingdom_</span></div>

Designers, filmmakers, and animators have used low fidelity, static representations of content for communicating motion and interaction for years. Many of those techniques have been borrowed by software designers designing for the screen, and there are well-known practices for communicating interaction in static documents. This tutorial provides some tips for designing interaction in Mockups using these techniques.

The tutorial starts with a brief explanation of why these techniques are used, but if you like you can [skip to the examples](#ixmockupsway).

* * *

## Low Fidelity Interaction Design 

The spectrum of techniques for specifying and communicating interaction ranges from sketching to prototyping. Mockups is the sort of tool that sits somewhere across these techniques, and we think it bridges some of the gaps between sketching and wireframing, and only touches prototyping.

These are the techniques typical in design and development for specifying interaction in software, web sites, and applications.

[![](https://media.balsamiq.com/img/support/tutorials/interaction/doctypes.png)](https://media.balsamiq.com/img/support/tutorials/interaction/doctypes.png)

We think Mockups fits into this picture of early ideation in different ways. We use and have seen our customers use Mockups for all of the types of design documents in the blue zone above—the Mockups-friendly zone. Using [third-party tools](/resources/extensions/#exporting-your-mockups-to-code-version-2), people even go beyond static prototyping capabilities to import Mockups files into apps that create rich interaction prototypes using technologies like HTML or Flash.

Before we get into the details about the techniques, let's consider the differences. Bill Buxton makes this distinction about sketches and prototypes.

> Sketches and prototypes are both instantiations of the design concept. However they serve different purposes, and therefore are concentrated at different stages of the design process. Sketches dominate the early ideation stages, whereas prototypes are more concentrated at the later stages where things are converging within the design funnel.  
> –Bill Buxton, _Sketching User Experiences_

Ideation is a constantly expanding and contracting funnel where you're producing many ideas then selecting and narrowing, and then repeating that process to find the right design. It's a funnel because many ideas become fewer and fewer as you iterate on the ideas that work. The main thing to note is that working at low fidelity at the onset lets you focus on issues at the core of the product, like function and interaction, before thinking about the surface.

[![](https://media.balsamiq.com/img/support/tutorials/interaction/designfunnel.png)](https://media.balsamiq.com/img/support/tutorials/interaction/designfunnel.png)

Working in low fidelity saves time and money, and gives you a better chance of ending up with the right design. Jumping to high fidelity too soon can cost you time if you have to restart when a design needs to change direction. Pivoting is easy at low fidelity.

* * *

## Specifying Interaction the Mockups Way 

Let's take a detailed look at how you can specify interaction.

### 1\. Flowcharts

Flowcharting is one of those techniques that is only marginally within the Mockups-friendly zone. But you can do some simple user flow diagrams with the geometric shape component and some arrows. What you'll end up with is something loose and organic, more like something you'd create when sketchnoting with pen and paper, than what you'd create with a tool like Visio.

Here's how we do flowcharts. It's quick and dirty, but it gets the job done.

[![Flow Charts](https://media.balsamiq.com/img/support/tutorials/interaction/flowcharts.png)](https://media.balsamiq.com/img/support/tutorials/interaction/flowcharts.png)

There are no magnets for lines to attach to and the edges of shapes remain rough and sketchy. So if you get past the need to snap to boxes and create rectilinear lines, then you can get by in communicating flow.

Thanks to Andrey Savchenko for the use of the [WordPress Query Functions flowchart](http://www.rarst.net/script/wordpress-query-functions/) above.

### 2\. Sketchboards 

The sketchboard technique is a low-fi sketching practice for creating many sketches quickly and iteratively. You typically review with a team, and refinie as you go. We use a technique of collaborative [sketchboarding with Mockups](http://konigi.com/notebook/creating-sketchboards-mockups) using thumbnail interface sketches created with a special [sketch symbols library](https://mockupstogo.mybalsamiq.com/projects/layout/Sketch+Templates). We then iterate over the sketches in our web app, myBalsamiq.

The idea with thumbnail sketching is to draw a smallish representation of your design, roughing out boxes and greeking lines of text to get an idea of what your interface will look like. You actually don't even need text to sketch the interface, just scribbled lines. You can use text captions to describe what's happening in the story.

[![Sketchboards](https://media.balsamiq.com/img/support/tutorials/interaction/sketchboard.png)](https://media.balsamiq.com/img/support/tutorials/interaction/sketchboard.png)
<small>[[Download the Mockups BMML file above](https://mockupstogo.mybalsamiq.com/projects/layout/Sketch+Templates.bmml).]</small>

As you select the designs with the most merit, you can begin to move up out of the thumbnail scale into wireframe scale.

### 3\. Wireframes with Annotations 

Wireframes are the core of the Mockups-friendly zone. This is what Mockups is mainly designed for—sketchy wireframes that represent elements of the screen, with annotations to specify the functionality, content, and interaction.

This is the easiest of the techniques for specifying interaction, however the wireframes alone cannot describe interactive behaviors, so annotation communicates what happens when certain actions are triggered. Wireframes with annotation and state illustration can serve as the interface specification given a team that speaks the same design language.

[![Wireframes with Annotation](https://media.balsamiq.com/img/support/tutorials/interaction/wireframes-with-annotation.png)](https://media.balsamiq.com/img/support/tutorials/interaction/wireframes-with-annotation.png)

### 4\. Wireframes with Illustrated Flow 

Sometimes words alone cannot communicate a behavior. When a picture is required, then we illustrate flow in the wireframes.

Our typical technique for illustrating flow starts with creating a wireframe, and then we identify elements in the wireframe with the interactive behaviors we need to communicate.

Our technique ends up looking like a hybrid of wireframe, [page description diagram](http://konigi.com/wiki/page-description-diagrams), and storyboard. In the margins of the wireframe we illustrate interaction, showing flow and state changes for parts of the view.

[![Wireframe with Flow](https://media.balsamiq.com/img/support/tutorials/interaction/wireframe-with-interaction-storyboard.png)](https://media.balsamiq.com/img/support/tutorials/interaction/wireframe-with-interaction-storyboard.png)

<small>[[Download the Mockups BMML file above](https://support.mybalsamiq.com/projects/spec-ix/Single+Project+Grid+View.bmml).]</small>

One neat trick you might try is to utilize the [Markup toggling feature](https://docs.balsamiq.com/desktop/markup/#markup-toggling-with-keyboard-shortcuts) in fullscreen/presentation mode. You can Group and right-click the annotations and flow storyboards in the margins, select Treat as Markup, and they'll be hidden. When you're viewing in fullscreen mode, you can show the wireframes, and then toggle annotation visibility to show the flow storyboards.

When our needs are modest, we just combine words with arrows and broken-out illustrations, as in the wireframe below.

[![Wireframe with Flow](https://media.balsamiq.com/img/support/tutorials/interaction/wireframe-with-flow.png)](https://media.balsamiq.com/img/support/tutorials/interaction/wireframe-with-flow.png)

<small>[[Download the Mockups BMML file above](https://support.mybalsamiq.com/projects/spec-ix/Suspended+For+Payment+Site+Pages.bmml).]</small>

### 5\. Storyboards 

Storyboarding is the well-known technique we've stolen from film and animation. It's simple to grasp, and requires moderate effort. Typically to create a storyboard, you show full-screen wireframes, or wireframes of parts of an interface, and show key frames that depict when a change in state occurs.

[![Storyboard](https://media.balsamiq.com/img/support/tutorials/interaction/storyboard.png)](https://media.balsamiq.com/img/support/tutorials/interaction/storyboard.png)

### 6\. Click-through Prototypes with Links 

Creating a click-through prototype is like animating a storyboard. You create a Mockup file for each view, page or state, and then link together the files to create a click-though prototype. This is similar to how one would use hyperlinks in simple HTML documents, in PDFs, or links in PowerPoint or Keynote.

[![Click Through Prototype](https://media.balsamiq.com/img/support/tutorials/interaction/click-through-prototype.png)](https://media.balsamiq.com/img/support/tutorials/interaction/click-through-prototype.png)
<small>[[View the prototype above](https://acme.mybalsamiq.com/projects/acme/grid) and download BMML files.]</small>

The first thing to be aware of is that files must be saved before you can link them. Once you have saved files, you can create links between mockups using any of the components that support linking, for example, link, button, buttonbar, tabs, etc.

Please refer to the [linking section of the help documentation](https://docs.balsamiq.com/desktop/linking/). It shows how to use the property inspector to create links between saved files. You can watch the short video below for a quick primer. Headphones warning: rowdy party music ahead!

{{< yt _8IyyvECYrg >}}

Once you've linked together your Mockups, you can use fullscreen/presentation mode to demonstrate the click-through prototype. If you export the project to PDF, you can also present the click through prototype in a PDF reader on any desktop computer, readily available and free.

If you're using myBalsamiq, you can also use the Web Prototype view, which opens your project without all of the surrounding myBalsamiq interface. We created this feature specifically for demonstration, and even for usability testing purposes.

This technique takes the most time and effort compared with the simpler techniques, and puts you in the position of maintaining more documents and potentially in danger of becoming precious with your Mockups. We tend not to use this technique too often, but it comes in very handy when you're doing demos or usability testing.

### 7\. Beyond Mockups 

This last category we include because there are third party tools that take advantage of exporting to the open Mockups BMML format to migrate your Mockups to a richer interactive prototype.

This takes considerable effort, but for those that want to do more with their Mockups after the right design has been selected, this is an option to make prototypes with working forms, and working state changes without requiring duplication of pages for each state. Once you go down this route, you're investing much more time on demonstrating the behaviors.

There are third party tools that will convert Mockups into code including HTML/JS/CSS, MXML/AS, WebORB, and to Mobile applications. You can see a [listing of all the 3rd party tools on our community page](/resources/extensions/).

* * *

## Summary 

There is no right way to wireframe. These are merely suggestions or best practices for communicating interaction. The best technique is the one that helps you communicate the design and implement the idea well in the finished product. Depending on your audience, start with the technique that communicates as simply as possible, and move up to more sophisticated techniques when you absolutely need to. Over time, in the right situations, the simpler techniques will suffice as the audience for your design documents grows to understand the language you use to communicate interaction.

Do what works for you, and if you have a new technique using Mockups that you'd like us to know about, please [tell us in our forum](http://forums.balsamiq.com)!