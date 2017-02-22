#!/bin/sh

if [ -d ~/Library/Preferences ];
then
    echo "~/Library/Preferences exists"
else
    echo "~/Library/Preferences does not exist, skip iterm config installation"
    exit 0
fi

if [ -f ~/Library/Preferences/com.googlecode.iterm2.plist ];
then
    echo "com.googlecode.iterm2.plist exists, file renamed to .old"
    mv ~/Library/Preferences/com.googlecode.iterm2.plist ~/Library/Preferences/com.googlecode.iterm2.plist.old
fi

if [ -L ~/Library/Preferences/com.googlecode.iterm2.plist ];
then
    echo "link of ~/Library/Preferences/com.googlecode.iterm2.plist already exists"
else
    ln -s ~/.dotfiles/iterm/com.googlecode.iterm2.plist ~/Library/Preferences/
fi
