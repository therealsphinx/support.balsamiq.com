---
date: 2015-05-09T16:46:35+02:00
title: "Installing Mockups for Desktop on Linux Mint 14-15 32 or 64 bit"
menu:
  menuinstallation:
    parent: installation
weight: 170
---
This article contains installation instructions for Linux Mint. For other Linux installation instructions see [this Linux installation article](http://support.balsamiq.com/customer/portal/articles/99007#install).

* * *

## 32 bit installation

Create symbolic links for gnome keyring libraries:

<pre>sudo ln -s /usr/lib/i386-linux-gnu/libgnome-keyring.so.0 /usr/lib/libgnome-keyring.so.0</pre>

Download the latest Adobe air installer

<pre>wget http://airdownload.adobe.com/air/lin/download/latest/AdobeAIRInstaller.bin</pre>

Set the executable bit in order to launch the installer

<pre>chmod +x AdobeAIRInstaller.bin</pre>

Launch installer

<pre>./AdobeAIRInstaller.bin</pre>

in case the shell returns an error such as "file not found" you may need to add "." to the PATH environment variable

<pre>export PATH=$PATH:.</pre>

* * *

## 64 bit installation

install 32 bit libraries

<pre>sudo apt-get install ia32-libs</pre>

Create symbolic links for gnome keyring libraries:

<pre>sudo ln -s /usr/lib/x86_64-linux-gnu/libgnome-keyring.so.0 /usr/lib/libgnome-keyring.so.0
sudo ln -s /usr/lib/x86_64-linux-gnu/libgnome-keyring.so.0.2.0 /usr/lib/libgnome-keyring.so.0.2.0</pre>

Download the latest Adobe air installer

<pre>wget http://airdownload.adobe.com/air/lin/download/latest/AdobeAIRInstaller.bin</pre>

Set the executable bit in order to launch the installer

<pre>chmod +x AdobeAIRInstaller.bin</pre>

Launch installer

<pre>./AdobeAIRInstaller.bin</pre>

in case the shell returns an error such as "file not found" you may need to add "." to the PATH environment variable

<pre>export PATH=$PATH:.</pre>
