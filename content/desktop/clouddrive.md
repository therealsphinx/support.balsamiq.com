---
title: Can I Use Balsamiq Mockups 3 for Desktop with Dropbox / Box.com / OneDrive
  / iCloud Drive?
date: '2015-05-09T14:46:35.000+00:00'
weight: 20
menu:
  menudesktop:
    weight: 20
draft: ''

---
We often get this question: does Balsamiq Mockups 3 work well with my favorite file sharing solution?

The answer to that is: **Yes, yes it does**. But read on for some things you might want to know first.

## Getting Conflicted Copies?

File sharing solutions often create duplicate copies of your files when they cannot safely sync your changes to their server. This is common when two people work on the same file at the same time.

Sometimes file sharing solutions create conflicted copies of your files in a pretty low-level (read: sneaky) way, meaning that Balsamiq Mockups is not only not notified of the change, but it will think that it's working on your original file while your changes are being saved to the conflicted copy of the file. So, **if you reload a file and can't see your changes, check the folder where your BMPR file is stored**, there will probably be a conflicted copy file with your changes in it.

To merge your content from the conflicted copy to the main file, just open both BMPRs in Mockups 3 for Desktop and either copy/paste certain elements or drag+drop mockups and assets between the two.

* * *

## On a Phone Connection?

If you're paying for bandwidth by the Gigabyte instead of a flat fee, we recommend that you either **pause syncing** while you're working on it, or work on your BMPRs in a different folder, and only copy them to your file sharing folder when you're done.

This is because Mockups 3 autosaves every change to disk, so if you store it in your file sharing folder, it will sync a lot.

* * *

## The Old Balsamiq Worked Better!

That is correct, our older versions (1 and 2) used a file format (BMML) which was fully text-based, which is something file sharing solutions know how to deal with better than our current BMPR format.

This meant that the chance of having conflicted copies was lower, although we used to have an issue of bad merges which would corrupt BMML files, which is, in our opinion, a worse problem than having two conflicted copies.

* * *

## I Want to See What Others Are Doing in Real Time!

We definitely plan on bringing real-time collaboration to Balsamiq Mockups 3 for Desktop. But, instead of trying to leverage Dropbox and the many other file sharing solutions for it, we will use our own service, which we already use to power [real-time collaboration in Mockups for Google Drive](https://docs.balsamiq.com/google-drive/collaborating/) today.

Stay tuned for updates, it will be awesome.
