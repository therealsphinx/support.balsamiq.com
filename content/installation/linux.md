---
title: Linux
date: '2015-05-09T14:46:35.000+00:00'
weight: 120
menu:
  menuinstallation:
    weight: 120
draft: ''

---
Balsamiq Mockups 3 for Desktop is not supported on Linux.  However users report that it runs well using [Wine](https://www.winehq.org/).

Linux users might also be interested in trying [myBalsamiq](https://balsamiq.com/products/mockups/mybalsamiq), our browser-based version, which only requires a modern browser and the Flash Player.

Here are the instruction for [installation on Ubuntu 16.10](https://docs.google.com/spreadsheets/d/1kLIYKYRsan_nvqGSZF-xJNxMkivH7uNdd6F-xY0hAUM):

1. Install wine:

    ```bash
    sudo apt-get install wine
    ```

2. Download the offline bundle named like Balsamiq_Mockups_3.x.y_bundled.zip and install it in /opt:

    ```bash
    sudo unzip Downloads/Balsamiq_Mockups_3.x.y_bundled.zip -d /opt
    sudo mv /opt/Balsamiq_Mockups_3 /opt/balsamiq_3_x_y
    sudo rm -f /opt/balsamiq && sudo ln -s /opt/balsamiq_3_x_y /opt/balsamiq
    sudo mv /opt/balsamiq/Balsamiq\ Mockups\ 3.exe /opt/balsamiq/balsamiq.exe
    
    # This Should Now Work
    wine /opt/balsamiq/balsamiq.exe
    ```

3. Add a startup icon:

    ```bash
    echo '[Desktop Entry]
    Encoding=UTF-8
    Name=Balsamiq Mockups
    Icon=/opt/balsamiq/icons/mockups_ico_48.png
    Exec=wine /opt/balsamiq/balsamiq.exe
    Type=Application
    Categories=Graphics;
    MimeType=application/x-xdg-protocol-tg;x-scheme-handler/tg;
    ' |sudo tee /usr/share/applications/balsamiq.desktop
    ```
