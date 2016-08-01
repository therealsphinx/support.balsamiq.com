---
date: 2016-07-12T12:59:45-07:00
draft: true
title: "BMPR File Format Reference"
menu: "menuresources"
weight: 10
---
<!-- the following will be removed when all the TODOs have been answered/removed -->

<style>
.mb-todo {
  display: block;
  /*display: none !important;*/
  background-color: #ffb8b4;
  padding: 10px;
  color: #3a2a29;
  border-radius: 10px;
  border-color: #ff0000;
  border-style: dotted;
  font-size: 0.85em;
}

td .mb-todo, dt .mb-todo {
  display: inline;
}

.mb-todo kbd {
  margin-right:5px;
}
</style>

<div class="mb-todo">
  <div><kbd>TODO</kbd> What tools/apps still use this older format?</div>
  <div><kbd>TODO</kbd> I think of this as the B3 format - is it called something else externally?</div>
  <div><kbd>TODO</kbd> Describe possible INFO table name values</div>
  <div><kbd>TODO</kbd> How do we generate UUIDs?</div>
  <div><kbd>TODO</kbd> Address remaining TODOs.</div>
  <div><kbd>TODO</kbd> What's the difference between a resource or mockup's measuredH versus it's height?</div>
  <div><kbd>TODO</kbd> How is a resource's order value derived and used?</div>
  <div><kbd>TODO</kbd> How does a BRANCH record get its "branchDescription"?</div>
  <div><button>Hide TODOs</button></div>
</div>

<script>
$('.mb-todo button').click(function(){
  $('.mb-todo').hide();
});
</script>

At the most basic level a BMPR file is a humble SQLite database file. Using SQLite enables BMPR files to contain metadata about the real data - the "stuff" that makes up a Mockups project. That "stuff" is mostly JSON data used to describe and compose the actual contents of a Mockups project.

There are 4 tables in a BMPR file:

<ul class="list-group">
  <li class="list-group-item"><a href="#info">INFO</a> contains details about the BMPR file itself</li>
  <li class="list-group-item"><a href="#resources">RESOURCES</a> is where most of the content found in a project lives</li>
  <li class="list-group-item"><a href="#branches">BRANCHES</a> contains information about branches in a project</li>
  <li class="list-group-item"><a href="#thumbnails">THUMBNAILS</a> has entries for mockup thumbnails</li>
</ul>

---

<h2><span class="glyphicon glyphicon-book" aria-hidden="true"></span> INFO</h2>

The info table contains meta data for a mockups project. That data helps describe what format the archive is in, what schema it follows, and various other useful pieces of information related to the file itself.

<div class="panel panel-default">
  <div class="panel-heading">Table Fields</div>
  <table class="table">
    <tbody>
      <tr>
        <th>Field</th>
        <th>Datatype</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>NAME</td>
        <td>TEXT</td>
        <td>The unique name of the kind of meta data for this row. Think of this as a you would a key in structure or hash.</td>
      </tr>
      <tr>
        <td>VALUE</td>
        <td>TEXT</td>
        <td>The value for this meta data entry</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="panel panel-info">
  <div class="panel-heading">Example Data</div>
  <table class="table">
    <tbody>
      <tr>
        <th>NAME</th>
        <th>VALUE</th>
      </tr>
      <tr>
        <td>SchemaVersion</td>
        <td>1.2</td>
      </tr>
      <tr>
        <td>ArchiveRevision</td>
        <td>44</td>
      </tr>
      <tr>
        <td>ArchiveRevisionUUID</td>
        <td>007F035B-6147-D643-C5CC-2871D9DA1C43</td>
      </tr>
      <tr>
        <td>ArchiveFormat</td>
        <td>bmpr</td>
      </tr>
      <tr>
        <td>ArchiveAttributes</td>
        <td>
          <div class="json-example">
{{< highlight json >}}
{
  "creationDate":1467124505618, // the date this bmpr file was created
  "name":"banking_interface"    // name of the file without extension
}
{{< /highlight >}}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mb-todo"><kbd>TODO</kbd> fill in content for the following:</div>
<div class="list-group">
  <div class="list-group-item">
    <h5 class="list-group-item-heading">SchemaVersion</h5>
    <p class="list-group-item-text">This is a sample of what the description of SchemaVersion. It's written a bit long so I can see how it behaves when it wraps. I normally write things twice if I want to bulk up text, but not this time. This time, it's all real.</p>
  </div>
  <div class="list-group-item">
    <h5 class="list-group-item-heading">ArchiveRevision</h5>
    <p class="list-group-item-text">How does padding look. Crowded?</p>
  </div>
  <div class="list-group-item">
    <h5 class="list-group-item-heading">ArchiveRevisionUUID</h5>
    <p class="list-group-item-text">This is a sample of what the description of SchemaVersion. It's written a bit long so I can see how it behaves when it wraps. I normally write things twice if I want to bulk up text, but not this time. This time, it's all real.</p>
  </div>
  <div class="list-group-item">
    <h5 class="list-group-item-heading">ArchiveFormat</h5>
    <p class="list-group-item-text"><kbd>TODO</kbd></p>
  </div>
  <div class="list-group-item">
    <h5 class="list-group-item-heading">ArchiveAttributes</h5>
    <p class="list-group-item-text"><kbd>TODO</kbd></p>
  </div>
