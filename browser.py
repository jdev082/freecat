#!/bin/python
# Python Web Browser, Concept
# Build not tied to a release
# experimental-channel
import webview
import os

engine="pywebview"
enginecmd=""
enginever="3.5"
enginehomepage="https://pywebview.flowrl.com/"
launchargs=""
enginetype="python"
searchengine="built-in"
searchfrombar="unsupported"

webview.create_window('FreeCat', 'src/home.html')
webview.start()