</div>

---

<h2><span class="glyphicon glyphicon-book" aria-hidden="true"></span> RESOURCES</h2>

Details about mockups, assets, and symbols are stored here. Each row in this table contains details (coordinates, shape, and size, etc.) about every element in a project.

<div class="panel panel-default">
  <div class="panel-heading">Table Fields</div>
  <table class="table">
    <tbody>
      <tr>
        <th>Field</th>
        <th>Datatype</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr>
        <td>ID</td>
        <td>TEXT</td>
        <td><p>A unique id for a resource</p></td>
        <td><code>ADC6E183-B52E-038A-1BBC-DAEDBAE75554</code></td>
      </tr>

      <tr>
        <td>BRANCHID</td>
        <td>TEXT</td>
        <td><p>The branch this resource belongs to</p></td>
        <td><code>Master</code></td>
      </tr>
      <tr>
        <td>ATTRIBUTES</td>
        <td>TEXT</td>
        <td colspan="2">
          <p>JSON data with keys for <em>creationDate</em>, <em>thumbnailID</em>, <em>kind</em>, <em>modifiedBy</em>, <em>notes</em>, <em>mimeType</em>, <em>order</em>, <em>name</em>, <em>importedFrom</em>, and <em>trashed</em></p>
        </td>
      </tr>
      <tr>
        <td colspan=4 class="json-example">
          <p><strong>Example:</strong></p>
{{< highlight json >}}
{
  "creationDate": 0,                    // the date this resource was created
  "importedFrom": "",                   // where this resource was imported from (if it was)
  "kind": "mockup",                     // the kind of resource this row describes
  "mimeType": "text/vnd.balsamiq.bmml", // the mime type for this resource
  "modifiedBy": null,                   // who (or what) last modified this resource
  "name": "Banking Website",            // the name of this resource
  "notes": "",                          // notes for this resource
  "order": 2445916,                     // TODO: what does this integer represent?
  "thumbnailID": "[UUID]",              // the unique ID of the thumbnail for this mockup
  "trashed": false                      // a boolean flag indicating if this is a trashed resource
}
{{< /highlight >}}

        {{% alert info %}}The _order_ key is only present when the resource is a **mockup**.{{% /alert %}}
        </td>
      </tr>
      <tr>
        <td>DATA</td>
        <td>TEXT</td>
        <td>
          <p>JSON data with keys for mockup data. See below for more details.</p>
          <p>If the resource is a kind of <strong>otherAsset</strong> the data stored for this resource will be the Base64 encoded representation of the asset.</p>
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan=4 class="json-example">
          <p><strong>Example:</strong></p>
{{< highlight json >}}
{
  "mockup": {
    "controls": {        // an array containing each element (see more about this below)
      "control": ["..."] // JSON data with properties unique to the control type
    },
    "measuredH": "600",  // the pixel height of the mockup
    "measuredW": "800",  // the pixel width of the mockup
    "mockupH": "600",    // TODO: is this different than measuredH?
    "mockupW": "800",    // TODO: is this different than measuredW?
    "version": "1.0"     // TODO: how is this determined?
  }
}
{{< /highlight >}}
        </td>
      </tr>
    </tbody>
  </table>
</div>

Stored resources share some common keys. The first 10 keys in the following example will be the same for any kind of <strong>mockup</strong> or <strong>symbol</strong> resource.

<div class="json-example">
{{< highlight json >}}
{
  "typeID": "DataGrid", // the type of element this is (ie. DataGrid, or TabBar)
  "ID": "2",            // a unique integer for this resource
  "h": "319",           // the pixel height of this resource
  "w": "739",           // the pixel width of this resource
  "x": "30",            // the x position of this resource
  "y": "257",           // the y position of this resource
  "zOrder": "17",       // the position of this resource, front to back
  "measuredH": "322",   // TODO: what actually is this?
  "measuredW": "634",   // TODO: what actually is this?
  "properties": {       // resource type specific properties
    "hLines": "false",
    "selectedIndex": "0",
    "size": "14",
    "text": "[CSV formatted data for this DataGrid]",
    "vLines": "true",
    "verticalScrollbar": "true"
  }
}
{{< /highlight >}}
</div>

<p>Each different kind of resource will have properties that are specific to that kind of resource. Note how the highlighted keys within <em>properties</em> differ between the example above and below:</p>

<div class="json-example">
{{< highlight json "hl_lines=12 13 14 15 16">}}
{
  "typeID": "TabBar",
  "ID": "7",
  "h": "535",
  "w": "769",
  "x": "15",
  "y": "52",
  "measuredH": "100",
  "measuredW": "241",
  "zOrder": "2",
  "properties": {
    "borderStyle": "square",
    "color": "15658734",
    "selectedIndex": "0",
    "tabHPosition": "center",
    "text": "[Comma separated list of tab names]"
  }
}
{{< /highlight >}}
</div>

There are enough different kinds of resources that documenting the properties for each would be impractical. Knowing the purpose of their common keys should at least provide a foundation for understanding each different kind.

---

<h2><span class="glyphicon glyphicon-book" aria-hidden="true"></span> BRANCHES</h2>

The branches table contains records for each branch in a project. A typical project will contain a "Master" branch at the very least. <div class="mb-todo"><kbd>TODO</kbd> is it accurate to say it will **always** contain a master branch?</div>

<div class="panel panel-default">
  <div class="panel-heading">Table Fields</div>
    <table class="table">
      <tbody>
      <tr>
        <th>Field</th>
        <th>Datatype</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>ID</td>
        <td>TEXT</td>
        <td>A unique id for a branch</td>
      </tr>
      <tr>
        <td>ATTRIBUTES</td>
        <td>TEXT</td>
        <td>JSON data. Keys depend on whether the record is for a Master branch or alternate branch.</td>
      </tr>
      <tr>
        <td colspan=3 class="json-example">
          <p><strong>Master branch example:</strong></p>
{{< highlight json >}}
{
  "branchDescription":"",       // TODO is this editable currently?
  "creationDate":1467124505618, // the date this branch was created
  "fontFace":"Chalkboard",      // the name of the font that will be used throughout the project
  "fontSize":16,                // the size of the font that will be used throughout the project
  "linkColor":545684,           // the color used for links throughout the project
  "modifiedBy":[],              // what populates this?
  "projectDescription":"",      // the description for the project
  "selectionColor":9813234,     // the color used for selections throughout the project
  "skinName":"sketch",          // the name of the skin to use throughout the project
  "symbolLibraryID":""          // a unique id for the symbol library used throughout the project
}
{{< /highlight >}}

          <p><strong>An alternate branch example:</strong></p>
{{< highlight json >}}
{
  "branchName":"alt" // the name of an alternate branch
}
{{< /highlight >}}
        </td>
      </tr>
    </tbody>
  </table>
</div>

{{% alert info %}}**Note:** Changes made to things like fonts, link colors, project descriptions on an alternative branch are actually made to the **Master** branch. Alternative branches inherit these properties from the **Master** branch, which is why alternative branches only contain a **branchName**. {{% /alert %}}

---


<h2><span class="glyphicon glyphicon-book" aria-hidden="true"></span> THUMBNAILS</h2>

<p>Every Mockups project has thumbnails of the mockups within the project. The <em>THUMBNAILS</em> table keeps track of those thumbnails.</p>

<div class="panel panel-default">
  <div class="panel-heading">Table Fields</div>
  <table class="table">
    <tbody>
      <tr>
        <th>Field</th>
        <th>Datatype</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr>
        <td>ID</td>
        <td>TEXT</td>
        <td>
          <p>A unique id for a thumbnail.</p>
        </td>
        <td><code>4B16F0EB-CAD0-5E34-0BD3-DAEDBAF4CAF6</code></td>
      </tr>
      <tr>
        <td>ATTRIBUTES</td>
        <td>TEXT</td>
        <td>
          <p>JSON data with keys for <em>image</em>, <em>resourceID</em>, and <em>branchID</em></p>
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td colspan=4 class="json-example">
          <p><strong>Example:</strong></p>

{{< highlight json >}}
{
  "branchID":"Master",    // this is the name of the branch this thumbnail is associated with
  "image":"[Image Data]", // contains Base64 encoded data for the thumbnail image.
  "resourceID":"[UUID]"   // this is the UUID of the mockup this thumbnail is a snapshot of
}
{{< /highlight >}}
        </td>
      </tr>
    </tbody>
  </table>
</div>
